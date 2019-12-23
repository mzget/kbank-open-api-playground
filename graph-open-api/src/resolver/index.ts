import { IDataSource } from "../datasources";

type DataSource = {
  dataSources: IDataSource;
};
// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
export const resolvers = {
  Query: {
    books: () => []
  },
  Mutation: {
    requestQR: async (_, { data }, { dataSources }: DataSource) => {
      const result = await dataSources.qrAPI.requestQR(data);
      console.log("requestQR", result);
      return result;
    },
    cancelQR: async (_, { data }, { dataSources }: DataSource) => {
      const result = await dataSources.qrAPI.cancelQR(data);
      console.log("cancelQR", result);
      return result;
    },
    inquireQR: async (_, { data }, { dataSources }: DataSource) => {
      const result = await dataSources.qrAPI.inquireQR(data);
      console.log("inquireQR", result);
      return result;
    },
    voidQR: async (_, { data }, { dataSources }: DataSource) => {
      const result = await dataSources.qrAPI.voidQR(data);
      console.log("voidQR", result);
      return result;
    }
  }
};
