import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

import green from "@material-ui/core/colors/green";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: green[500],
      light: green[100],
      dark: green[700],
    },
  },
});

export default function Theming(props: any) {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
}
