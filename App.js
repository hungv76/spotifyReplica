/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StatusBar,
  View,
} from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

import HomeScreen from './src/screens/home-stack/HomeScreen';
import DetailsScreen from './src/screens/home-stack/DetailScreen';
import ArtistScreen from './src/screens/artist-stack/ArtistScreen';
import BrowseScreen from './src/screens/browse-stack/BrowseScreen';
import MyScreen from './src/screens/MyScreen';

const HeaderBarOption = {
  headerStyle: {
    backgroundColor: '#282828',
    borderBottomWidth: 0,
  },
  headerTintColor: '#fff',
  headerBackTitle: null,
};

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
  },
  {
    navigationOptions: HeaderBarOption,
    initialRouteName: 'Home',
  },
);

const BrowseStack = createStackNavigator(
  {
    Browse: BrowseScreen,
  },
  {
    navigationOptions: HeaderBarOption,
    initialRouteName: 'Browse',
  },
);

class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar
          barStyle="light-content"
        />
        <Tabs />
      </View>

    );
  }
}

const Tabs = createBottomTabNavigator(
  {
    Home: HomeStack,
    Browse: BrowseStack,
    Artist: ArtistScreen,
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
