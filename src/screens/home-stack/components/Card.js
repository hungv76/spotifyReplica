import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';

class Card extends Component {
  render() {
    return (
      <View style={{
        height: 220,
        width: 160,
        // backgroundColor: '#aaa',
        marginLeft: 10,
        marginRight: 10,
      }}
      >
        <Image
          source={{ uri: this.props.image }}
          style={{ width: 160, height: 160 }}
        />
        <View
          style={{
            flex: 1,
            // backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: 5,
          }}
        >
          <Text
            style={{
              fontWeight: 'bold',
              textAlign: 'center',
              lineHeight: 15,
              fontSize: 15,
              marginBottom: 2,
              color: '#fff',
            }}
          >
            {this.props.name}
          </Text>
          <Text
            style={{
              marginTop: 2,
              color: '#fff',
            }}
          >
            10,000,000 Followers
          </Text>
        </View>

      </View>
    );
  }
}

export default Card;
