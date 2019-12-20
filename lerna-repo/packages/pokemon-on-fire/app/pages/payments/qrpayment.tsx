import React from "react";
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";
import { withApollo } from "../../src/lib/apollo";

const REQUEST_QR = gql`
  mutation RequestQR($data: RequestQRInput) {
    requestQR(data: $data) {
      partnerTxnUid
      partnerId
      statusCode
      errorCode
      errorDesc
      accountName
      qrCode
    }
  }
`;

function QRPayment() {
  const [requestQR, { data, loading, error }] = useMutation(REQUEST_QR);
  React.useEffect(() => {
    requestQR({
      variables: {
        data: {
          partnerId: "PTR3318260",
          partnerSecret: "2ca493cfb15f4bdeb7d6379424601ac6",
          partnerTxnUid: "TEST0003",
          requestDt: new Date().toISOString(),
          merchantId: "KB377712394091",
          qrType: "3",
          txnAmount: "100.00",
          txnCurrencyCode: "THB",
          reference1: "INV001"
        }
      }
    });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <p>QR Payment</p>
    </div>
  );
}

export default withApollo(QRPayment);
