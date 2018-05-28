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
import {
  createStackNavigator,
  createBottomTabNavigator,
  createSwitchNavigator
} from 'react-navigation';

import HomeScreen from './src/screens/home-stack/HomeScreen';
import DetailsScreen from './src/screens/home-stack/DetailScreen';
import ArtistScreen from './src/screens/artist-stack/ArtistScreen';
import TopSongScreen from './src/screens/top-song-stack/TopSongScreen';
import MyScreen from './src/screens/MyScreen';

var RootStack = createStackNavigator(
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
      <Tabs />
    );
  }
}


var Tabs = createBottomTabNavigator({
  Home: HomeScreen,
  Artist: ArtistScreen,
  'Top Song': TopSongScreen,
  "My Page": MyScreen
});

export default App;
