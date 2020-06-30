import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './store';

import Layout from './components/Layout';
import Bills from './containers/Bills';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Layout>
                    <Bills />
                </Layout>
            </Provider>
        );
    }
}

export default App;
