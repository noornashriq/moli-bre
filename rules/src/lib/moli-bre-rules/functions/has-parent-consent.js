const { get } = require("../database/index.js");

const hasParentConsent = async ({ idNumber }) => {
  const person = await get(idNumber);
  const result = person.hasParentConsent ? "PASS" : "FAIL";

  return { result };
};

module.exports = { hasParentConsent };
