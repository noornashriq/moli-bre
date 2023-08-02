const { ageRange } = require("./functions/age-range.js");
const { hasCTOS } = require("./functions/has-ctos.js");
const { hasParentConsent } = require("./functions/has-parent-consent.js");
const {
  numberOfAllowedContracts,
} = require("./functions/number-of-allowed-contracts.js");

module.exports = {
  ageRange,
  hasCTOS,
  hasParentConsent,
  numberOfAllowedContracts,
};
