import React from "react";
import { Elements, StripeProvider } from "react-stripe-elements";

import { STRIPE_KEY } from "../const";
import PaymentRequestForm from "./PaymentRequestForm";

class StripeCheckout extends React.Component<any, { stripe: string | null }> {
  constructor(props) {
    super(props);

    this.state = { stripe: null };
  }
  componentDidMount() {
    // Create Stripe instance in componentDidMount
    // (componentDidMount only fires in browser/DOM environment)
    const stripe = document.querySelector("#stripe-js");
    if (stripe) {
      stripe.addEventListener("load", () => {
        // Create Stripe instance once Stripe.js loads
      });
    }
    this.setState({
      stripe: STRIPE_KEY
    });
  }
  render() {
    if (!this.state.stripe) {
      return null;
    }
    return (
      <StripeProvider apiKey={this.state.stripe}>
        <Elements>
          <PaymentRequestForm />
        </Elements>
      </StripeProvider>
    );
  }
}

export default StripeCheckout;
