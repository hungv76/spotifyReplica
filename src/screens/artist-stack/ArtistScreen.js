import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  Animated,
  Image,
} from 'react-native';

const HEADER_DEFAULT_HEIGHT = 200;
const HEADER_MIN_HEIGHT = 60;
const HEADER_MAX_HEIGHT = 370;
const HEADER_SCROLL_DISTANCE = HEADER_DEFAULT_HEIGHT - HEADER_MIN_HEIGHT;


class ArtistScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollY: new Animated.Value(0),
    };
  }

  renderList() {
    const data = Array.from({ length: 30 });
    return (
      <View
        style={{
          flex: 1,
          marginTop: HEADER_DEFAULT_HEIGHT,
        }}
      >
        {data.map((_, item) =>
          (
            <View
              key={item}
              style={{
                height: 40,
                margin: 16,
                backgroundColor: '#D3D3D3',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Text>
                {item}
              </Text>
            </View>
          ))
        }
      </View>
    );
  }
  render() {
    const imageOpacity = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [1, 1, 0],
      extrapolate: 'clamp',
    });
    const imageTranslate = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [0, -50],
      extrapolate: 'clamp',
    });
    const headerHeight = this.state.scrollY.interpolate({
      inputRange: [-170, 0, HEADER_SCROLL_DISTANCE],
      outputRange: [HEADER_MAX_HEIGHT, HEADER_DEFAULT_HEIGHT, HEADER_MIN_HEIGHT],
      extrapolate: 'clamp',
    });
    return (
      <View style={{
        flex: 1,
      }}
      >
        <ScrollView
          style={{
            // backgroundColor: 'blue',
          }}
          scrollEventThrottle={1}
          onScroll={Animated.event(
            [{
              nativeEvent: {
                contentOffset: {
                  y: this.state.scrollY,
                },
              },
            }],
            {
              listener: (event) => {
                console.log(this.state.scrollY);
              },
            },

          )}
        >
          {this.renderList()}
        </ScrollView>
        <Animated.View style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: '#2AB759',
          height: headerHeight,
          overflow: 'hidden',
        }}
        >
          <View style={{
            marginTop: 28,
            height: 32,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          >
            <Animated.Image
              source={{ uri: 'https://t.scdn.co/media/derived/pop-274x274_447148649685019f5e2a03a39e78ba52_0_0_274_274.jpg' }}
              style={[
                {
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  width: null,
                  height: headerHeight,
                  resizeMode: 'cover',
                },
                {opacity: imageOpacity, transform: [{translateY: imageTranslate}]},
              ]}
            />
            <Text style={{
              color: 'white',
              fontSize: 18,
            }}
            >
              Title
            </Text>
          </View>
        </Animated.View>

      </View >
    );
  }
}

export default ArtistScreen;
