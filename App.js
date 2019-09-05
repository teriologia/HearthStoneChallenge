/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Provider} from 'react-redux';
import store from './src/store';
import {View} from 'react-native';
import AppContainer from './src/containers/App';

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
