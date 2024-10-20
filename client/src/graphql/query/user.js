export const VerifyGoogleAuthToken = `
  #graphql
  query verifyGoogleToken($token: String!) {
    verifyGoogleToken(token: $token)
  }
`;

export const GetCurrectLoginUserQuery = `
    #graphql
    query getCurrectLoginQuery {
      getCurrectUser {
        id
        name
        picture
        email
        createdAt
        Ticket {
          id
        }
      }
    }
  `;

export const GetVerifyTicket = `#graphql
  query VerifyTicket($ticket: String!) {
  VerifyTicket(ticket: $ticket) {
    id
    ownerId
    foodPreference
    redeemed
    
  }
}
`
