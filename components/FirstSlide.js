import React, {Component, useState} from 'react';
import { TouchableHighlight, StyleSheet, View, Text, Image } from 'react-native';
import Swiper from "react-native-web-swiper";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

import BottomTabs from "./BottomTabs";
import KakaoMaps from "./KakaoMaps";

import {
  KakaoOAuthToken,
  KakaoProfile,
  getProfile as getKakaoProfile,
  login,
  logout,
  unlink,
} from '@react-native-seoul/kakao-login';


const Stack = createStackNavigator();

function Screen(){
     return (
       <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="FisrtSlide" component={FirstSlide} options={{headerShown: false}} />
          <Stack.Screen name="KakaoMaps" component={KakaoMaps} options={{headerShown: false}}/>
          <Stack.Screen name="BottomTabs" component={BottomTabs} options={{headerShown: false}}/>
        </Stack.Navigator>
       </NavigationContainer>
     );
 }


 const signInWithKakao = async () => {
  
  //const [result, setResult] = useState('');
  const token = await login();
  const profile = await getKakaoProfile();
   

 //setResult(JSON.stringify(token));
 //setResult(JSON.stringify(profile));

  console.log(token);
  console.log(profile);
  foo=profile.nickname;
  
};




class FirstSlide extends Component {
  render(){
    return (
      <View style={styles.container}>
        <View style={{flex: 1}}>
          <Swiper index={1}>
            <View style={[styles.slideContainer,styles.slideBackground]}>
              <Text style = {[styles.slideTextTitle]}>{"\n"}{"\n"}처음 오셨군요?</Text>
              <Text style={[styles.slideTextSub]}>{"\n"}{"\n"}지금부터 푸드쉐어링에 대해</Text>
              <Text style ={{fontSize:1.5}}>{"\n"}</Text>
              <Text style={[styles.slideTextSub]}>   간략히 설명해 드릴게요{"\n"}</Text>
            </View>
            <View style={[styles.slideContainer,styles.slideBackground]}>
              <View style={[styles.slideContents]}>
              <Text>{"\n"}{"\n"}{"\n"}{"\n"}</Text> 
              <Text style={[styles.slideTextSub]}>              푸드쉐어링이란?</Text>
                <Text style = {[styles.slideTextTitle]}>{"\n"}" 남은 음식이나 식재료를</Text>
                <Text style ={{fontSize:2}}>{"\n"}</Text>
                <Text style = {[styles.slideTextTitle]}>내 주변 이웃과 공유하는 </Text>
                <Text style ={{fontSize:2}}>{"\n"}</Text>
                <Text style = {[styles.slideTextTitle]}>       일종의 환경운동 "{"\n"} </Text>
                <Text style ={{fontSize:28}}>{"\n"}</Text>
          
              </View>
              
            </View>
            <View style={[styles.slideContainer,styles.slideBackground]}>
              <Text>{"\n"}{"\n"}{"\n"}{"\n"}</Text>
              <Text style = {[styles.slideTextTitle]}>{"\n"}{"\n"}" 당신 손안의 푸드쉐어링 </Text>
              <Text style = {[styles.slideTextTitle]}>   :: LOCAL SHARING "{"\n"}</Text>
              <Text style ={{fontSize:2}}>{"\n"}</Text>
              <Text style={[styles.slideTextSub]}> 여러분도 손쉽게 </Text>
              <Text style ={{fontSize:2}}>{"\n"}</Text>
              <Text style={[styles.slideTextSub]}>푸드쉐어링에 참여할 수 있도록</Text>
              <Text style ={{fontSize:2}}>{"\n"}</Text>
              <Text style={[styles.slideTextSub]}>  저희가 도와드릴게요 !{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}</Text>
            </View>
            <View style={[styles.slideContainer,styles.slideBackground]}>
              <View style={[styles.slideText]}>
                <Text>{"\n"}</Text>
                <Text style={[styles.slideTextTitle]}>{"\n"}{"\n"}{"\n"}{"\n"}          지금 바로{"\n"}      시작해보세요 !{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}</Text>
                <TouchableHighlight onPress={() => {  signInWithKakao(), this.props.navigation.navigate("KakaoMaps")}}>
                        <View>
                            <Image source={require('../image/kakao_login_medium_wide.png')}/>
                        </View>
                    </TouchableHighlight>
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
    fontFamily: 'NanumSquare_acEB',
    color : "white",
    fontSize : 35,
  },
  slideTextSub :{
    fontFamily: 'NanumSquareEB',
    color : "white",
    fontSize : 24,
  },
  slideContents : {
    marginLeft : 15,
    marginRight : 15
  }
});
export default Screen;