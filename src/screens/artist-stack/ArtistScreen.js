import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  Animated,
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
      outputRange: [1, 1, 0.5],
      extrapolate: 'clamp',
    });
    const imageTranslate = this.state.scrollY.interpolate({
      inputRange: [-170, 0],
      outputRange: [50, 0],
      extrapolate: 'clamp',
    });
    const headerHeight = this.state.scrollY.interpolate({
      inputRange: [-170, 0, HEADER_SCROLL_DISTANCE],
      outputRange: [HEADER_MAX_HEIGHT, HEADER_DEFAULT_HEIGHT, HEADER_MIN_HEIGHT],
      extrapolate: 'clamp',
    });
    const imageScale = this.state.scrollY.interpolate({
      inputRange: [-170, 0, 170],
      outputRange: [1.85, 1, 1],
      extrapolate: 'clamp',
    });
    const titleTranslateY = this.state.scrollY.interpolate({
      inputRange: [-170, 0, HEADER_SCROLL_DISTANCE],
      outputRange: [170 / 2, 0, 25 - 70],
      extrapolate: 'clamp',
    });
    const titleScale = this.state.scrollY.interpolate({
      inputRange: [-170, 0, HEADER_SCROLL_DISTANCE],
      outputRange: [1.5, 1, 0.8],
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
            zIndex: 1,
            // opacity: 0.2,
          }}
          scrollEventThrottle={10}
          onScroll={Animated.event(
            [{
              nativeEvent: {
                contentOffset: {
                  y: this.state.scrollY,
                },
              },
            }],
            {
              listener: () => {
                console.log(this.state.scrollY._value);
              },
              // useNativeDriver: true,
            },

          )}
        >
          {this.renderList()}
        </ScrollView>
        <Animated.Image
          source={{ uri: 'https://i.scdn.co/image/f1ff80245d4266f9eedc28c8a04b86ca9afdf776' }}
          style={[
            {
              zIndex: 0,
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              width: 360,
              height: HEADER_DEFAULT_HEIGHT,
              resizeMode: 'cover',
              opacity: imageOpacity,
              transform: [
                { scale: imageScale },
                { translateY: imageTranslate },
              ],
            },
          ]}
        />
        <Animated.View style={{
          zIndex: 2,
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: '#2AB759',
          height: headerHeight,
          overflow: 'hidden',
          opacity: 0.5,
          transform: [
            // { scale: imageScale },
          ],
        }}
        >

          <Animated.View style={{
            marginTop: 70,
            height: 32,
            alignItems: 'center',
            justifyContent: 'center',
            // backgroundColor: 'red',
            transform: [
              { translateY: titleTranslateY },
              { scale: titleScale },
            ],
          }}
          >
            <Text style={{
              color: 'white',
              fontSize: 20,
              fontWeight: '900',
            }}
            >
              POP
            </Text>
          </Animated.View>
        </Animated.View>

      </View >
    );
  }
}

export default ArtistScreen;
