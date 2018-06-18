import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';

class ListItem extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          height: 62,
        }}
      >
        <View style={{
          flex: 10,
          flexDirection: 'column',
        }}
        >
          <View style={{
            flex: 1,
          }}
          >
            <Text
              numberOfLines={1}
              style={{
                color: 'white',
                fontSize: 16,
                position: 'absolute',
                bottom: 2,
              }}
            >
              {this.props.title}
            </Text>
          </View>

          <View style={{
            flex: 1,
            flexDirection: 'row',
            marginTop: 2,
          }}
          >
            <Ionicons
              name="ios-arrow-dropdown-circle"
              color="#2AB758"
              size={15}
              style={{
                marginTop: 1,
              }}
            />
            <Text
              numberOfLines={1}
              style={{ marginLeft: 8, color: 'white' }}
            >
              {this.props.subTitle}
            </Text>


          </View>

        </View >
        <View style={{
          flex: 2,
          alignItems: 'flex-end',
          justifyContent: 'center',
        }}
        >
          <TouchableOpacity>
            <Entypo
              name="dots-three-horizontal"
              color="#B3B3B3"
              size={16}
            />
          </TouchableOpacity>
        </View>

      </View >
    );
  }
}

export default ListItem;
