import React, {Component} from 'react';
import { ScrollView, FlatList, Platform, StyleSheet, View, Text, Button, TouchableOpacity, TouchableWithoutFeedback, Image } from 'react-native';

import Swiper from "react-native-web-swiper";
// 컴포넌트 임포트
import FirstSlide from "./components/FirstSlide";
import BottomTabs from "./components/BottomTabs";

class App extends Component {
  render() {
    return (
        <FirstSlide/>
    );
  }
}
export default App;