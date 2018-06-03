import React, { Component } from 'react';
import {
  Text,
  View,
  Button,
  ScrollView
} from 'react-native';

import Styles from './../../style/styles';
import HorizontalPlaylistList from './components/HorizontalPlaylistList';
import axios from 'axios';
import qs from 'qs';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.getCategoriesData();
  }
  static navigationOptions = {
    title: 'Home',
  }

  async getCategoriesData() {
    let auth_token = 'Bearer BQCcq2k45K2BK5sKRD-j_Y1eDp1qzzEe9_N4WBd1rcgVCPr6pztXdr0jSXCL5MmUQ5FoaiU-oud2kN3WJgQ';
    let categories = await axios({
      method: 'get',
      headers: {
        'Authorization': auth_token,
      },
      url: 'https://api.spotify.com/v1/browse/categories?limit=6'
    }).then(response => response.data.categories.items);

    let newCategories = await Promise.all(categories.map(async (category) => {
      let playlist = await axios({
        method: 'get',
        headers: {
          'Authorization': auth_token,
        },
        url: `https://api.spotify.com/v1/browse/categories/${category.id}/playlists?limit=10`,
      }).then(response => response.data.playlists.items);

      let newCategory = JSON.parse(JSON.stringify(category));
      newCategory.playlist = playlist;
      return newCategory;
    }));

    this.setState({
      categories: newCategories
    })
  }

  renderCategories() {
    if (this.state.categories) {
      let categories = this.state.categories;
      return (
        categories.map(category => {
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
              >{category.name}</Text>
              <HorizontalPlaylistList playlists={category.playlist} />
            </View>
          )
        })
      )
    }

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

const homeScreenStyles = {
  flex: 1,
  flexDirection: 'column',
  backgroundColor: '#121212',
}

export default HomeScreen;
