import React, {Component} from 'react';
import { Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// 컴포넌트 임포트
import FlatListDemo from "./FlatListDemo";

function HomeScreen() {
  return (
        <FlatListDemo/>
  );
}

function ReviewScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>ReviewScreen!</Text>
    </View>
  );
}

function EventScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>EventScreen!</Text>
      </View>
    );
  }

function MyinfoScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>MyinfoScreen!</Text>
      </View>
    );
  }
  
const Tab = createBottomTabNavigator();

class App extends Component {
    render(){
        return(
            <Tab.Navigator>
              <Tab.Screen name="홈" component={HomeScreen} 
                options={{tabBarLabel : '홈', tabBarIcon:()=><Image source={require('../image/home.png')} style = {{width:23, height:23}}/>}}/>
              <Tab.Screen name="리뷰" component={ReviewScreen} options={{tabBarLabel : '리뷰', tabBarIcon:()=><Image source={require('../image/edit.png')} style = {{width:23, height:23}}/>}}/>
              <Tab.Screen name="이벤트" component={EventScreen} options={{tabBarLabel : '이벤트', tabBarIcon:()=><Image source={require('../image/star.png')} style = {{width:23, height:23}}/>}}/>
              <Tab.Screen name="내 정보" component={MyinfoScreen} options={{tabBarLabel : '내 정보', tabBarIcon:()=><Image source={require('../image/user.png')} style = {{width:23, height:23}}/>}}/>
            </Tab.Navigator>
        );
    }
}
export default App;