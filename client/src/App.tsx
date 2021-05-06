import React from 'react';
import { Provider } from 'react-redux';

import { Layout } from './components/Layout';

import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  );
};

export default App;
