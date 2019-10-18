import React, { useCallback } from "react";
import Router, { useRouter } from "next/router";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import { useStore } from "../store/storeContext";
import { buyPokemon } from "../store/cartReducer";

const useStyles = makeStyles({
  card: {
    width: "100%"
  },
  media: {
    height: 300,
    backgroundSize: "contain"
  }
});

type MediaCardProps = {
  pokemon: {
    id: string;
    key: string;
    src: string;
    name: string;
    description: string;
    price: string;
  };
};
export default function MediaCard(props: MediaCardProps) {
  const classes = useStyles(undefined);
  const { pokemon } = props;

  const router = useRouter();
  const [_, dispatch] = useStore();

  const onClickHandler = useCallback(
    (e: React.MouseEvent) => {
      dispatch(buyPokemon(pokemon));

      router.push("/checkout");
    },
    [dispatch, pokemon]
  );

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={`/pokemons/${pokemon.src}`}
          title={pokemon.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {pokemon.name}
          </Typography>
          <Typography gutterBottom variant="subtitle1">
            {`Price: ${pokemon.price} THB`}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {pokemon.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          variant="contained"
          onClick={onClickHandler}
        >
          ใส่ตระกร้า
        </Button>
      </CardActions>
    </Card>
  );
}
