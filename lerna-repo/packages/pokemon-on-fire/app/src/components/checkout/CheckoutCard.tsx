import React, { useEffect, useCallback } from "react";
import styled from "styled-components";
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
import Divider from "@material-ui/core/Divider";

import { PaymentReqAPIWithPSP } from "./PaymentReqAPIWithPSP";
import { PaymentReqDemo } from "./PaymentReqDemo";
import { QRPayment } from "./QRPayment";
import { PaymentGateway } from "./PaymentGateway";
import { useStore } from "../../store/storeContext";

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

type CheckoutCardProps = {};

export default function CheckoutCard(props: CheckoutCardProps) {
  const classes = useStyles(undefined);
  const { cartState } = useStore();
  let [{ pokemon }] = cartState;

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
      <Divider style={{ margin: "0px 8px" }} />
      <CardActions disableSpacing>
        <StyledCardActions>
          <Typography gutterBottom variant="subtitle2">
            KBank OPEN-API Demo
          </Typography>
          <PaymentGateway />
          <QRPayment classes={classes} />
          <Typography gutterBottom variant="subtitle2">
            Web Payments Standard Demo
          </Typography>
          <PaymentReqDemo classes={classes} />
          <PaymentReqAPIWithPSP />
        </StyledCardActions>
      </CardActions>
    </Card>
  );
}

const StyledCardActions = styled(CardActions)`
  && {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  div {
    display: flex;
    flex-direction: row;
    max-height: 50px;
    width: 100%;
    justify-content: space-between;
  }
`;
