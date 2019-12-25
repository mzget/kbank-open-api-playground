import React from "react";
import App from "next/app";
import Head from "next/head";
import Link from "next/link";
import GithubBadge from "@sinchang/react-github-badge";
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
          <title>The Pokemon-Shop</title>
          <script id="stripe-js" src="https://js.stripe.com/v3/"></script>
        </Head>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <header className="App-header">
            <Link href="/">
              <img src={"/logo_kbtg.png"} className="App-logo" alt="logo" />
            </Link>
            <div>
              <p>KBank Payment API</p>
              <p>Referrence Implementation</p>
            </div>
            <GithubBadge
              url="https://github.com/mzget/kbank-open-api-playground"
              slug="mzget/kbank-open-api-playground"
              fill="white"
            />
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
          <footer className="App-footer">
            <p>The Pokemon Shop</p>
            <p>No commercial purpose</p>
          </footer>
          <style jsx>{`
            .App-header {
              background-color: #282c34;
              display: flex;
              flex-direction: row;
              align-items: flex-start;
              justify-content: start;
              color: white;
            }
            .App-header div {
              display: flex;
              flex-direction: column;
              margin-left: 8px;
            }
            p {
              line-height: 0%;
              font-size: 16px;
            }
            img {
              height: 48px;
              cursor: pointer;
              margin: 8px;
            }
            .App-footer {
              background-color: #282c34;
              display: flex;
              flex-direction: column;
              justify-content: center;
              color: white;
              align-items: center;
            }
          `}</style>
        </ThemeProvider>
      </React.Fragment>
    );
  }
}
