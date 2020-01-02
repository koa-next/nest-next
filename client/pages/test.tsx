import React from 'react';
import { connect } from 'react-redux';
import { State } from '../redux/modules';

function Home() {
  return <div>Welcome to Next.js!</div>;
}

export default connect((state: State) => state)(Home);
