import React from "react";
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";
import Button from "@material-ui/core/Button";

import { OPEN_API } from "../../const";
import { useStore } from "../../store/storeContext";

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
  const [store] = useStore();
  const { partnerTxnUid } = store;
  const [inquireQR, inquireStatus] = useMutation(INQUIRE_QR);
  const inquireQRHandler = React.useCallback(() => {
    inquireQR({
      variables: {
        data: {
          partnerId: OPEN_API.PARTNER_ID,
          partnerSecret: OPEN_API.PARTNER_SECRET,
          merchantId: OPEN_API.MERCHANT_ID,
          partnerTxnUid: partnerTxnUid,
          requestDt: new Date().toISOString(),
          qrType: "3",
          origPartnerTxnUid: partnerTxnUid
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
