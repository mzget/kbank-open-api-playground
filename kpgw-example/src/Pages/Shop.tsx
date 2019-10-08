import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import MediaCard from 'components/Card'

import {Pokedex} from 'mock/pokedex'
import logo from '../logo.svg';

function Shop() {
  return (
<React.Fragment>
    <CssBaseline />
    <Container maxWidth="md">
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <p>React Poke Shop</p>
      </header>
    {Pokedex.map(v => 
        <MediaCard key={v.key} pokemon={v}/>
      )}
    </div>
      </Container>
    </React.Fragment>
  );
}

export default Shop;
