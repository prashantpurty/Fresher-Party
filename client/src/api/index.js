import { GraphQLClient } from "graphql-request";

export const graphqlClient = new GraphQLClient(
  "https://fresher-party.onrender.com/graphql",
  {
    headers: () => {
      const token = localStorage.getItem("token");
      return {
        authorization: token ? `Bearer ${token}` : "",
      };
    },
  }
);
