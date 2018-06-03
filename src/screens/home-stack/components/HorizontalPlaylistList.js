import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import Card from './Card';

class HorizontalPlaylistList extends Component {
  constructor(props) {
    super(props);
    this.renderCardData = this.renderCardData.bind(this);
  }
  renderCardData() {
    return this.props.playlists.map(playlist =>
      (<Card
        key={playlist.id}
        image={playlist.images[0].url}
        name={playlist.name}
        playlistID={playlist.id}
        navigation={this.props.navigation}
      />));
  }

  render() {
    return (
      <ScrollView
        contentContainerStyle={{ alignItems: 'center', paddingLeft: 10, paddingRight: 10 }}
        showsHorizontalScrollIndicator={false}
        horizontal
        style={{
          height: 240,
        }}
      >
        {this.renderCardData()}
      </ScrollView>
    );
  }
}

export default HorizontalPlaylistList;
