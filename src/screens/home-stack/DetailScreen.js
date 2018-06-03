import React, { Component } from 'react';
import {
  Text,
  View,
  Button,
} from 'react-native';

class DetailsScreen extends Component {
  static navigationOptions = {
    title: 'Playlist',
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#121212' }}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.push('Details')}
        />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.push('Home')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

export default DetailsScreen;
