import React, {Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

// 컴포넌트 임포트
import SplashScreen from 'react-native-splash-screen';
import FirstSlide from "./components/FirstSlide";


const Stack = createStackNavigator();
class App extends Component {
  componentDidMount() { 
    SplashScreen.hide(); //로딩 화면
  }
  render() {
    return (
      <FirstSlide/>
      );
  }
}

export default App;
