export const makeTicketMutation = `#graphql
    mutation CreateTicketMutation($description: String, $foodPreference: String!) {
  makeTicket(description: $description, foodPreference: $foodPreference)
}

`;
