import React from "react";
import { withApollo } from "../../src/lib/apollo";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

import { RequestQR } from "../../src/components/QRPayment/RequestQR";
import { InquireQR } from "../../src/components/QRPayment/InquirePayment";
import { CancelQR } from "../../src/components/QRPayment/CancelQR";
import { VoidQR } from "../../src/components/QRPayment/VoidQR";

function QRPayment() {
  return (
    <div>
      <Paper
        style={{
          minWidth: 480,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center"
        }}
      >
        <Typography
          variant="subtitle1"
          gutterBottom
          style={{ display: "flex", justifyContent: "center", padding: 4 }}
        >
          To run QR Payment demo, You need to run graphql server on your
          localhost
        </Typography>
        <Typography
          variant="h6"
          gutterBottom
          style={{ display: "flex", justifyContent: "center" }}
        >
          QR Payment
        </Typography>
        <RequestQR />
        <InquireQR />
        <CancelQR />
        <VoidQR />
      </Paper>
      <style jsx>{`
        div {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        span {
          justify-content: center;
          padding: 8px;
          min-width: 480px;
          max-width: 600px;
        }
      `}</style>
    </div>
  );
}

export default withApollo(QRPayment);
