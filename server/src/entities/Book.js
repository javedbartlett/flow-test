import { gql } from "apollo-server";

export const bookDef = gql`
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
`;
