import React from "react";
import StripeCheckout from "../../stripe/StripeCheckout";
export function PaymentReqAPIWithPSP() {
  return (
    <div>
      <p>Payment Request API With PSP</p>
      <StripeCheckout />
    </div>
  );
}
