import React, { Component } from 'react';
import {
  TouchableOpacity,
  Image,
  Dimensions,
  Text,
} from 'react-native';

const { width: screenWidth } = Dimensions.get('window');

class GenreCard extends Component {
  render() {
    let genreCardWidth = screenWidth * 0.44;
    return (
      <TouchableOpacity
        style={{
          height: genreCardWidth,
          width: genreCardWidth,
          alignItems: 'center',
          marginTop: screenWidth * 0.04,
        }}
      >

        <Image
          source={{ uri: this.props.image }}
          style={{
            flexGrow: 1,
            height: genreCardWidth,
            width: genreCardWidth,
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
            bottom: screenWidth * 0.06,
          }}
        >
          {this.props.id.charAt(0).toUpperCase() + this.props.id.slice(1)}
        </Text>
      </TouchableOpacity>
    );
  }
}

export default GenreCard;

