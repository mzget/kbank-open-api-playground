import React from "react";
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";
import Button from "@material-ui/core/Button";

import { OPEN_API } from "../../const";
import { useStore } from "../../store/storeContext";

const CANCEL_QR = gql`
  mutation cancelQR($data: QRInput) {
    cancelQR(data: $data) {
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

export function CancelQR() {
  const [store] = useStore();
  const { partnerTxnUid } = store;
  const [cancelQR, cancelQRStatus] = useMutation(CANCEL_QR);
  const onClickHandler = React.useCallback(() => {
    cancelQR({
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
  }, [partnerTxnUid]);

  let { loading, error, data } = cancelQRStatus;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <Button variant="contained" color="secondary" onClick={onClickHandler}>
        Cancel QR
      </Button>
      {loading ? <p>Loading...</p> : null}
      {error ? <p>Error :(</p> : null}
      {data && data.cancelQR && (
        <textarea
          defaultValue={JSON.stringify(data.cancelQR, undefined, 2)}
        ></textarea>
      )}
      <style jsx>{`
        div {
          width: 100%;
          margin: 4px;
        }
        textarea {
          width: 100%;
          height: 150px;
        }
      `}</style>
    </div>
  );
}
