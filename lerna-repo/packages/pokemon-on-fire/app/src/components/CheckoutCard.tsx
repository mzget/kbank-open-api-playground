import React, { useEffect } from "react";
import styled from "styled-components";
import { fetch } from "cross-fetch";

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

import { useStore } from "../store/storeContext";
import KPayment from "react-kpayment";

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
    button: {
      maxWidth: 180,
    },
  })
);

type RecipeCardProps = {
  onProcess(): void;
  onFinish?(): void;
};

export default function RecipeReviewCard(props: RecipeCardProps) {
  const classes = useStyles(undefined);
  const [state] = useStore();
  let { pokemon } = state;
  let { onProcess, onFinish } = props;

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
              formAction="/api/checkout"
              onFinish={onFinish}
              onProcess={onProcess}
              debug={true}
              attrs={{
                scriptUrl:
                  "https://uat-kpaymentgateway.new-kpgw.com/ui/v2/kpayment.min.js",
                apiKey: "pkey_prod_5BpmBr5LpqG84jYnDLPQe3Zv1OuhdN5dg",
                amount: pokemon.price,
                currency: "TBH",
                paymentMethods: "card",
                shopName: "The Pokemon Shop",
              }}
            />
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
