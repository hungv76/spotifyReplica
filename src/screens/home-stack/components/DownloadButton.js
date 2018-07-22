import React, { Component } from 'react';
import {
  View,
  Text,
  Switch,
} from 'react-native';

class DownloadButton extends Component {
  constructor(props) {
    super(props);
    this.state = { isDownloaded: false };
    this.onToggleDownloaded = this.onToggleDownloaded.bind(this);
  }

  onToggleDownloaded(toggleValue) {
    this.setState({ isDownloaded: toggleValue });
  }
  render() {
    return (
      <View style={{
        // backgroundColor: 'gray',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 62,
      }}
      >
        <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Downloaded</Text>
        <Switch
          onValueChange={this.onToggleDownloaded}
          value={this.state.isDownloaded}
        />
      </View>
    );
  }
}

export default DownloadButton;
