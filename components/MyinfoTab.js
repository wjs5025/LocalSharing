import React, {Component, useState} from 'react';
import { TouchableHighlight, StyleSheet, View, Text, Image } from 'react-native';

export default class MyinfoTab extends Component{
    render() {
        console.log(this.state);
        return (
          <View>
              <Text>| 내정보 탭 |</Text>   
          </View>
      );
      }
  }