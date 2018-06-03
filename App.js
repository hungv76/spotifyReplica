/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { } from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

import HomeScreen from './src/screens/home-stack/HomeScreen';
import DetailsScreen from './src/screens/home-stack/DetailScreen';
import ArtistScreen from './src/screens/artist-stack/ArtistScreen';
import TopSongScreen from './src/screens/top-song-stack/TopSongScreen';
import MyScreen from './src/screens/MyScreen';

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#282828',
        borderBottomWidth: 0,
      },
      headerTintColor: '#fff',
      headerBackTitle: null,
    },
    initialRouteName: 'Home',
  },
);

class App extends Component {
  render() {
    return (
      <Tabs />
    );
  }
}

const Tabs = createBottomTabNavigator(
  {
    Home: HomeStack,
    Artist: ArtistScreen,
    'Top Song': TopSongScreen,
    'My Page': MyScreen,
  },
  {
    tabBarOptions: {
      activeTintColor: 'white',
      inactiveTintColor: 'gray',
      style: {
        backgroundColor: '#282828',
      },
    },
  },
);

export default App;
