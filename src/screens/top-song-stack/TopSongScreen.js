import React, { Component } from 'react';
import {
  Text,
  View,
  Button,
} from 'react-native';

import Styles from './../../style/styles';

class TopSongScreen extends Component {
  render() {
    return (
      <View style={Styles.containerStyles} >
        <Text>Top Song Screen</Text>
        <Button
          title="Click me"
          onPress={() => console.log('pressed!')}
        />
      </View>
    );
  }
}

export default TopSongScreen;
