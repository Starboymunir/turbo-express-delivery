import React from "react";
import "../styles/globals.css";
import Header from "../src/ui/header";
import { ThemeProvider } from "@material-ui/core";
import Theme from "../src/ui/theme";

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <ThemeProvider theme={Theme}>
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default MyApp;
