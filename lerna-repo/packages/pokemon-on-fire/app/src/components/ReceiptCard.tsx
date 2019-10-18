import React, { useEffect } from "react";
import { useRouter } from "next/router";

import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import Button from "@material-ui/core/Button";

import { useStore } from "../store/storeContext";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      width: 350,
      maxWidth: 440
    },
    media: {
      height: 0,
      paddingTop: "56.25%" // 16:9
    },
    button: {
      maxWidth: 180
    }
  })
);
export default function ReceiptCard(props: any) {
  const classes = useStyles(undefined);
  const [state] = useStore();
  const router = useRouter();
  let { pokemon } = state;

  const homeBtnHandler = React.useCallback(() => {
    router.replace("/");
  }, []);

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={<img src="/pokeball.png" width="48px" />}
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
          {`Yeah ! ${pokemon.name} is yours`}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          onClick={homeBtnHandler}
        >
          Home
        </Button>
      </CardActions>
    </Card>
  );
}
