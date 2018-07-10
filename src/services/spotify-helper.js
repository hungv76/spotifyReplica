import axios from 'axios';
import qs from 'qs';

class SpotifyHelper {
  constructor() {
    this.accessToken = '';
  }

  config(setting) {
    this.clientID = setting.clientID;
    this.clientSecret = setting.clientSecret;
  }

  getCategories(limit = 5) {
    const option = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
      },
      url: `https://api.spotify.com/v1/browse/categories?&limit=${limit}`,
    };
    return axios(option)
      .then((response) => {
        return response.data.categories.items;
      })
      .catch((error) => {
        throw error;
      });
  }

  getPlayList(categoryID) {
    const option = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
      },
      url: `https://api.spotify.com/v1/browse/categories/${categoryID}/playlists?limit=10`,
    };
    return axios(option)
      .then((response) => {
        return response.data.playlists.items;
      })
      .catch((error) => {
        throw error;
      });
  }

  getAccessToken() {
    const base64Encoded = btoa(`${this.clientID}:${this.clientSecret}`);
    const data = {
      grant_type: 'client_credentials',
    };
    const option = {
      method: 'POST',
      url: 'https://accounts.spotify.com/api/token',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${base64Encoded}`,
      },
      data: qs.stringify(data),
    };

    return axios(option)
      .then((response) => {
        this.accessToken = response.data.access_token;
        return response.data.access_token;
      })
      .catch((error) => {
        throw error;
      });
  }
}

export default SpotifyHelper;
