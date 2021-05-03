import React, {Component, useState} from 'react';
import { Platform, StyleSheet, View, Text, Button } from 'react-native';
import Swiper from "react-native-web-swiper";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
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
       <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
        </Stack.Navigator>
       </NavigationContainer>
     );
   }
 }

function HomeScreen() {
    return (
      <BottomTabs/>
    );
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



function Intro(){
    const [result, setResult] = useState('');
  
    const signInWithKakao = async () => {
      
      const token = await login();
      setResult(JSON.stringify(token));
      console.log(result);
      
    
    };

    const signOutWithKakao = async ()=> {
        const message = await logout();
    
        setResult(message);
      };
    
      const getProfile = async () => {
        const profile = await getKakaoProfile();
    
        setResult(JSON.stringify(profile));
        console.log(profile);
      };
    
      const unlinkKakao = async () => {
        const message = await unlink();
    
        setResult(message);
      };


    
    return (
        <View>
           <Button
            onPress={() => signInWithKakao()}
            title="카카오 로그인"
          ></Button>

          <View style={{marginTop: 12}} />
          
          <Button
            onPress={() => getProfile()}
            title="프로필 조회"
          ></Button>

          <View style={{marginTop: 12}} />

          <Button
            onPress={() => unlinkKakao()}
            title="링크 해제"
          ></Button>

          <View style={{marginTop: 12}} />

          <Button
            onPress={() => signOutWithKakao()}
            title="카카오 로그아웃"
          ></Button>

          <View style={{marginTop: 40}} />
        
         <View>
          <Text> ------------------------ {"\n"}</Text>
          <Button title="메인페이지로" onPress={() => { this.props.navigation.navigate('Home') } }></Button>
          

        </View>

        </View>
        );



    
}

export default withScreen(Intro);