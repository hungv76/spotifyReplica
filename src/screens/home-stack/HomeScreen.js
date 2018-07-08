import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
} from 'react-native';
import axios from 'axios';
import SpotifyHelper from './../../services/spotify-helper';

import HorizontalPlaylistList from './components/HorizontalPlaylistList';

const homeScreenStyles = {
  flex: 1,
  flexDirection: 'column',
  backgroundColor: '#121212',
};

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home',
  }

  constructor(props) {
    super(props);
    this.state = {};
    // this.getCategoriesData();
    this.getAccessTokenNew();
  }

  async getAccessTokenNew() {
    let spotifyHelper = new SpotifyHelper();
    spotifyHelper.config({ clientID: '6d7992cba8f647599883a386e368bc9c', clientSecret: 'b8e310c5227b48bebd7a6825086dff16' });
    this.setState({});

    await spotifyHelper.getAccessToken();
    spotifyHelper.getCategories()
      .then((categories) => {
        spotifyHelper.getPlayList(categories[0].id);
      });

    // console.log('got the access token 1');
  }

  async getCategoriesData() {
    const authToken = 'Bearer BQAQQ-KIrPdf4BlLBPJKpcLKradKtmP2ISc4Zt70wfesINpDTgNEI0b5nsaw8viw5Xut9AZhBtd3sT_Uoao';
    const categories = await axios({
      method: 'get',
      headers: {
        Authorization: authToken,
      },
      url: 'https://api.spotify.com/v1/browse/categories?&limit=5',
    }).then(response => response.data.categories.items);

    const newCategories = await Promise.all(categories.map(async (category) => {
      let playlist = await axios({
        method: 'get',
        headers: {
          Authorization: authToken,
        },
        url: `https://api.spotify.com/v1/browse/categories/${category.id}/playlists?limit=10`,
      }).then(response => response.data.playlists.items)
        .catch(error => console.log(error.response));

      let newCategory = JSON.parse(JSON.stringify(category));
      newCategory.playlist = playlist;
      return newCategory;
    }));

    this.setState({
      categories: newCategories,
    });
  }

  renderCategories() {
    if (this.state.categories) {
      let { categories } = this.state;
      return (
        categories.map((category) => {
          return (

            <View
              key={category.id}
              style={{
                alignItems: 'center',
                marginTop: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: '#fff',
                }}
              >{category.name}
              </Text>
              <HorizontalPlaylistList
                playlists={category.playlist}
                navigation={this.props.navigation}
              />
            </View>
          );
        })
      );
    }
    return (<Text> Loading... </Text>);
  }

  render() {
    return (
      <ScrollView style={homeScreenStyles}>
        <View>
          {this.renderCategories()}
        </View>
      </ScrollView>

    );
  }
}

export default HomeScreen;
