import React, { Component } from 'react';
import {
  View,
} from 'react-native';

import RoundedButton from './components/RoundedButton';
import PlayList from './components/PlayList';

class DetailsScreen extends Component {
  static navigationOptions = {
    title: 'Songs',
  }
  render() {
    const { navigation } = this.props;
    const { tracks } = navigation.getParam('playlist', []);
    console.log(tracks.items);
    return (
      <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#121212' }}>
        <View style={{
          alignSelf: 'stretch',
          alignItems: 'center',
          marginTop: 10,
          marginBottom: 10,
        }}
        >
          <RoundedButton
            style={{

            }}
            text="Shuffle Play"
            color="#2AB758"
          />
        </View>
        <PlayList
          tracks={tracks}
        />
      </View>
    );
  }
}

export default DetailsScreen;
