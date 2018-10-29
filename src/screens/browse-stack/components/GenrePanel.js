import React, { Component } from 'react';
import {
  View,
  Dimensions,
} from 'react-native';

import GenreCard from './GenreCard';

const { width: screenWidth } = Dimensions.get('window');

class GenrePanel extends Component {
  renderGenreList() {
    return genreList.map(genre => (
      <GenreCard
        id={genre.id}
        image={genre.image}
        key={genre.id}
      />
    ));
  }
  render() {
    return (
      <View
        style={{
          // justifyContent: 'center',
          flexDirection: 'row',
          flexWrap: 'wrap',
          // alignItems: 'flex-start',
          justifyContent: 'space-between',
          // backgroundColor: 'cyan',
          width: screenWidth * 0.93,
        }}
      >
        {this.renderGenreList()}

      </View>
    );
  }
}

const genreList = [
  {
    id: 'pop',
    image: 'https://t.scdn.co/media/derived/pop-274x274_447148649685019f5e2a03a39e78ba52_0_0_274_274.jpg',
  },
  {
    id: 'rock',
    image: 'https://t.scdn.co/media/derived/rock_9ce79e0a4ef901bbd10494f5b855d3cc_0_0_274_274.jpg',
  },
  {
    id: 'mood',
    image: 'https://t.scdn.co/media/original/mood-274x274_976986a31ac8c49794cbdc7246fd5ad7_274x274.jpg',
  },
  {
    id: 'chill',
    image: 'https://t.scdn.co/media/derived/chill-274x274_4c46374f007813dd10b37e8d8fd35b4b_0_0_274_274.jpg',
  },
  {
    id: 'romance',
    image: 'https://t.scdn.co/media/derived/romance-274x274_8100794c94847b6d27858bed6fa4d91b_0_0_274_274.jpg',
  },
  {
    id: 'focus',
    image: 'https://t.scdn.co/media/original/genre-images-square-274x274_5e50d72b846a198fcd2ca9b3aef5f0c8_274x274.jpg',
  },
  {
    id: 'workout',
    image: 'https://t.scdn.co/media/links/workout-274x274.jpg',
  },
  {
    id: 'sleep',
    image: 'https://t.scdn.co/media/derived/sleep-274x274_0d4f836af8fab7bf31526968073e671c_0_0_274_274.jpg',
  },
  {
    id: 'kpop',
    image: 'https://t.scdn.co/images/69c728f3bd9643a5ab0f4ef5a79919f1.jpeg',
  },
  {
    id: 'gaming',
    image: 'https://t.scdn.co/media/categories/gaming2_274x274.jpg',
  },
];

export default GenrePanel;
