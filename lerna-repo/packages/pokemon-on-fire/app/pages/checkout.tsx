import React from "react";
import styled from "styled-components";
import Head from "next/head";
import ListSubheader from "@material-ui/core/ListSubheader";

import CheckoutCard from "../src/components/CheckoutCard";
import ReceiptCard from "../src/components/ReceiptCard";

enum CheckoutState {
  none = 0,
  processing = 1,
  finished = 2
}

function CheckoutRenderer(props: any) {
  let [checkoutState, setCheckoutState] = React.useState(CheckoutState.none);
  let [form, setForm] = React.useState({});
  let [result, setResult] = React.useState({});
  const onProcessHandler = React.useCallback((formData: FormData) => {
    let data = {};
    for (let [key, value] of formData.entries()) {
      data[key] = value;
    }
    setForm(data);
    setCheckoutState(CheckoutState.processing);
  }, []);
  const onFinishHandler = React.useCallback((result: any) => {
    setResult(result);
    setCheckoutState(CheckoutState.finished);
  }, []);

  if (checkoutState === CheckoutState.finished) {
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
        <CheckoutCard onProcess={onProcessHandler} onFinish={onFinishHandler} />
      </React.Fragment>
    );
  }
}

function Checkout(props: any) {
  React.useEffect(() => {
    console.log("Checkout Page");
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>Checkout</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StyledShop className="StyledShop">
        <ListSubheader component="div">Checkout</ListSubheader>
        <CheckoutRenderer />
      </StyledShop>
    </React.Fragment>
  );
}
export default Checkout;

const StyledShop = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
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
