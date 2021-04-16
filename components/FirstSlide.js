import React, {Component} from 'react';
import { Platform, StyleSheet, View, Text, Button } from 'react-native';
import Swiper from "react-native-web-swiper";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

import BottomTabs from "./BottomTabs";

const Stack = createStackNavigator();

class Screen extends Component {
  render() {
     return (
       <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Fisrt" component={FirstSlide} options={{headerShown: false}} />
          <Stack.Screen name="Second" component={SecondScreen} options={{headerShown: false}}/>
        </Stack.Navigator>
       </NavigationContainer>
     );
   }G
 }

function SecondScreen() {
    return (
      <BottomTabs/>
    );
}

class FirstSlide extends Component {
  render(){
    return (
      <View style={styles.container}>
        <View style={{ flex: 1 }}>
          <Swiper
            index={1}
            >
            <View style={[styles.slideContainer,styles.slide1]}>
              <Text style = {[styles.slideTextTitle]}>처음오셨군요?</Text>
            </View>
            <View style={[styles.slideContainer,styles.slide2]}>
              <Text>지금부터 푸드쉐어링에 대해 간단히 설명해 드릴게요!</Text>
              <Text>푸드쉐어링이란?</Text>
              <Text style = {[styles.slideTextTitle]}>{"\n"}"먹을 수 있지만 먹지 않는 음식을 나누어서{"\n"} 음식물쓰레기를 줄이기위한 취지의 환경운동"{"\n"}</Text>
              <Text>을 뜻합니다.</Text>
            </View>
            <View style={[styles.slideContainer,styles.slide3]}>
              <Text style={[styles.slideTextSub]}>그렇다면</Text>
              <Text> "로컬쉐어링"이란?</Text>
              <Text>{"\n"}"이러한 푸드쉐어링을 내 주변이웃과{"\n"} 손쉽게 진행할 수 있도록 도와주는 앱"{"\n"}</Text>
              <Text>이에요 !</Text>
            </View>
            <View style={[styles.slideContainer,styles.slide4]}>
              <View style={[styles.slideText]}>
                <Text style={[styles.slideTextTitle]}>지금 바로{"\n"} 시작해보세요 !</Text>
                <Button title="Hello" onPress={() => { this.props.navigation.navigate("Second")}}></Button>
              </View>
            </View>
          </Swiper>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }, 
  slideContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  slide1: {
    backgroundColor: "rgba(20,20,200,0.3)"
  },
  slide2: {
    backgroundColor: "rgba(20,200,20,0.3)"
  },
  slide3: {
    backgroundColor: "rgba(200,20,20,0.3)"
  },
  slide4: {
    backgroundColor: "#903372",
  },
  slideTextTitle:{
    color : "blue",
    fontSize : 30,
  },
  slideTextSub :{
    color : "red",
  }
});
export default Screen;