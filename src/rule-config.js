import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {
  DynamoDBDocumentClient,
  GetCommand,
  QueryCommand,
} from "@aws-sdk/lib-dynamodb";

const dynamodb = new DynamoDBClient();
const client = DynamoDBDocumentClient.from(dynamodb);
const TABLE_NAME = "test-moli-rule-config";

export const getGroupId = async (name) => {
  const command = new QueryCommand({
    TableName: TABLE_NAME,
    IndexName: "RuleGroupName",
    KeyConditionExpression: "#group = :group",
    ExpressionAttributeNames: { "#group": "GroupName" },
    ExpressionAttributeValues: { ":group": name },
  });

  const response = await client.send(command);
  const item = response.Items[0];

  if (!item) {
    return null;
  }

  return item.SK;
};

export const getFunctionConfig = async (name) => {
  const command = new GetCommand({
    TableName: TABLE_NAME,
    Key: { PK: "Function", SK: name },
  });

  const response = await client.send(command);

  if (!response.Item) {
    return null;
  }

  return response.Item.Configuration;
};

export const listRules = async (id) => {
  const command = new QueryCommand({
    TableName: TABLE_NAME,
    KeyConditionExpression: "#PK = :PK",
    ExpressionAttributeNames: { "#PK": "PK" },
    ExpressionAttributeValues: { ":PK": `Rule#${id}` },
  });

  const response = await client.send(command);

  return response.Items.map((item) => ({
    id: item.SK,
    functionName: item.FunctionName,
    nextRule: item.NextRule,
    configuration: item.Configuration,
  }));
};
