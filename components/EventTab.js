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
