import React, {
  PureComponent,
} from 'react';
import {
  View,
  FlatList,

} from 'react-native';

import ListItem from './ListItem';
import DownloadButton from './DownloadButton';

class PlayList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { selected: '' };
    this.onPressItem = this.onPressItem.bind(this);
    this.isSelected = this.isSelected.bind(this);
  }

  onPressItem(itemID) {
    this.setState({ selected: itemID });
    console.log(this.state);
  }

  isSelected(itemID) {
    if (itemID !== this.state.selected) {
      return false;
    }
    return true;
  }

  renderListItem(item) {
    const reducer = (accumulator, currentValue) => `${accumulator}, ${currentValue.name}`;

    return (
      <ListItem
        onPressItem={this.onPressItem}
        title={item.track.name}
        subTitle={(item.track.artists.reduce(reducer, '')).slice(2)}
        id={item.track.id}
        isSelected={this.isSelected(item.track.id)}
      />
    );
  }


  render() {
    console.log('Playlist rendered!');
    return (
      <View style={{
        flex: 1,
        alignSelf: 'stretch',
        flexDirection: 'row',
      }}
      >
        <FlatList
          style={{
            flex: 1,
            marginLeft: 15,
            marginRight: 15,
          }}
          data={this.props.tracks.items}
          ListHeaderComponent={
            <DownloadButton />
          }
          renderItem={({ item }) => this.renderListItem(item)}
          keyExtractor={item => item.track.id}
        />
      </View>
    );
  }
}

export default PlayList;
