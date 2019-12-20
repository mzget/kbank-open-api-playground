import QRAPI from "../datasources/QRAPI";

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
export const resolvers = {
  Query: {
    books: () => books
  },
  Mutation: {
    requestQR: async (_, data, { dataSources }) => {
      const qrData = await dataSources.qrAPI.requestQR(data);
      return qrData;
    }
  }
};

const books = [
  {
    title: "Harry Potter and the Chamber of Secrets",
    author: "J.K. Rowling"
  },
  {
    title: "Jurassic Park",
    author: "Michael Crichton"
  }
];
