const queries = `#graphql
verifyGoogleToken(token: String!): String
getCurrectUser: User
VerifyTicket(ticket: String!): Ticket
`;

module.exports = { queries };
