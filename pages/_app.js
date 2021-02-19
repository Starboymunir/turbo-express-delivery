import React, { useEffect } from "react";
import "../styles/globals.css";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import { ThemeProvider } from "@material-ui/core";
import Theme from "../src/components/Theme";

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <ThemeProvider theme={Theme}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default MyApp;
