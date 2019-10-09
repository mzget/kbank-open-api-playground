import React from "react";
import App from "next/app";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import lightGreen from "@material-ui/core/colors/lightGreen";

import theme from "../src/theme";
import StoreProvider from "../src/store/storeContext";

export default class MyApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentNode!.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <React.Fragment>
        <Head>
          <title>Pokemon-Shop</title>
        </Head>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <header className="App-header">
            <img src={"/logo_kbtg.png"} className="App-logo" alt="logo" />
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
              <Component {...pageProps} />
            </StoreProvider>
          </Container>
          <style jsx>{`
            .App-header {
              background-color: #282c34;
              display: flex;
              flex-direction: row;
              align-items: flex-start;
              justify-content: start;
              color: white;
            }
            p {
              line-height: 0%;
              font-size: 16px;
            }
          `}</style>
        </ThemeProvider>
      </React.Fragment>
    );
  }
}
