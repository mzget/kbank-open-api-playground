import React from "react";
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";
import QRCode from "qrcode.react";
import { withApollo } from "../../src/lib/apollo";

import { InquireQR } from "../../src/components/QRPayment/InquirePayment";

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
  const [inquireQR, inquireStatus] = useMutation(REQUEST_QR);
  React.useEffect(() => {
    requestQR({
      variables: {
        data: {
          partnerId: "PTR3318260",
          partnerSecret: "2ca493cfb15f4bdeb7d6379424601ac6",
          partnerTxnUid: new Date().getTime().toString(),
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

  if (loading || !data) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const { requestQR: result } = data;
  console.log(result);
  return (
    <div>
      <p>QR Payment</p>
      <QRCode value={result.qrCode} size={256} />
      <p>QR Status</p>
      <InquireQR />
    </div>
  );
}

export default withApollo(QRPayment);
