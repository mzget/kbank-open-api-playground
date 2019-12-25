import React from "react";
import styled from "styled-components";

import ReceiptCard from "../../src/components/checkout/ReceiptCard";

export function PaymentFinished() {
  return (
    <React.Fragment>
      <StyledProcessing>
        <img src="/pokeball.png" />
        <strong>Payment Finished</strong>
        <strong>Request Form</strong>
        {Object.entries(form).map(keyPair => (
          <p key={keyPair[0]}>
            {keyPair[0]} : {keyPair[1]}
          </p>
        ))}
        <strong>Response Data</strong>
        <span>{JSON.stringify(result, undefined, 2)}</span>
      </StyledProcessing>
      <ReceiptCard />
    </React.Fragment>
  );
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
