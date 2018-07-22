import React, { Component } from 'react';
import {
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';

const { width, height } = Dimensions.get('window');

class GenreCard extends Component {
  render() {
    return (
      <TouchableOpacity>
        <Image
          source={{ uri: this.props.image }}
          style={{ width: width / 2 - 10, height: 160 }}
        />
      </TouchableOpacity>
    );
  }
}

export default GenreCard;

