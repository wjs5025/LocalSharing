import React, {Component} from 'react';
import { Platform, StyleSheet, View, Text, Button } from 'react-native';
import Swiper from "react-native-web-swiper";
// 컴포넌트 임포트
import FirstSlide from "./components/FirstSlide";
import Main from "./components/Main";


class App extends Component {
  render() {
    return (
      <FirstSlide/>
    );
  }
}
export default App;