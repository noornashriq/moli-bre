import { getFunctionConfig } from "./rule-config.js";
import * as functions from "/opt/lib/moli-bre-rules/index.js";

export default async (functionName, payload, configuration) => {
  let config = configuration;

  if (config == null) {
    config = await getFunctionConfig(functionName);
  }

  const fn = functionName.charAt(0).toLowerCase() + functionName.slice(1);
  return functions[fn](payload, config);
};
