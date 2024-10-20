const { queries } = require("./queries");
const resolvers = require("./resolver");
const { type } = require("./type");
const { mutation } = require("./mutation");

const userType = {
  queries,
  resolvers,
  type,
  mutation,
};

module.exports = userType;
