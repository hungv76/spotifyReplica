import React, { Component } from 'react';
import {
  Text,
  View,
  Button,
  FlatList,
} from 'react-native';

import RoundedButton from './components/RoundedButton';

class DetailsScreen extends Component {
  static navigationOptions = {
    title: 'Songs',
  }

  _renderListItem({ item }) {

  }

  render() {
    const { navigation } = this.props;
    const { tracks } = navigation.getParam('playlist', []);
    console.log(JSON.stringify(tracks.items));
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
        <View style={{
          flex: 1,
          alignSelf: 'stretch',
          // backgroundColor: '#2AB758',
          flexDirection: 'row',
        }}
        >
          <View
            style={{
              backgroundColor: '#2AB758',
              flex: 1,
              height: 62,
            }}
          >
            <Text style={{ color: 'white' }}>
              Title of Song
            </Text>
            <View>
            </View>
          </View>
          {/* <FlatList
            style={{
              flex: 1,
              backgroundColor: 'blue',

            }}
            data={tracks.items}
            ListHeaderComponent={<Text>The Header</Text>}
            renderItem={({ item }) => <Text>{item.track.name}</Text>}
          /> */}
        </View>


      </View>
    );
  }
}

export default DetailsScreen;
