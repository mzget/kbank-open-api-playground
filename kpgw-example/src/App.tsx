import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

import lightGreen from "@material-ui/core/colors/lightGreen";

import "./App.css";
import logo from "./assets/logo_kbtg.png";
import Routes from "./Routes";
import Theming from "./Theme";
import StoreProvider from "store/storeContext";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div
          style={{
            width: "100%",
            display: "flex",
            alignSelf: "center",
            margin: 8,
          }}
        >
          <p>KBank Payment Gateway Implementation</p>
          <span style={{ flex: 1 }} />
          <p>React Pokemon Shop</p>
        </div>
      </header>
      <Container
        id="App-Container"
        maxWidth="xl"
        style={{ backgroundColor: lightGreen[100] }}
      >
        <StoreProvider>
          <Theming>
            <Routes />
          </Theming>
        </StoreProvider>
      </Container>
    </React.Fragment>
  );
}

export default App;
