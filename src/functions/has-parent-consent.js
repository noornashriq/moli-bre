import { get } from "../database/index.js";

export const hasParentConsent = async ({ idNumber }) => {
  const person = await get(idNumber);
  const result = person.hasParentConsent ? "PASS" : "FAIL";

  return { result };
};
