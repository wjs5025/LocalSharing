import React, {Component} from 'react';
import { Text, View } from 'react-native';
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
              <Tab.Screen name="홈" component={HomeScreen} />
              <Tab.Screen name="리뷰" component={ReviewScreen} />
              <Tab.Screen name="이벤트" component={EventScreen} />
              <Tab.Screen name="내 정보" component={MyinfoScreen} />
            </Tab.Navigator>
        );
    }
}
export default App;