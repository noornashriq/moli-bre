const { get } = require("../database/index.js");

const hasCTOS = async ({ idNumber }) => {
  const person = await get(idNumber);
  const result = person.hasCTOS ? "FAIL" : "PASS";

  return { result };
};

module.exports = { hasCTOS };
