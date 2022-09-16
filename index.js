/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import 'react-native-gesture-handler' ;
import { store } from './src/redux/store';
import { Provider } from 'react-redux';

const ReduxApp = () => (
    <Provider store={store}>
         <App/>
    </Provider>
          );
AppRegistry.registerComponent(appName, () => ReduxApp);
