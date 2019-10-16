import React from "react";
import styled from "styled-components";
import Head from "next/head";

import CheckoutCard from "../src/components/CheckoutCard";
import ReceiptCard from "../src/components/ReceiptCard";

enum CheckoutState {
  none = 0,
  processing = 1,
  finished = 2,
}

function CheckoutRender(props: any) {
  let [checkoutState, setCheckoutState] = React.useState(CheckoutState.none);
  let [form , setForm] =React.useState({})
  const onProcessHandler = React.useCallback((formData:FormData) => {
    let data = {}
    for(let [key, value] of formData.entries()) {
      data[key] = value
   }
   setForm(data);
    setCheckoutState(CheckoutState.processing);
  }, []);
  const onFinishHandler = React.useCallback(() => {
    setCheckoutState(CheckoutState.finished);
  }, []);

  switch (checkoutState) {
    case CheckoutState.none:
      return (
        <CheckoutCard onProcess={onProcessHandler} onFinish={onFinishHandler} />
      );
    case CheckoutState.processing:
      return (
        <StyledProcessing>
          <img src="/pokeball.png" />
          <p>Payment Processing..., Plase wait</p>
          {
            Object.entries(form).map((keyPair)=> (
              <p key={keyPair[0]}>{keyPair[0]} : {keyPair[1]}</p>
            ))
          }
        </StyledProcessing>
      );
    case CheckoutState.finished:
      return <ReceiptCard />;
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
        <CheckoutRender />
      </StyledShop>
    </React.Fragment>
  );
}
export default Checkout;

const StyledShop = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
`;
const StyledProcessing = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;
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
