import { get } from "../database/index.js";

export const hasCTOS = async ({ idNumber }) => {
  const person = await get(idNumber);
  const result = person.hasCTOS ? "FAIL" : "PASS";

  return { result };
};
