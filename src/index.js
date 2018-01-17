import React from 'react';
import { ApolloProvider } from 'react-apollo'

import 'antd/dist/antd.css';

import Routes from './routes'

const App = () => {
  <ApolloProvider>
    <Routes />
  </ApolloProvider>
}

ReactDOM.render(<App />, document.getElementById('root'));
