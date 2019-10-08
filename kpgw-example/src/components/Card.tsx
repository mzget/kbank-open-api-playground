import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
      height: 180,
  },
});

type MediaCardProps = {
    pokemon : {
   id: string;
   key: string;
   src: string;
   name: string;
   description: string;
   price: string;
    } 
}
export default function MediaCard(props: MediaCardProps) {
  const classes = useStyles();
  const {pokemon}= props

  useEffect(()=> {
    const script = document.createElement("script");

    script.src = "https://dev-kpaymentgateway.kasikornbank.com/ui/v2/kpayment.min.js";
    script.setAttribute('data-apikey', "pkey_test_75677dushd74774gdgdgd77d7dhsgfhfghfhgdh");
    script.setAttribute('data-amount', pokemon.price)
    script.setAttribute('data-currency',"THB")
    script.setAttribute('data-payment-methods',"card")
    script.setAttribute('data-name', "React Poke Shop")
    script.type='text/javascript'
    script.async = true;

    let action = document.getElementById(`item-${pokemon.key}`)
    if(action) {
    action.appendChild(script);
    }
  },[pokemon])


  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={require(`../assets/pokemons/${pokemon.src}`)}
          title={pokemon.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {pokemon.name}
          </Typography>
          <Typography gutterBottom variant="subtitle2">
            {`Price: ${pokemon.price} THB`}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {pokemon.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <div  style={{width: '100%', height: 50}}> 
        <form id={`item-${pokemon.key}`} method="POST" action="/checkout">
        </form>
        </div>
      </CardActions>
    </Card>
  );
}

{/* <Button size="small" color="primary">
Pay
</Button>   */}