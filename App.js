import React from 'react';
import { View, Text } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import {Provider} from 'react-redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

import reducer from './reducer';
import List from './RepoList';

const client = axios.create({
    baseURL: 'https://api.github.com',
    responseType: 'json'
});

const store = createStore(reducer, applyMiddleware(axiosMiddleware(client)));

const App = () => {
        return (
            <Provider store={store}>
                <View style={{ flex: 1 }}>
                    <List />
                </View>
            </Provider>
        );
};

export default App;
