import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppRoot from './appRoot/index';
import * as serviceWorker from './serviceWorker';
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  HttpLink,
} from '@apollo/client';
import './css/main.scss';

const cache = new InMemoryCache();

const client = new ApolloClient({
  cache,
  link: new HttpLink({
    uri: 'https://mock-apollo-server.netlify.app',
  }),
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
