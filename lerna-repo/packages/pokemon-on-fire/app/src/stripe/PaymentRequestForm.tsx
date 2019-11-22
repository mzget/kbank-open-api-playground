import React from "react";
import {
  injectStripe,
  PaymentRequestButtonElement
} from "react-stripe-elements";
import { InjectedProps } from "./types";

class PaymentRequestForm extends React.Component<
  InjectedProps,
  {
    canMakePayment: boolean;
    paymentRequest: any;
  }
> {
  constructor(props) {
    super(props);

    // For full documentation of the available paymentRequest options, see:
    // https://stripe.com/docs/stripe.js#the-payment-request-object
    const paymentRequest = props.stripe.paymentRequest({
      country: "US",
      currency: "usd",
      total: {
        label: "Total due",
        amount: 1
      }
    });

    paymentRequest.on("token", ({ complete, token, ...data }) => {
      console.log("Received Stripe token: ", token);
      console.log("Received customer information: ", data);
      complete("success");
    });

    paymentRequest
      .canMakePayment()
      .then(result => {
        this.setState({ canMakePayment: !!result }, () =>
          console.log(this.state)
        );
      })
      .catch(err => {
        console.warn("canMakePayment fail", err);
      });

    this.state = {
      canMakePayment: false,
      paymentRequest
    };
  }

  render() {
    return this.state.canMakePayment ? (
      <div>
        <PaymentRequestButtonElement
          paymentRequest={this.state.paymentRequest}
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
}
export default injectStripe(PaymentRequestForm) as React.ComponentClass<any>;
