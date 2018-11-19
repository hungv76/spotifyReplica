import React, { Component } from 'react';
import {
  Text,
  View,
  Button,
} from 'react-native';
import ParallaxView from 'react-native-parallax-view';

import Styles from './../style/styles';

class MyScreen extends Component {
  render() {
    return (
      < ParallaxView
        backgroundSource={require('image!backgroundImage')}
        windowHeight={300}
        header={(
          <Text style={
            
          }>
            Header Content
          </Text>
        )
        }
        scrollableViewStyle={{ backgroundColor: 'red' }}
      >
        <View>
          <Text>
            Hello world
          </Text>
        </View>
      </ParallaxView >

    )
  }
}

export default MyScreen;
