/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {View} from 'react-native';
import store from './src/Store';
import AppContainer from './src/Container/App';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <AppContainer />
        </View>
      </Provider>
    );
  }
}
