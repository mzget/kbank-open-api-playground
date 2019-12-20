import QRAPI from "../datasources/QRAPI";

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
export const resolvers = {
  Query: {
    books: () => []
  },
  Mutation: {
    requestQR: async (_, { data }, { dataSources }) => {
      const qrData = await dataSources.qrAPI.requestQR(data);
      console.log("res", qrData);
      return qrData;
    },
    cancelQR: async (_, { data }, { dataSources }) => {
      const qrData = await dataSources.qrAPI.cancelQR(data);
      return qrData;
    },
    inquiryQR: async (_, { data }, { dataSources }) => {
      const qrData = await dataSources.qrAPI.inquiryQR(data);
      return qrData;
    },
    voidQR: async (_, { data }, { dataSources }) => {
      const qrData = await dataSources.qrAPI.voidQR(data);
      return qrData;
    }
  }
};
