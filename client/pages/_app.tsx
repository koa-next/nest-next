import React from 'react';
import App, { AppContext, AppInitialProps } from 'next/app';

const debug = require('debug')('nest-next:next:app');

class MyApp extends App {
  static async getInitialProps(ctx: AppContext) {
    try {
      const appProps = await App.getInitialProps(ctx);
      return { ...appProps };
    } catch (err) {
      debug('next app error %o', err);
      return {} as AppInitialProps;
    }
  }

  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}

export default MyApp;
