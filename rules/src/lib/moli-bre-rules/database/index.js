const data = require("./data.js");

const get = async (idNumber) => {
  return Promise.resolve(data.find((d) => d.idNumber === idNumber));
};

module.exports = { get };
