import React, {Component, useState} from 'react';
import { TouchableHighlight, ScrollView, StyleSheet, View, Text, Image } from 'react-native';
import Swiper from "react-native-web-swiper";
import ImageView from "./Posts/ImageView";
import Content from "./Posts/Content";
import SharingButton from "./Posts/SharingButton";
import Info from "./Posts/Info";
import Promise from "./Posts/Promise";
import Comment from "./Posts/Comment";

class SharingPost extends Component {
  render(){
    return (
        <View style={style.container}>
            <View style={style.imageArea}>
                <ImageView style= {style.container}/>
            </View>
            <View style={style.scrollView}>
                <ScrollView>
                    <Info style={style.InfoArea}/>
                    <Content style={style.contentArea}/>
                    <Promise/>
                    {/* <Comment/> */}
                </ScrollView>
            </View>
            <View style ={{flex:0.5}}>
                <SharingButton style={{flex:1}}/>
            </View>
        </View>
    );
  }
}

const style = StyleSheet.create({
    InfoArea: {
        flex:1,
    },
    scrollView : {
        flex:3.5,
    },
    SharingButton : {
        flex:1,
    },
    container : {
        flex:1,
    },
    imageArea:{
        flex : 2,
    },
    contentArea : {
        flex : 2,
        backgroundColor : 'pink'
    },
});
export default SharingPost;