<<<<<<< HEAD
import React, { Component } from 'react'
import { Text, View, Image, Dimensions } from 'react-native'
import Swiper from "react-native-web-swiper";
import SharingButton from './Posts/SharingButton'
=======
import React, {Component, useState} from 'react';
import { TouchableHighlight, StyleSheet, View, Text, Image,  Dimensions ,style } from 'react-native';
import Swiper from "react-native-web-swiper";

export default class EventTab extends Component{
    render() {
      console.log(this.state);
      return (
        <View style={styles.container}>
        <Swiper
          style={styles.wrapper}
          onMomentumScrollEnd={(e, state, context) =>
            console.log('index:', state.index)
          }>
          <View
            style={styles.slide}>
            <Image style={styles.imageArea} source={require('../image/치킨.jpg')}/>
          </View>
          <View
            style={styles.slide}>
            <Image style={styles.imageArea} source={require('../image/김치.jpg')}/>
          </View>
          <View
            style={styles.slide}>
            <Image style={styles.imageArea} source={require('../image/라면.jpg')}/>
          </View>
        </Swiper>
        <TouchableHighlight underlayColor = {'none'} onPress={()=>{alert("이벤트 참가!");}}>
            <View style={styles.Event}>
                <Text style={styles.Event} > | 이벤트 참가 하기 |</Text>
            </View>
        </TouchableHighlight>
      </View>
    );
    }
}

>>>>>>> cc9707fd88a9aa11d43250224c1ecc900253dbae
const { width } = Dimensions.get('window')

const styles = {
  container: {
    flex: 1,
    borderWidth : 1,
  },
<<<<<<< HEAD
  wrapper: {
    flex:1,

  },
=======
  wrapper: {},
>>>>>>> cc9707fd88a9aa11d43250224c1ecc900253dbae
  slide: {
    flex: 1,
    justifyContent: 'center',
  },
  imageArea: {
<<<<<<< HEAD
    flex: 1,
    resizeMode : "stretch",
    width : "100%",
    height : "100%"


=======
    width,
    flex: 1
>>>>>>> cc9707fd88a9aa11d43250224c1ecc900253dbae
  },
  contentArea :{
    width,
    flex : 2
<<<<<<< HEAD
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
=======
  },
  Event:{
    flex:1,
    fontFamily: 'NanumSquare_acEB',
    fontSize:30,
    padding:16,
    //paddingTop:10,
    //paddingBottom:10,
    //flexDirection: 'column',
    alignItems: 'center',        
    //justifyContent: 'center',
    backgroundColor: "#CF2A27"
 
  }
}
>>>>>>> cc9707fd88a9aa11d43250224c1ecc900253dbae
