import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';

class Card extends Component {
  constructor(props) {
    super(props);
    this.handleOnPress = this.handleOnPress.bind(this);
    this.state = {
      playlist: {
        followers: 0,
      },
    };
    this.getPlaylistData().then((playlist) => {
      this.setState({ playlist });
    });
  }

  async getPlaylistData() {
    const authToken = 'Bearer BQAQQ-KIrPdf4BlLBPJKpcLKradKtmP2ISc4Zt70wfesINpDTgNEI0b5nsaw8viw5Xut9AZhBtd3sT_Uoao';
    let { playlistID } = this.props;
    let playlist = await axios({
      method: 'get',
      headers: {
        Authorization: authToken,
      },
      url: `https://api.spotify.com/v1/users/spotify/playlists/${playlistID}`,
    }).then((response) => {
      let { description, followers, tracks, images, name } = response.data;
      return {
        description,
        tracks,
        images,
        name,
        followers: followers.total,
      };
    });
    return playlist;
  }

  handleOnPress() {
    this.props.navigation.navigate('Details', { playlist: this.state.playlist });
  }

  // renderFollowers

  render() {
    return (
      <TouchableOpacity
        style={{
          height: 220,
          width: 160,
          marginLeft: 10,
          marginRight: 10,
        }}
        onPress={this.handleOnPress}

      >
        <Image
          source={{ uri: this.props.image }}
          style={{ width: 160, height: 160 }}
        />
        <View
          style={{
            flex: 1,
            // backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: 5,
          }}
        >
          <Text
            style={{
              fontWeight: 'bold',
              textAlign: 'center',
              lineHeight: 15,
              fontSize: 15,
              marginBottom: 2,
              color: '#fff',
            }}
          >
            {this.props.name}
          </Text>
          <Text
            style={{
              marginTop: 2,
              color: '#fff',
            }}
          >
            {(this.state.playlist.followers.toLocaleString())} Followers
          </Text>
        </View>

      </TouchableOpacity >
    );
  }
}

export default Card;
