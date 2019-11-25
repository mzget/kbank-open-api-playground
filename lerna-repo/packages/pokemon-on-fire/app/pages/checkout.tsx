import React from "react";
import styled from "styled-components";
import Head from "next/head";
import { StripeProvider, Elements } from "react-stripe-elements";
import ListSubheader from "@material-ui/core/ListSubheader";

import { CheckoutRenderer } from "../src/components/CheckoutRenderer";

function Checkout(props: any) {
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
