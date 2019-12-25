import React from "react";
import styled from "styled-components";

import ReceiptCard from "../../src/components/checkout/ReceiptCard";
import { useStore } from "../../src/store/storeContext";

export default function PaymentFinished() {
  const { appState } = useStore();
  const [{ paymentForm, paymentResult }, dispatch] = appState;

  console.log(paymentForm, paymentResult);

  return (
    <div>
      <StyledProcessing>
        <img src="/pokeball.png" />
        <strong>Payment Finished</strong>
        <strong>Request Form</strong>
        <textarea
          name="paymentForm"
          rows={5}
          readOnly
          value={JSON.stringify(paymentForm, undefined, 2)}
        ></textarea>

        <strong>Response Data</strong>
        <textarea
          name="paymentResult"
          rows={10}
          readOnly
          value={JSON.stringify(paymentResult, undefined, 2)}
        ></textarea>
      </StyledProcessing>
      <ReceiptCard />
      <style jsx>{`
        div {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      `}</style>
    </div>
  );
}

const StyledProcessing = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
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
