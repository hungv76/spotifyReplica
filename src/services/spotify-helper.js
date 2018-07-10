import axios from 'axios';
import qs from 'qs';

class SpotifyHelper {
  constructor() {
    this.accessToken = '';
    this.expire_time = 0;
  }

  config(setting) {
    this.clientID = setting.clientID;
    this.clientSecret = setting.clientSecret;
  }

  isAccessTokenValid() {
    if (this.expire_time === 0) {
      return false;
    }

    if (this.expire_time <= Date.now()) {
      return false;
    }

    return true;
  }

  getCategories(limit = 5) {
    if (!this.isAccessTokenValid()) {
      this.getAccessToken();
    }
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

  getPlayListsByCategoryID(categoryID) {
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

  getSongsByPlayListID(playlistID) {
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
        this.expire_time = Date.now() + (parseInt(response.data.expires_in, 10) * 1000);
        return response.data.access_token;
      })
      .catch((error) => {
        throw error;
      });
  }
}

export default SpotifyHelper;
