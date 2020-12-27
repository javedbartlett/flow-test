import { books } from "../mockData/books.js";

export const bookResolver = {
  Query: {
    books: () => books,
  },
};
