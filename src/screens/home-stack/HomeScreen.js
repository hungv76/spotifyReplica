import React, { Component } from 'react';
import {
  Text,
  View,
  Button,
  ScrollView
} from 'react-native';

import Styles from './../../style/styles'
class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home',
  }
  render() {
    return (
      <ScrollView 
      horizontal={true}
      style={{ flex: 1, flexDirection: 'row', }} >
        <View style={homeScreenStyles}>
          <View style={{width: 100, height: 100, backgroundColor: '#000', margin: 10}}>
            
          </View>
          <View style={{width: 100, height: 100, backgroundColor: '#000', margin: 10}}>
            
          </View>
          <View style={{width: 100, height: 100, backgroundColor: '#000', margin: 10}}>
            
          </View>
          <View style={{width: 100, height: 100, backgroundColor: '#000', margin: 10}}>
            
          </View>
        </View>
      </ScrollView>
    );
  }
}

const homeScreenStyles = {
  flex: 1,
  flexDirection: 'row',
  backgroundColor: '#bbb',
  height: 150,
  justifyContent: 'center',
  alignItems: 'center'

}

export default HomeScreen;
