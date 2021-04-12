import React, {Component} from 'react';
import { ScrollView, FlatList, Platform, StyleSheet, View, Text, Button, TouchableOpacity, TouchableWithoutFeedback, Image } from 'react-native';

import Swiper from "react-native-web-swiper";
// 컴포넌트 임포트
import FirstSlide from "./components/FirstSlide";
import Main from "./components/Main";
import FlatListDemo from "./components/FlatListDemo";
import BottomNavigator from "./components/BottomNavigator";

class App extends Component {
  render() {
    return (
//      <FirstSlide/>
        //<BottomNavigator/>
        <FlatListDemo/>
    );
  }
}
export default App;