import React, { Component } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

class RoundedButton extends Component {
  render() {
    return (
      <TouchableOpacity style={[{
        
        backgroundColor: '#418bca',
        height: 48,
        width: 212,
        borderRadius: 24,
        alignItems: 'center',
        justifyContent: 'center',
      }, this.props.style, {
        backgroundColor: this.props.color,
      }]
      }
      >
        <Text style={{
          color: '#FFFFFF',
          fontSize: 17,
          fontWeight: 'bold',

        }}
        >
          {this.props.text ? this.props.text : 'A Button '}
        </Text>
      </TouchableOpacity >
    );
  }
}

export default RoundedButton;
