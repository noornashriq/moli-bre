import data from "./data.js";

export const get = async (idNumber) => {
  return Promise.resolve(data.find((d) => d.idNumber === idNumber));
};
