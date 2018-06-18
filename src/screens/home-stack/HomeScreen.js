import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
} from 'react-native';
import axios from 'axios';

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
    this.getCategoriesData();
  }

  async getCategoriesData() {
    const authToken = 'Bearer BQD4MoR40KupsVPA25coFnwwCk_hd4siqxg_gBnKv93zy-E-B5nyJEVQ7sAen-Lp0l_8RHk9BkaS0gk5nng';
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
