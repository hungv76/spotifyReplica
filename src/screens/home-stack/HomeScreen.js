import React, { Component } from 'react';
import {
  Text,
  View,
  Button,
  ScrollView
} from 'react-native';

import Styles from './../../style/styles';
import HorizontalPlaylistList from './components/HorizontalPlaylistList';

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home',
  }
  render() {
    return (
      <ScrollView style={homeScreenStyles}>
        <HorizontalPlaylistList/>
      </ScrollView>

    );
  }
}

const homeScreenStyles = {
  flex: 1,
  flexDirection: 'column',
  backgroundColor: '#ccc',
  // justifyContent: 'center',
  // alignItems: 'center'

}

export default HomeScreen;
