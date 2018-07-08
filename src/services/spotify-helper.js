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
        console.log(response.data);
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
        console.log(response.data);
      });
  }

  async getAccessToken() {
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

    await axios(option)
      .then((response) => {
        console.log(response);
        this.accessToken = response.data.access_token;
        return new Promise((resolve) => {
          resolve();
        });
      }).catch((error) => {
        console.log(error.response);
      });
  }
}

export default SpotifyHelper;
