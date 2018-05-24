/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import axios from 'axios';
import qs from 'qs';
import { createStackNavigator } from 'react-navigation';

import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailScreen';

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

class App extends Component {
  render() {
    return (
      <RootStack />
    );
  }
}

export default 　App;
