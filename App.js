import React, {Component} from 'react';
import { ScrollView, FlatList, Platform, StyleSheet, View, Text, Button } from 'react-native';
import Swiper from "react-native-web-swiper";
// 컴포넌트 임포트
import FirstSlide from "./components/FirstSlide";
import Main from "./components/Main";
import FlatListDemo from "./components/FlatListDemo";

const arr = [];
for (let i = 0; i < 100; i++) {
  arr.push(i);
}

class App extends Component {
  render() {
    return (
      <FlatList
        keyExtractor={item => item.toString()}
        data={arr}
        renderItem={({item}) => <FlatListDemo num={item} />}
      />
    );
  }
}
export default App;