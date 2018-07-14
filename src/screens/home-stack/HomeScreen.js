import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
} from 'react-native';
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
    this.getAccessTokenNew();
  }

  async getAccessTokenNew() {
    SpotifyHelper.config({ clientID: '6d7992cba8f647599883a386e368bc9c', clientSecret: 'b8e310c5227b48bebd7a6825086dff16' });

    SpotifyHelper.getCategories()
      .then((categories) => {
        let newCategoriesPromise = Promise.all(categories.map((category) => {
          return SpotifyHelper.getPlayListsByCategoryID(category.id)
            .then((playlist) => {
              let newCategory = JSON.parse(JSON.stringify(category));
              newCategory.playlist = playlist;
              return newCategory;
            });
        }));

        newCategoriesPromise
          .then((newCategories) => {
            this.setState({
              categories: newCategories,
            });
          });
      })
      .catch((error) => {
        console.log(error);
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
