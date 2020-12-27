import { ApolloServer } from "apollo-server";
import express from "express";
import { bookDef } from "./entities/Book.js";
import { bookResolver } from "./resolvers/book.js";


const main = async () => {
  const app = express();

  const server = new ApolloServer({
    resolvers: bookResolver,
    typeDefs: [bookDef],
  });

  server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });
};

main().catch((err) => {
  console.error(err);
});
