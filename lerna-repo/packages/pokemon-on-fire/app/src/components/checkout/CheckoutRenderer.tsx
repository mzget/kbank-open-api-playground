import React from "react";
import styled from "styled-components";

import CheckoutCard from "./CheckoutCard";

enum CheckoutState {
  none = 0,
  processing = 1,
  finished = 2
}
export function CheckoutRenderer(props: any) {
  let [checkoutState, setCheckoutState] = React.useState(CheckoutState.none);
  let [form, setForm] = React.useState({});
  let [result, setResult] = React.useState({});

  if (checkoutState === CheckoutState.finished) {
    return null;
  } else {
    return (
      <React.Fragment>
        {checkoutState === CheckoutState.processing && (
          <StyledProcessing>
            <img src="/pokeball.png" />
            <strong>Payment Processing..., Plase wait</strong>
            <strong>Request Form</strong>
            {Object.entries(form).map(keyPair => (
              <p key={keyPair[0]}>
                {keyPair[0]} : {keyPair[1]}
              </p>
            ))}
          </StyledProcessing>
        )}
        <CheckoutCard />
      </React.Fragment>
    );
  }
}

const StyledProcessing = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  width: 50%;
  padding: 16px;
  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  img {
    width: 48px;
    align-self: center;
    animation: App-logo-spin infinite 10s linear;
  }
`;
