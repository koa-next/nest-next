import withRedux from 'next-redux-wrapper';
import App, { AppContext, AppInitialProps } from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../redux';

const debug = require('debug')('nest-next:next:app');

class MyApp extends App<any> {
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
    const { Component, pageProps, store } = this.props;
    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    );
  }
}

export default withRedux(configureStore)(MyApp);
