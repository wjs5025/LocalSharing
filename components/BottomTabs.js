import React, {Component} from 'react';
import { Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// 컴포넌트 임포트
import FlatListDemo from "./FlatListDemo";
import ReviewTap from "./ReviewTap";
import EventTab from './EventTab';
=======
import ReviewTab from "./ReviewTab";
import EventTab from "./EventTab";
import MyinfoTab from "./MyinfoTab";
>>>>>>> cc9707fd88a9aa11d43250224c1ecc900253dbae


function HomeScreen() {
  return (
    <View style={{flex: 1}}>
      <FlatListDemo/>
    </View>
  );
}

function ReviewScreen() {
  return (
    <View style={{flex: 1}}>
      <ReviewTap/>
    </View>
  );
}

function EventScreen() {
    return (
<<<<<<< HEAD
      <View style={{ flex: 1}}>
        <EventTab/>
      </View>
=======
      <View style={{flex: 1}}>
      <EventTab/>
    </View>
>>>>>>> cc9707fd88a9aa11d43250224c1ecc900253dbae
    );
  }

function MyinfoScreen() {
    return (
      <View style={{flex: 1}}>
      <MyinfoTab/>
    </View>
    );
  }
  
const Tab = createBottomTabNavigator();

class App extends Component {
    render(){
        return(
            <Tab.Navigator>
              <Tab.Screen name="홈" component={HomeScreen} options={{tabBarLabel : '홈', tabBarIcon:()=> <Image source={require('../image/home.png')} style = {{width:23, height:23}}/>}}/>
              <Tab.Screen name="리뷰" component={ReviewScreen} options={{tabBarLabel : '리뷰', tabBarIcon:()=> <Image source={require('../image/edit.png')} style = {{width:23, height:23}}/>}}/>
              <Tab.Screen name="이벤트" component={EventScreen} options={{tabBarLabel : '이벤트', tabBarIcon:()=> <Image source={require('../image/star.png')} style = {{width:23, height:23}}/>}}/>
              <Tab.Screen name="내 정보" component={MyinfoScreen} options={{tabBarLabel : '내 정보', tabBarIcon:()=> <Image source={require('../image/user.png')} style = {{width:23, height:23}}/>}}/>
            </Tab.Navigator>
        );
    }
}
export default App;