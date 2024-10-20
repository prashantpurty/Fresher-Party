const mutation = `#graphql
    makeTicket(description: String, foodPreference: String!): String!
`;

module.exports = { mutation };
