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
              <Tab.Screen name="Home" component={HomeScreen} />
              <Tab.Screen name="Review" component={ReviewScreen} />
              <Tab.Screen name="Event" component={EventScreen} />
              <Tab.Screen name="Settings" component={MyinfoScreen} />
            </Tab.Navigator>
        );
    }
}
export default App;