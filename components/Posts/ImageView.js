import React, { Component } from 'react'
import { Text, View, Image, Dimensions } from 'react-native'
import Swiper from "react-native-web-swiper";

const { width } = Dimensions.get('window')

const styles = {
  container: {
    flex: 1,
    borderWidth : 1,
  },
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
  },
  imageArea: {
    width,
    flex: 1
  },
  contentArea :{
    width,
    flex : 2
  }
}

export default class extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Swiper
          style={styles.wrapper}
          onMomentumScrollEnd={(e, state, context) =>
            console.log('index:', state.index)
          }>
          <View
            style={styles.slide}>
            <Image style={styles.imageArea} source={require('../../image/치킨.jpg')}/>
          </View>
          <View
            style={styles.slide}>
            <Image style={styles.imageArea} source={require('../../image/김치.jpg')}/>
          </View>
          <View
            style={styles.slide}>
            <Image style={styles.imageArea} source={require('../../image/라면.jpg')}/>
          </View>
        </Swiper>
      </View>
    )
  }
}