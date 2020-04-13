import App, { AppContext } from 'next/app';
import React from 'react';
import { app as logger } from '../utils/logger';

class MyApp extends App<any> {
  static async getInitialProps(ctx: AppContext) {
    try {
      const appProps = await App.getInitialProps(ctx);
      return { ...appProps };
    } catch (err) {
      logger.error(err);
      throw err;
    }
  }

  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}

export default MyApp;
