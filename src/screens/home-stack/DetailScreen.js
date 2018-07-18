import React, { Component } from 'react';
import {
  Text,
  View,
  Button,
  Switch,
  FlatList,
} from 'react-native';

import RoundedButton from './components/RoundedButton';
import ListItem from './components/ListItem';

class DetailsScreen extends Component {

  static navigationOptions = {
    title: 'Songs',
  }

  static renderListItem(item) {
    const reducer = (accumulator, currentValue) => `${accumulator}, ${currentValue.name}`;

    return (
      <ListItem
        title={item.track.name}
        subTitle={(item.track.artists.reduce(reducer, '')).slice(2)}
      />
    );
  }
  constructor(props) {
    super(props);
    this.state = { toggleValue: false };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle(event) {
    console.log(event);
    this.setState({ toggleValue: event });
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
            ListHeaderComponent={
              <View style={{
                // backgroundColor: 'gray',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                height: 62,
              }}
              >
                <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Downloaded</Text>
                <Switch
                  onValueChange={this.handleToggle}
                  value={this.state.toggleValue}
                />
              </View>
            }
            renderItem={({ item }) => this.constructor.renderListItem(item)}
            keyExtractor={item => item.track.id}
          />
        </View>


      </View>
    );
  }
}

export default DetailsScreen;
