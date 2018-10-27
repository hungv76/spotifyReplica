import React, { Component } from 'react';
import {
  TouchableOpacity,
  Image,
  Dimensions,
  View,
  Text,
} from 'react-native';

const { width, height } = Dimensions.get('window');

class GenreCard extends Component {
  render() {
    return (
      <TouchableOpacity>
        <View
          style={{
            // flex: 1,
            alignItems: 'stretch',
            justifyContent: 'center',
          }}
        >
          <Image
            source={{ uri: this.props.image }}
            style={{
              flexGrow: 1,
              height: 160,
              width: 160,
              alignItems: 'center',
              justifyContent: 'center',
              // marginTop: 10,

            }}
          />
          <Text
            style={{
              textAlign: 'center',
            }}>
            Title
          </Text>
        </View>

      </TouchableOpacity>
    );
  }
}

export default GenreCard;

