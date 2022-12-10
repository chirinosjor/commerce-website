import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { node } from 'prop-types';
import Head from 'next/head';

function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Commerce company</title>
      </Head>
      <Navbar />
      {children}
    </div>
  );
}

Layout.propTypes = {
  children: node.isRequired,
};

export default Layout;
