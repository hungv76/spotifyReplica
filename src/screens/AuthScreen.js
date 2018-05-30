import React, { Component } from 'react';
import {
  Text,
  View,
  Button,
} from 'react-native';

import Styles from './../style/styles';

class AuthScreen extends Component {
  render() {
    return (
      <View style={Styles.containerStyles} >
        <Text>Auth Screen</Text>
        <Button
          title="Click me"
          onPress={() => console.log('pressed')}
        />
      </View>
    );
  }
}

export default AuthScreen;
