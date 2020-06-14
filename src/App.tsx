import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './store';

import Bills from './containers/Bills';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Bills />
      </Provider>
    );
  }
}

export default App;
