import React from "react";
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";
import Button from "@material-ui/core/Button";

const INQUIRE_QR = gql`
  mutation InquireQR($data: QRInput) {
    inquireQR(data: $data) {
      partnerTxnUid
      partnerId
      partnerSecret
      requestDt
      merchantId
      qrType
      origPartnerTxnUid
      statusCode
      errorCode
      errorDesc
      txnStatus
      txnNo
      loyaltyId
    }
  }
`;

export function InquireQR() {
  const [inquireQR, inquireStatus] = useMutation(INQUIRE_QR);
  const inquireQRHandler = React.useCallback(() => {
    inquireQR({
      variables: {
        data: {
          partnerId: "PTR3318260",
          partnerSecret: "2ca493cfb15f4bdeb7d6379424601ac6",
          partnerTxnUid: new Date().getTime().toString(),
          requestDt: new Date().toISOString(),
          merchantId: "KB377712394091",
          qrType: "3",
          origPartnerTxnUid: ""
        }
      }
    });
  }, []);

  let { loading, error, data } = inquireStatus;
  if (error) return <p>Error :(</p>;

  console.log("data", data);

  return (
    <div>
      <Button variant="contained" color="secondary" onClick={inquireQRHandler}>
        Inquire Status
      </Button>
      {loading ? <p>Loading...</p> : null}
      {error ? <p>Error :(</p> : null}
      {data && data.inquireQR && (
        <p>{JSON.stringify(data.inquireQR, undefined, 2)}</p>
      )}
    </div>
  );
}
