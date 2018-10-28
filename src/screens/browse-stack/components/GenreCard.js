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
      <TouchableOpacity
        style={{
          height: 170,
          width: 170,
          alignItems: 'center',
        }}
      >

        <Image
          source={{ uri: this.props.image }}
          style={{
            flexGrow: 1,
            height: 170,
            width: 170,
            alignItems: 'center',
            justifyContent: 'center',
            // marginTop: 10,

          }}
        />
        <Text
          style={{
            fontSize: 15,
            fontWeight: 'bold',
            color: 'white',
            textAlign: 'center',
            position: 'absolute',
            bottom: 10,

          }}
        >
          {this.props.id.charAt(0).toUpperCase() + this.props.id.slice(1)}
        </Text>
      </TouchableOpacity>
    );
  }
}

export default GenreCard;

