import React, { Component } from 'react'
import { Text, View, Image, Dimensions } from 'react-native'
import Swiper from "react-native-web-swiper";
import SharingButton from './Posts/SharingButton'

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
    flex: 1,
    resizeMode : "stretch",
    width : "100%",
    height : "100%",
    flex: 1
  },
  contentArea :{

    flex : 2
  }
}

export default function EventTab() {
    return (
      <View style={styles.container}>
        <Swiper
          loop
          showsButtons = {false}
          style={styles.wrapper}
          >
          <View
            style={styles.slide}>
            <Image style={styles.imageArea} source={require('../image/이벤트1.png')}/>
          </View>
          <View
            style={styles.slide}>
            <Image style={styles.imageArea} source={require('../image/이벤트2.png')}/>
          </View>
          <View
            style={styles.slide}>
            <Image style={styles.imageArea} source={require('../image/이벤트3.png')}/>
          </View>
        </Swiper>
        <View style ={{flex:0.087}}>
            <SharingButton allcheck={true} buttonName = {"이벤트 참여하기"} style={{flex:1}}/>
        </View>
      </View>
    )
}
