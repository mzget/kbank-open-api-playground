import React from "react";
import styled from "styled-components";
import Head from "next/head";

import CheckoutCard from "../src/components/CheckoutCard";

function Checkout(props: any) {
  React.useEffect(() => {
    console.log("CheckoutPage");

    document.onreadystatechange = () => {
      console.log("onreadystatechange");
    };
    document.addEventListener("DOMContentLoaded", event => {
      console.log("DOM fully loaded and parsed");
    });
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>Checkout</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StyledShop className="StyledShop">
        <CheckoutCard />
      </StyledShop>
    </React.Fragment>
  );
}
export default Checkout;

const StyledShop = styled.div`
  display: flex;
  justify-content: center;
`;
