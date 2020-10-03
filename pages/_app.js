import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import App from "next/app";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../src/theme";

import withReduxStore from "../store/with-redux-store";
import { Provider } from "react-redux";

import { FullScreenLoader } from "../components/general/IsLoading";

import { initializeIcons } from "@fluentui/react";
import { setIconOptions } from "@fluentui/react/lib-commonjs/Styling";

// Suppress icon warnings.
setIconOptions({
  disableWarnings: true,
});

initializeIcons(undefined, { disableWarnings: true });

class MyApp extends App {
  state = {
    wait: true,
  };

  componentDidMount = () => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }

    return this.setState({ wait: false });
  };

  render() {
    const { Component, pageProps, store } = this.props;

    return (
      <React.Fragment>
        <Head>
          <title>
            Dopabox | Make Cool Money Online Using Your Smart Phones
          </title>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
        </Head>

        <Provider store={store}>
          <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            {this.props.wait ? (
              <Layout>
                <FullScreenLoader {...pageProps} />
              </Layout>
            ) : (
              <Component {...pageProps} />
            )}
          </ThemeProvider>
        </Provider>
      </React.Fragment>
    );
  }
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default withReduxStore(MyApp);
