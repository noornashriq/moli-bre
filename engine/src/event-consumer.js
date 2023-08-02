import processRule from "./rule-processor.js";

export const handler = async (event, context) => {
  const groupName = event.pathParameters.path;
  const payload = JSON.parse(event.body);
  const response = await processRule(groupName, payload);

  return {
    statusCode: 200,
    body: JSON.stringify(response),
  };
};
