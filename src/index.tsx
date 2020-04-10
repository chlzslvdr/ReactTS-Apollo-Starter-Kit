import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppRoot from './appRoot/index';
import * as serviceWorker from './serviceWorker';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import './css/main.scss';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'https://mock-apollo-server.netlify.com/',
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <AppRoot />
    </ApolloProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
