import React from "react";
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";
import QRCode from "qrcode.react";

import { OPEN_API } from "../../const";
import { useStore } from "../../store/storeContext";
import { addPartnerTrx } from "../../store/cartReducer";

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

export function RequestQR() {
  const [store, dispatch] = useStore();
  const { pokemon, partnerTxnUid } = store;

  const onCompleatedHandler = React.useCallback((data: any) => {
    console.log("completed", data.requestQR.partnerTxnUid);

    dispatch(addPartnerTrx(data.requestQR.partnerTxnUid));
  }, []);

  const [requestQR, { data, loading, error }] = useMutation(REQUEST_QR, {
    onCompleted: onCompleatedHandler
  });
  React.useEffect(() => {
    const transactionID = new Date().getTime().toString();
    const payload = {
      partnerId: OPEN_API.PARTNER_ID,
      partnerSecret: OPEN_API.PARTNER_SECRET,
      merchantId: OPEN_API.MERCHANT_ID,
      partnerTxnUid: transactionID,
      requestDt: new Date().toISOString(),
      qrType: "3",
      txnAmount: pokemon.price,
      txnCurrencyCode: "THB",
      reference1: pokemon.name
    };
    requestQR({
      variables: {
        data: payload
      }
    });
  }, []);

  if (loading || !data) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const { requestQR: result } = data;

  return (
    <div>
      <QRCode value={result.qrCode} size={256} />
      <style jsx>{`
        div {
          margin: 4px;
        }
      `}</style>
    </div>
  );
}
