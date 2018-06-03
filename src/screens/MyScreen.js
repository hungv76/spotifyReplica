import React, { Component } from 'react';
import {
  Text,
  View,
  Button,
} from 'react-native';

import Styles from './../style/styles';

class MyScreen extends Component {
  render() {
    return (
      <View style={Styles.containerStyles} >
        <Text>My Screen</Text>
        <Button
          title="Click me"
          onPress={() => console.log('pressed!')}
        />
      </View>
    );
  }
}

export default MyScreen;
