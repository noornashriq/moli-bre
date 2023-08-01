import invokeFunction from "./invoke-function.js";
import { getGroupId, listRules } from "./rule-config.js";

let resultStore = [];

const iterateRule = async (
  rules,
  payload,
  { functionName, nextRule, configuration }
) => {
  const response = await invokeFunction(functionName, payload, configuration);

  resultStore.push({ result: response.result, rule: functionName });

  if (nextRule == null) {
    return { ...response, rules: resultStore };
  }

  const nextRuleId = response.result === "PASS" ? nextRule[0] : nextRule[1];

  if (nextRuleId != null && nextRuleId !== "") {
    const nextRule = rules.find((rule) => rule.id === nextRuleId);
    return iterateRule(rules, payload, nextRule);
  }

  return { ...response, rules: resultStore };
};

export default async (name, payload) => {
  resultStore = [];

  const groupId = await getGroupId(name);
  const rules = await listRules(groupId);
  const initialRule = rules[0];

  return iterateRule(rules, payload, initialRule);
};
