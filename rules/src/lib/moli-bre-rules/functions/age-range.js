const { get } = require("../database/index.js");

const ageRange = async ({ idNumber }, config) => {
  const person = await get(idNumber);
  const isNotUnderage = person.age >= config.min;
  const result = isNotUnderage ? "PASS" : "FAIL";

  return { result };
};

module.exports = { ageRange };
