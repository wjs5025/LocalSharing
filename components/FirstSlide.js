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
            <View style={[styles.slideContainer,styles.slideBackground]}>
              <Text style = {[styles.slideTextTitle]}>처음오셨군요?</Text>
            </View>
            <View style={[styles.slideContainer,styles.slideBackground]}>
            <Text style={[styles.slideTextSub]}>지금부터 푸드쉐어링에 대해 간단히 설명해 드릴게요!</Text>
              <Text style={[styles.slideTextSub]}>푸드쉐어링이란?</Text>
              <Text style = {[styles.slideTextTitle]}>{"\n"}푸드쉐어링이란, {"\n"}먹을 수 있지만 먹지 않는 음식이나 식재료를 주변과 나누는 환경운동"{"\n"}</Text>
              <Text style={[styles.slideTextSub]}>을 뜻합니다.</Text>
            </View>
            <View style={[styles.slideContainer,styles.slideBackground]}>
              <Text style = {[styles.slideTextTitle]}>{"\n"}"당신 손안의 푸드쉐어링, LOCAL SHARING"{"\n"}</Text>
              <Text style={[styles.slideTextSub]}>이러한 푸드쉐어링을 지역내에서 손쉽게 진행할 수 있도록 도와드릴게요 !</Text>
            </View>
            <View style={[styles.slideContainer,styles.slideBackground]}>
              <View style={[styles.slideText]}>
                <Text style={[styles.slideTextTitle]}>지금 바로{"\n"}시작해보세요 !{"\n"}</Text>
                <Button title="카카오로 로그인하기" onPress={() => { this.props.navigation.navigate("Second")}}></Button>
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
  slideBackground: {
    backgroundColor: "#CF2A27"
  },
  slideTextTitle:{
    color : "white",
    fontWeight : "bold",
    fontSize : 35,
  },
  slideTextSub :{
    color : "white",
  }
});
export default Screen;