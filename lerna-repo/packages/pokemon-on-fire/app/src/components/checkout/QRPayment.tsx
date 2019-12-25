import React from "react";
import Button from "@material-ui/core/Button";
import Link from "next/link";
export function QRPayment({ classes }) {
  return (
    <div>
      <p>QR Payment</p>
      <Link href="/payments/qrpayment">
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
        >
          Scan QR
        </Button>
      </Link>
    </div>
  );
}
