import { get } from "../database/index.js";

export const ageRange = async ({ idNumber }, config) => {
  const person = await get(idNumber);
  const isNotUnderage = person.age >= config.min;
  const result = isNotUnderage ? "PASS" : "FAIL";

  return { result };
};
