import React, {Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

// 컴포넌트 임포트
import FirstSlide from "./components/FirstSlide";
import BottomTabs from "./components/BottomTabs";

const Stack = createStackNavigator();
class App extends Component {
  render() {
    return (
      // <NavigationContainer>
      //     <Stack.Navigator>
      //         <Stack.Screen name="Main" component={BottomTabs} options={{headerShown: false}}/>
      //     </Stack.Navigator>
      // </NavigationContainer>
      <FirstSlide/>
    );
  }
}

export default App;