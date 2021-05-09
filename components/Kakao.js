import React, {Component, useState} from 'react';
import { Platform, StyleSheet, View, Text, Button } from 'react-native';
import Swiper from "react-native-web-swiper";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { withNavigation } from 'react-navigation';
import 'react-native-gesture-handler';
import {
  KakaoOAuthToken,
  KakaoProfile,
  getProfile as getKakaoProfile,
  login,
  logout,
  unlink,
} from '@react-native-seoul/kakao-login';

import BottomTabs from "./BottomTabs";


const Stack = createStackNavigator();

class Screen extends Component {
  render() {
     return (
        <Stack.Navigator>
          <Stack.Screen name="kakao" component={Intro()} options={{headerShown: false}}/>
          <Stack.Screen name="Home" component={BottomTabs} options={{headerShown: false}}/>
        </Stack.Navigator>
     );
   }
 }


const withScreen = (Component) => {
    return (props) => {
      return (
        <View
          style={
            Platform.OS === 'web'
              ? {
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '100vh',
                  // height: Dimensions.get('window').height - headerHeight,
                }
              : {
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }
          }>
          <Component {...props} />
        </View>
      );
    };
};



function Intro() {
    const [result, setResult] = useState('');
    const signInWithKakao = async () => {
      console.log('asd');
      const token = await login();
      console.log('qwe');
      setResult(JSON.stringify(token));
      console.log('zxxc');
      console.log(result);
    };
    return (
        <View>
           <Button
            onPress={() => signInWithKakao()}
            title="카카오 로그인"
          ></Button>


          <View style={{marginTop: 40}} />
        
         <View>
          <Text> ------------------------ {"\n"}</Text>
          <Button title="메인페이지로" onPress={() => { this.props.navigation.navigate('Home') } }></Button>
          

        </View>

        </View>
        );



    
}

export default Screen;