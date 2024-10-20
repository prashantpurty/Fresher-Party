const userType = require("./graphql");

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");
const { JWTServices } = require("./service/jwt");

async function serverInit() {
  const app = express();
  app.use(bodyParser.json());
  app.use(cors());
  const graphqlServer = new ApolloServer({
    typeDefs: `
      ${userType.type}

      type Query {
        ${userType.queries}
      }

      type Mutation {
        ${userType.mutation}
      }
    `,
    resolvers: {
      Query: {
        ...userType.resolvers.queries,
      },
      Mutation: {
        ...userType.resolvers.mutation,
      },
    },
  });

  await graphqlServer.start();

  app.use(
    "/graphql",
    expressMiddleware(graphqlServer, {
      context: async ({ req, res }) => {
        return {
          user: req.headers.authorization
            ? JWTServices.VerifyJWT(req.headers.authorization.split(" ")[1])
            : null,
        };
      },
    })
  );
  return app;
}

module.exports = { serverInit };
