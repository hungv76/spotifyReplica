import axios from 'axios';
import qs from 'qs';

class SpotifyHelper {
  constructor() {
    this.token = '';
  }

  config(setting) {
    this.clientID = setting.clientID;
    this.clientSecret = setting.clientSecret;
  }

  getAccessToken() {
    const base64Encoded = btoa(`${this.clientID}:${this.clientSecret}`);
    console.log(base64Encoded);
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

    axios(option)
      .then((response) => {
        // this.accessToken = response.data.
        console.log(response);
      }).catch((error) => {
        console.log(error.data);
      });
  }
}

export default SpotifyHelper;
