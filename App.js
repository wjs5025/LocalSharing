import React, {Component} from 'react';
import { ScrollView, FlatList, Platform, StyleSheet, View, Text, Button } from 'react-native';
import Swiper from "react-native-web-swiper";
// 컴포넌트 임포트
import FirstSlide from "./components/FirstSlide";
import Main from "./components/Main";
import FlatListDemo from "./components/FlatListDemo";
import BottomNavigator from "./components/BottomNavigator";


/* 재현쓰 스크롤뷰
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
*/
class App extends Component {
  render() {
    return (
      <FirstSlide/>
//     <BottomNavigator/>
    );
  }
}
export default App;