import React, { useEffect } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ShoppingCart from "@material-ui/icons/ShoppingCart";

import { useStore } from "../store/storeContext";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      maxWidth: 345,
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
    expandOpen: {
      transform: "rotate(180deg)",
    },
    avatar: {
      backgroundColor: red[500],
    },
  })
);
export default function RecipeReviewCard() {
  const classes = useStyles(undefined);
  const [expanded, setExpanded] = React.useState(false);
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
        let paymentContainer = document.getElementsByClassName(
          "payment-container"
        );
        if (paymentContainer) {
          document.body.removeChild(paymentContainer[0]);
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
        <div style={{ width: "100%", height: 50 }}>
          <form id={`checkout-form`} method="POST" action="/checkout"></form>
        </div>
      </CardActions>
    </Card>
  );
}
