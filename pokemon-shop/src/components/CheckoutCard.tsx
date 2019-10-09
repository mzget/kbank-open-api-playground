import React, { useEffect } from "react";
import styled from "styled-components";

import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import green from "@material-ui/core/colors/green";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import Button from "@material-ui/core/Button";

import { useStore } from "../store/storeContext";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      width: 350,
      maxWidth: 440,
    },
    media: {
      height: 0,
      paddingTop: "56.25%", // 16:9
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
      }),
    },
    button: {
      maxWidth: 180,
    },
    avatar: {
      backgroundColor: red[500],
    },
  })
);
export default function RecipeReviewCard() {
  const classes = useStyles(undefined);
  const [state] = useStore();
  let { pokemon } = state;

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://uat-kpaymentgateway.new-kpgw.com/ui/v2/kpayment.min.js";
    script.setAttribute(
      "data-apikey",
      "pkey_prod_5BpmBr5LpqG84jYnDLPQe3Zv1OuhdN5dg"
    );
    script.setAttribute("data-amount", pokemon.price);
    script.setAttribute("data-currency", "THB");
    script.setAttribute("data-payment-methods", "card");
    script.setAttribute("data-name", "React Pokemon Shop");
    script.type = "text/javascript";
    script.async = true;
    script.onload = ev => {
      if (action) {
        console.log("payment-container create new");
        (window as any).KPayment.create();
      }
    };
    let action = document.getElementById(`checkout-form`);
    if (action) {
      action.appendChild(script);
    }

    return () => {
      if (action) {
        action.removeChild(script);
        let paymentContainer = document.querySelector(".payment-container");
        if (paymentContainer) {
          document.body.removeChild(paymentContainer);
        }
      }
    };
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
            <form
              id={`checkout-form`}
              method="POST"
              action="/api/checkout"
            ></form>
          </PayActionDiv>
          <PayActionDiv>
            <p>QR Payment</p>
            <Button
              variant="contained"
              color="secondary"
              disabled
              className={classes.button}
            >
              Not yet ready
            </Button>
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
