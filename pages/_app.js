import React from "react";
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
