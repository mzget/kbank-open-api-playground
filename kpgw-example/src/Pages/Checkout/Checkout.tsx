import React from "react";
import styled from "styled-components";

import CheckoutCard from "./CheckoutCard";
export default function Checkout() {
  React.useEffect(() => {}, []);

  return (
    <StyledShop>
      <CheckoutCard />
    </StyledShop>
  );
}
const StyledShop = styled.div`
  display: flex;
  justify-content: center;
`;
