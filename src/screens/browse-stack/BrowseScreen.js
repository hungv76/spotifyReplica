import React, { Component } from 'react';
import {
  View,
  ScrollView,
} from 'react-native';

import GenrePanel from './components/GenrePanel';

class BrowseScreen extends Component {
  static navigationOptions = {
    title: 'Browse',
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          // justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#131313',
        }}
      >
        <ScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
          <GenrePanel />
        </ScrollView>

      </View>


    );
  }
}

export default BrowseScreen;
