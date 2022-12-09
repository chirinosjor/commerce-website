import React from 'react';
import '../styles/globals.css';
import { node } from 'prop-types';
import Layout from '../layouts/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

MyApp.propTypes = {
  Component: node.isRequired,
  pageProps: node.isRequired,
};

export default MyApp;
