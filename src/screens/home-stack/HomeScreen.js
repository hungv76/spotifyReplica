import React, { Component } from 'react';
import {
  Text,
  View,
  Button
} from 'react-native';

import Styles from './../../style/styles'
class HomeScreen extends Component {
  render() {
    return (
      <View style={Styles.containerStyles} >
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

export default HomeScreen;
