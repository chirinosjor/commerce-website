import React from 'react';
import '../styles/globals.css';
import { node } from 'prop-types';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

MyApp.propTypes = {
  Component: node.isRequired,
  pageProps: node.isRequired,
};

export default MyApp;
