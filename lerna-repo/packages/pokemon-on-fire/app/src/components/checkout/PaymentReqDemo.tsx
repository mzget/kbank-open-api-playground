import React from "react";
import Button from "@material-ui/core/Button";

import { useStore } from "../../store/storeContext";
import { WebPayment } from "../../webPayment/webPayment";
export function PaymentReqDemo({ classes }) {
  const [state] = useStore();
  let { pokemon } = state;

  const showPaymentReqAPI = React.useCallback(() => {
    if (window.PaymentRequest) {
      const request = WebPayment(pokemon);
      request
        .show()
        .then(response => {
          // [process payment]
          // send to a PSP etc.
          console.log(response.toJSON());

          response.complete("success");
        })
        .catch(err => {
          console.warn(err);
        });
    } else {
      console.warn("PaymentRequest API not available.");
    }
  }, [pokemon]);

  return (
    <div>
      <p>Payment Request API</p>
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        onClick={showPaymentReqAPI}
      >
        Pay
      </Button>
    </div>
  );
}
