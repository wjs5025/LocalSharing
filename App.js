<<<<<<< Updated upstream
import React from 'react';
import { Text, View } from 'react-native';

const YourApp = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>
        ÎªêÌÇπ Î¶¨Ïï°Ìä∏ 
      </Text>
    </View>
  );
=======
import React, {Component} from 'react';
import { Platform, StyleSheet, View, Text, Button } from 'react-native';
import Swiper from "react-native-web-swiper";
// Ïª¥Ìè¨?Ñå?ä∏ ?ûÑ?è¨?ä∏
import FirstSlide from "./components/FirstSlide";
import BottomNavigator from "./components/BottomNavigator";
import Main from "./components/Main";


class App extends Component {
  render() {
    return (
      <BottomNavigator/>
    );
  }
>>>>>>> Stashed changes
}

export default YourApp;