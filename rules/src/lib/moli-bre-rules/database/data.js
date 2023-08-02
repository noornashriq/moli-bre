module.exports = [
  {
    // AgeRange: PASS
    // HasCTOS: PASS
    // NumberOfAllowedContracts: PASS
    idNumber: "880808-88-8888",
    age: 35,
    hasCTOS: false,
    numberOfAllowedContracts: 2,
  },
  {
    // AgeRange: PASS
    // HasCTOS: FAIL
    idNumber: "770707-77-7777",
    age: 35,
    hasCTOS: true,
    numberOfAllowedContracts: 2,
  },
  {
    // AgeRange: FAIL
    // HasParentConsent: FAIL
    idNumber: "060606-06-6666",
    age: 17,
    hasCTOS: false,
    numberOfAllowedContracts: 2,
  },
  {
    // AgeRange: PASS
    // HasCTOS: PASS
    // NumberOfAllowedContracts: FAIL
    idNumber: "550505-55-5555",
    age: 35,
    hasCTOS: false,
    numberOfAllowedContracts: 1,
  },
  {
    // AgeRange: FAIL
    // HasParentConsent: PASS
    // HasCTOS: PASS
    // NumberOfAllowedContracts: PASS
    idNumber: "040404-04-4444",
    age: 17,
    hasCTOS: false,
    numberOfAllowedContracts: 2,
    hasParentConsent: true,
  },
];
