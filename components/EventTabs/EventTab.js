import React, { Component } from 'react'
import { Text, View, Image, Dimensions } from 'react-native'
import Swiper from "react-native-web-swiper";
import SharingButton from '../Posts/SharingButton'

const styles = {
  container: {
    backgrounColor:"white",
    flex: 1,
    borderWidth : 1,
    borderColor : "#BDBDBD"
  },
  wrapper: {
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
  },
  imageArea: {
    flex: 1,
    resizeMode : "stretch",
    width : "100%",
    height : "100%",
  },
  contentArea :{
    flex : 2
  }
}

export default function EventTab() {
    return (
      <View style={styles.container}>
        <View style={{backgroundColor:'#CF2A27',borderRadius : 5}}>
        <Text style={{alignSelf:'center', color:'white', fontFamily: 'NanumSquare_acB', fontSize:17, padding:5}}>- 현재 진행 중인 이벤트 -</Text>
        </View>
        <View style={{flex:1, borderWidth :1,borderColor :"gray"}}>
        <Swiper
          loop
          showsButtons = {false}
          style={styles.wrapper}
          >
          <View
            style={styles.slide}>
            <Image style={styles.imageArea} source={require('../../image/이벤트1.png')}/>
          </View>
          <View
            style={styles.slide}>
            <Image style={styles.imageArea} source={require('../../image/이벤트2.png')}/>
          </View>
          <View
            style={styles.slide}>
            <Image style={styles.imageArea} source={require('../../image/이벤트3.png')}/>
          </View>
        </Swiper>
        </View>
      </View>
    )
}
