import { gql } from "apollo-server-express";

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
export const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Book {
    title: String
    author: String
  }
  type RequestQR {
    partnerTxnUid: String
    partnerId: String
    statusCode: String
    errorCode: String
    errorDesc: String
    accountName: String
    qrCode: String
  }
  type QRStatus {
    partnerTxnUid: String
    partnerId: String
    partnerSecret: String
    requestDt: String
    merchantId: String
    terminalId: String
    qrType: String
    origPartnerTxnUid: String
    statusCode: String
    errorCode: String
    errorDesc: String
    txnStatus: String
    txnNo: String
    loyaltyId: String
  }

  type Mutation {
    requestQR(data: RequestQRInput): RequestQR
    cancelQR(data: QRInput): QRStatus
    inquireQR(data: QRInput): QRStatus
    voidQR(data: QRInput): QRStatus
  }
  input RequestQRInput {
    partnerTxnUid: String!
    partnerId: String!
    partnerSecret: String!
    requestDt: String!
    merchantId: String!
    qrType: String!
    txnAmount: String!
    txnCurrencyCode: String!
    reference1: String!
    reference2: String
    reference3: String
    reference4: String
    metadata: String
    terminalId: String
  }
  input QRInput {
    partnerTxnUid: String!
    partnerId: String!
    partnerSecret: String!
    requestDt: String!
    merchantId: String!
    qrType: String!
    origPartnerTxnUid: String!
    terminalId: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    books: [Book]
  }
`;
