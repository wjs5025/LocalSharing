import React, {Component} from 'react';
import { Platform, StyleSheet, View, Text, Button } from 'react-native';
import Swiper from "react-native-web-swiper";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

import BottomTabs from "./BottomTabs";
import Kakao from "./Kakao";

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
   }
 }

function SecondScreen() {
    return (
      <Kakao/>
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
            <Text style={[styles.slideTextSub]}>지금부터 푸드쉐어링에 대해 {"\n"}간단히 설명해 드릴게요.</Text>
              <View style={[styles.slideContents]}>
                <Text style = {[styles.slideTextTitle]}>{"\n"}"    푸드쉐어링은, 먹지 않는 식재료나 남은 음식을 주변과 {"\n"}        공유하는 환경운동      "{"\n"}</Text>
                <Text style={[styles.slideTextSub]}>                            이에요 !</Text>
              </View>
              
            </View>
            <View style={[styles.slideContainer,styles.slideBackground]}>
              <Text style = {[styles.slideTextTitle]}>{"\n"}" 당신 손안의 푸드쉐어링,{"\n"}      LOCAL SHARING "{"\n"}{"\n"}</Text>
              <Text style={[styles.slideTextSub]}>이러한 푸드쉐어링을 {"\n"}지역내에서 손쉽게 진행할 수 있도록{"\n"}도와드릴게요 !</Text>
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
    fontSize : 30,
  },
  slideTextSub :{
    color : "white",
    fontSize : 20,
  },
  slideContents : {
    marginLeft : 15,
    marginRight : 15
  }
});
export default Screen;