import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
} from 'react-native';

class HorizontalPlaylistList extends Component {
  render() {
    return (
      <ScrollView
        horizontal={true}
        style={{
          flex: 1,
          flexDirection: 'row',
          height: 200,
          backgroundColor: '#fff',
        }}
      >
        <Text>Hello</Text>
      </ScrollView>
    );
  }
}

export default HorizontalPlaylistList;
