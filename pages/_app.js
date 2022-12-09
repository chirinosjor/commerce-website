import React from 'react';
import '../styles/globals.css';
import { node } from 'prop-types';
import Layout from '../layouts/Layout';
import { I18nProvider } from '../context/i18n';

function MyApp({ Component, pageProps }) {
  return (
    <I18nProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </I18nProvider>
  );
}

MyApp.propTypes = {
  Component: node.isRequired,
  pageProps: node.isRequired,
};

export default MyApp;
