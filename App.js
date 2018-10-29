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
import Ionicons from 'react-native-vector-icons/Ionicons';

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

function tabBarIconGen(iconName) {
  return {
    tabBarIcon: ({ tintColor }) => (
      <Ionicons
        name={iconName}
        size={25}
        color={tintColor}
      />
    ),
  };
}


const Tabs = createBottomTabNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: tabBarIconGen('ios-home'),
    },
    Browse: {
      screen: BrowseStack,
      navigationOptions: tabBarIconGen('ios-musical-notes'),

    },
    Artist: {
      screen: ArtistScreen,
      navigationOptions: tabBarIconGen('ios-contact'),

    },
    Settings: {
      screen: MyScreen,
      navigationOptions: tabBarIconGen('ios-settings'),
    },
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
