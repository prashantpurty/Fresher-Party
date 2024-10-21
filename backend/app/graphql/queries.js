const queries = `#graphql
verifyGoogleToken(token: String!): String
getCurrectUser: User
VerifyTicket(ticket: String!): Ticket
getAllUsers(limit: Int, offset: Int): PaginatedUsers
`;

module.exports = { queries };
