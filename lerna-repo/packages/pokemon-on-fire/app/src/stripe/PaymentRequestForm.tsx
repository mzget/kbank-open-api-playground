import React, { useState, useEffect, useCallback } from "react";
import {
  injectStripe,
  PaymentRequestButtonElement
} from "react-stripe-elements";
import { InjectedProps } from "./types";

import { useStore } from "../store/storeContext";

function PaymentRequestForm(props: InjectedProps) {
  const { cartState } = useStore();
  let [{ pokemon }] = cartState;

  const [canMakePayment, setCanMakePayment] = useState(false);
  const [paymentObj, setPaymentObj] = useState(undefined);

  useEffect(() => {
    initPaymentRequest();
  }, []);

  const initPaymentRequest = useCallback(() => {
    // For full documentation of the available paymentRequest options, see:
    // https://stripe.com/docs/stripe.js#the-payment-request-object
    const req = {
      country: "US",
      currency: "thb",
      total: {
        label: "Total due",
        amount: parseInt(pokemon.price, 10) * 100
      },
      requestShipping: true,
      // `shippingOptions` is optional at this point:
      shippingOptions: [
        // The first shipping option in this list appears as the default
        // option in the browser payment interface.
        {
          id: "free-shipping",
          label: "Free shipping",
          detail: "Arrives in 5 to 7 days",
          amount: 0
        }
      ]
    };

    const paymentRequest = props.stripe.paymentRequest(req);
    paymentRequest.on("token", ({ complete, token, ...data }) => {
      console.log("Received Stripe token: ", token);
      console.log("Received customer information: ", data);
      // Send the token to your server to charge it!
      fetch("/api/stripe_charges", {
        method: "POST",
        body: JSON.stringify({
          token: token.id,
          amount: req.total.amount,
          currency: req.currency
        }),
        headers: { "content-type": "application/json" }
      }).then(function(response) {
        if (response.ok) {
          // Report to the browser that the payment was successful, prompting
          // it to close the browser payment interface.

          complete("success");
        } else {
          // Report to the browser that the payment failed, prompting it to
          // re-show the payment interface, or show an error message and close
          // the payment interface.

          complete("fail");
        }
      });
    });

    paymentRequest
      .canMakePayment()
      .then(result => {
        setCanMakePayment(!!result);
      })
      .catch(err => {
        console.warn("canMakePayment fail", err);
      });

    setPaymentObj(paymentRequest);
  }, [props, pokemon]);

  return canMakePayment ? (
    <div>
      <PaymentRequestButtonElement
        paymentRequest={paymentObj}
        className="PaymentRequestButton"
        style={{
          // For more details on how to style the Payment Request Button, see:
          // https://stripe.com/docs/elements/payment-request-button#styling-the-element
          paymentRequestButton: {
            theme: "light-outline",
            height: "44px"
          }
        }}
      />
      <style jsx>{`
        div {
          width: 50%;
        }
      `}</style>
    </div>
  ) : null;
}

export default injectStripe(PaymentRequestForm);
