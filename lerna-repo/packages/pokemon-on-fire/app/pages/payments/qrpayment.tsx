import React from "react";
import { withApollo } from "../../src/lib/apollo";
import Typography from "@material-ui/core/Typography";

import { RequestQR } from "../../src/components/QRPayment/RequestQR";
import { InquireQR } from "../../src/components/QRPayment/InquirePayment";
import { CancelQR } from "../../src/components/QRPayment/CancelQR";

function QRPayment() {
  return (
    <div>
      <Typography variant="h6" gutterBottom>
        QR Payment
      </Typography>
      <RequestQR />
      <Typography variant="h6" gutterBottom>
        QR Status
      </Typography>
      <InquireQR />
      <CancelQR />
      <style jsx>{`
        div {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </div>
  );
}

export default withApollo(QRPayment);
