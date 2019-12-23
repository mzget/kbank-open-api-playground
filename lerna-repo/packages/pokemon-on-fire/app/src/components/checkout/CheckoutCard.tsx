import React, { useEffect, useCallback } from "react";
import styled from "styled-components";
import { fetch } from "cross-fetch";
import Link from "next/link";

import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import green from "@material-ui/core/colors/green";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import Button from "@material-ui/core/Button";

import { useStore } from "../../store/storeContext";
import KPayment from "react-kpayment";
import { WebPayment } from "../../webPayment/webPayment";
import StripeCheckout from "../../stripe/StripeCheckout";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      width: "100%",
      maxWidth: 340
    },
    media: {
      height: 0,
      paddingTop: "56.25%", // 16:9
      backgroundSize: "contain"
    },
    button: {
      maxWidth: 180,
      height: 40
    }
  })
);

type CheckoutCardProps = {
  onProcess?: (formData: FormData) => void;
  onFinish?: (result: any) => void;
};

export default function CheckoutCard(props: CheckoutCardProps) {
  const classes = useStyles(undefined);
  const [state] = useStore();
  let { pokemon } = state;
  let { onProcess, onFinish } = props;

  const showPaymentReqAPI = useCallback(() => {
    if (window.PaymentRequest) {
      const request = WebPayment(pokemon);
      request
        .show()
        .then(response => {
          // [process payment]
          // send to a PSP etc.
          console.log(response.toJSON());

          response.complete("success");
        })
        .catch(err => {
          console.warn(err);
        });
    } else {
      console.warn("PaymentRequest API not available.");
    }
  }, [pokemon]);

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={<ShoppingCart height={64} />}
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="The pokemon shop"
        subheader={new Date().toDateString()}
      />
      <CardMedia
        className={classes.media}
        image={`/pokemons/${pokemon.src}`}
        title={pokemon.name}
      />
      <CardContent>
        <Typography gutterBottom variant="subtitle1">
          {`Price: ${pokemon.price} THB`}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <StyledCardActions>
          <PayActionDiv>
            <p>Credit/Debit Card</p>
            <KPayment
              formAction="https://us-central1-kbank-open-api.cloudfunctions.net/api/checkout"
              onProcess={onProcess}
              onFinish={onFinish}
              onError={() => {}}
              debug={true}
              attrs={{
                scriptUrl:
                  "https://uat-kpaymentgateway.new-kpgw.com/ui/v2/kpayment.min.js",
                apiKey: "pkey_prod_5BpmBr5LpqG84jYnDLPQe3Zv1OuhdN5dg",
                amount: pokemon.price,
                currency: "THB",
                paymentMethods: "card",
                shopName: "The Pokemon Shop"
              }}
            />
          </PayActionDiv>
          <PayActionDiv>
            <p>QR Payment</p>
            <Link href="/payments/qrpayment">
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
              >
                Scan QR
              </Button>
            </Link>
          </PayActionDiv>
          <p>WebPayments Demo</p>
          <PayActionDiv>
            <p>Payment Request API</p>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              onClick={showPaymentReqAPI}
            >
              Pay
            </Button>
          </PayActionDiv>
          <PayActionDiv>
            <p>Payment Request API With PSP</p>
            <StripeCheckout />
          </PayActionDiv>
        </StyledCardActions>
      </CardActions>
    </Card>
  );
}

const PayActionDiv = styled.div`
  display: flex;
  flex-direction: row;
  max-height: 50px;
  width: 100%;
  justify-content: space-between;
  margin: 4px;
  /* background-color: ${green[100]}; */
`;

const StyledCardActions = styled(CardActions)`
  && {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;
