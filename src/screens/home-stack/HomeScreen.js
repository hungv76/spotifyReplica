import React, { Component, StatusBar } from 'react';
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
    headerStyle: {
      backgroundColor: '#282828',
      borderBottomWidth: 0,
    },
    headerTintColor: '#fff',

  }

  constructor(props) {
    super(props);
    this.state = {};
    this.getCategoriesData();
  }

  async getCategoriesData() {
    const authToken = 'Bearer BQDyq_H8sW9iBdEBEptDY3744OiBxmb4mwvHDw2TNvixpOGej_QMX-izfmjyDVVT_P4hla6Ve92N27HwoPk';
    const categories = await axios({
      method: 'get',
      headers: {
        Authorization: authToken,
      },
      url: 'https://api.spotify.com/v1/browse/categories?limit=6',
    }).then(response => response.data.categories.items);

    const newCategories = await Promise.all(categories.map(async (category) => {
      let playlist = await axios({
        method: 'get',
        headers: {
          Authorization: authToken,
        },
        url: `https://api.spotify.com/v1/browse/categories/${category.id}/playlists?limit=10`,
      }).then(response => response.data.playlists.items);

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
              {/* <StatusBar barStyle="dark-content" hidden={false} /> */}

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
