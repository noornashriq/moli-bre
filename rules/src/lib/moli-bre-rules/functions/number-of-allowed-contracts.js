const { get } = require("../database/index.js");

const numberOfAllowedContracts = async ({ idNumber }, config) => {
  const person = await get(idNumber);
  const allowedMoreContracts = person.numberOfAllowedContracts >= config.min;
  const result = allowedMoreContracts ? "PASS" : "FAIL";

  return { result };
};

module.exports = { numberOfAllowedContracts };
