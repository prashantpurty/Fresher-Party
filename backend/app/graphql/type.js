const type = `#graphql
  type User {
    id: ID!
    email: String!
    name: String!
    picture: String
    Ticket: Ticket
    createdAt: String!
  }

  type PaginatedUsers {
      users: [User]
      totalCount: Int
    }

    type Ticket {
    id: ID!
    ownerId: ID!
    redeemed: Boolean
    foodPreference: String!
    description: String
    createdAt: String!
    updatedAt: String!
    }

    

`;

module.exports = { type };
