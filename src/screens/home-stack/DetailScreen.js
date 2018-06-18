import React, { Component } from 'react';
import {
  Text,
  View,
  Button,
  FlatList,
} from 'react-native';

import RoundedButton from './components/RoundedButton';
import ListItem from './components/ListItem';

class DetailsScreen extends Component {
  static navigationOptions = {
    title: 'Songs',
  }

  _renderListItem(item) {
    const reducer = (accumulator, currentValue) => accumulator + ', ' + currentValue.name;

    return (
      <ListItem
        title={item.track.name}
        subTitle={(item.track.artists.reduce(reducer, '')).slice(2)}
      />
    )
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
        <View style={{
          flex: 1,
          alignSelf: 'stretch',
          flexDirection: 'row',
        }}
        >
          <FlatList
            style={{
              flex: 1,
              marginLeft: 15,
              marginRight: 15,
            }}
            data={tracks.items}
            ListHeaderComponent={<Text>The Header</Text>}
            renderItem={({ item }) => this._renderListItem(item)}
            keyExtractor={item => item.track.id}
          />
        </View>


      </View>
    );
  }
}

export default DetailsScreen;
