import axios from 'axios';
import qs from 'qs';

const SpotifyHelper = {
  access_token: '',
  expireTime: 0,

  config(setting) {
    this.clientID = setting.clientID;
    this.clientSecret = setting.clientSecret;
  },

  isAccessTokenValid() {
    if (this.expireTime === 0) {
      return false;
    }

    if (this.expire_time <= Date.now()) {
      return false;
    }

    return true;
  },

  async enableAccessToken() {
    if (this.isAccessTokenValid()) {
      console.log('Access Token still valid');
      console.log('expireTime', this.expireTime);
      return;
    }
    console.log('Access Token expired, refreshing...');
    await this.getAccessToken();
    console.log('get token done');
  },

  async getCategories(limit = 2) {
    await this.enableAccessToken();
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
  },

  async getPlayListsByCategoryID(categoryID) {
    await this.enableAccessToken();
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
  },

  async getSongsByPlayListID(playlistID) {
    await this.enableAccessToken();
    const option = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
      },
      url: `https://api.spotify.com/v1/users/spotify/playlists/${playlistID}`,
    };

    return axios(option)
      .then((response) => {
        let { description, followers, tracks, images, name } = response.data;
        return {
          description,
          tracks,
          images,
          name,
          followers: followers.total,
        };
      })
      .catch((error) => {
        throw error;
      });
  },

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

    return axios(option)
      .then((response) => {
        this.accessToken = response.data.access_token;
        this.expireTime = Date.now() + (parseInt(response.data.expires_in, 10) * 1000);
        return response.data.access_token;
      })
      .catch((error) => {
        throw error;
      });
  },
};

export default SpotifyHelper;
