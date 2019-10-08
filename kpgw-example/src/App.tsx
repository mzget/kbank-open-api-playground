import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import './App.css';
import Routes from './Routes'


function App() {
  return (
  <React.Fragment>
    <CssBaseline />
    <Container maxWidth="md">
      <Routes />
    </Container>
    </React.Fragment>
  );
}

export default App;
