import React, {Component, useState} from 'react';
import { TouchableHighlight, StyleSheet, View, Text, Image } from 'react-native';
import Swiper from "react-native-web-swiper";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import firestore from '@react-native-firebase/firestore';
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

  console.log("User_DB_Sign");
  console.log("------------- "+login_user);

  login_user=profile.id;
  
  console.log("User="+login_user);
                                                                        //   DB에 해당 유저가 존재하면 Exist = 1로 변경
  Exist=0;
  firestore().collection('User').where('User_ID', '==', login_user).get().then(Doc => {
    Doc.forEach(Doc => {
      Exist=1;
    }
    );
  });

  global.User_Cnt=0;

  firestore().collection("User").doc("PK").get().then((doc) => {
      console.log("D=",doc.data().Cnt);
      User_Cnt = doc.data().Cnt;
  }).catch((error)=>{
    console.log("Error");
  });


  
  console.log("Exist="+Exist);

  login_user=profile;

  
};




class FirstSlide extends Component {


  render(){
    return (
      <View style={styles.container}>
        <View style={{flex: 1}}>
          <Swiper style ={{flex:1}}>
          <View style={[styles.slideContainer,styles.slideBackground]}>
                <View style ={styles.imageSection}>
                  <Image style={styles.img} source={require("../image/hello.gif")}/>
                </View>
                <View style ={styles.TextSection}>
                  <Text style={[styles.slideTextTitle]}>처음오셨군요 ?</Text>
                  <Text style={[styles.slideTextSub]}>지금부터 푸드쉐어링에 대해</Text>
                  <Text style={[styles.slideTextSub]}>간략히 소개할게요 !</Text>
                </View>
            </View>
            <View style={[styles.slideContainer,styles.slideBackground]}>
                <View style ={styles.imageSection}>
                  <Image style={styles.img} source={require("../image/햄버거.gif")}/>
                </View>
                <View style ={styles.TextSection}>
                  <Text style={[styles.slideTextTitle]}>푸드쉐어링이란 ?</Text>
                  <Text style={[styles.slideTextSub]}>남은 음식이나 식재료를 내 주변</Text>
                  <Text style={[styles.slideTextSub]}>이웃과 나누는 일종의 환경운동이에요</Text>
                </View>
            </View>
            <View style={[styles.slideContainer,styles.slideBackground]}>
                <View style ={styles.imageSection}>
                  <Image style={styles.img} source={require("../image/localsharing.png")}/>
                </View>
                <View style ={styles.TextSection}>
                  <Text style={[styles.slideTextTitle]}>Local Sharing</Text>
                  <Text style={[styles.slideTextSub]}>여러분도 손쉽게 푸드쉐어링에</Text>
                  <Text style={[styles.slideTextSub]}>참여할 수 있게 도와드릴게요</Text>
                </View>
            </View>
            <View style={[styles.slideContainer,styles.slideBackground]}>
              <View style={[styles.imageSection]}>
                <Text style={[styles.slideTextTitle2, styles.four]}>지금 바로</Text>
                <Text style={[styles.slideTextTitle2]}>시작해보세요 !</Text>
                </View>
                <View style ={styles.TextSection}>
                <TouchableHighlight style = {{marginTop:125}} onPress={() => {  signInWithKakao(), this.props.navigation.navigate("KakaoMaps");}}>
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
  imageSection : {
    flex:1.5,
    alignItems: "center",
  },
  TextSection :{
    flex:1,
    alignItems : "center"
  },
  img : {
    borderWidth :100,
    marginTop:150,
    flex:1,
    resizeMode : "stretch",
    width : 280,
  },
  container: {
    flex: 1,
  }, 
  slideContainer: {
    flex: 1,
    alignItems: "center",
  
  },
  slideBackground: {
    backgroundColor: "white"
  },
  slideTextTitle:{
    fontFamily: 'NanumSquare_acEB',
    color : "#CF2A27",
    fontSize : 30,
    marginTop : 30,
    marginBottom:35,
  },
  slideTextTitle2:{
    fontFamily: 'NanumSquare_acEB',
    color : "#CF2A27",
    fontSize : 30,
  },
  slideTextSub :{
    fontFamily: 'NanumSquareEB',
    color : "black",
    fontSize : 21,
  },
  slideContents : {
    flex :1,
  },
  four:{
    marginTop : 320
  }
});
export default Screen;