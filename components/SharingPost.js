import React, {Component, useState, useEffect} from 'react';
import { TouchableHighlight, ScrollView, StyleSheet, View, Text, Image} from 'react-native';
import Swiper from "react-native-web-swiper";
import ImageView from "./Posts/ImageView";
import Content from "./Posts/Content";
import SharingButton from "./Posts/SharingButton";
import Info from "./Posts/Info";
import Promise from "./Posts/Promise";
import Comment from "./Posts/Comment";

function SharingPost({...props}){
    const [allCheck, setCheck] = useState(false);
    const post_ID = useState(props.route.params.post_ID) /// FlatListDemo 에서 받아온 post_ID

    useEffect(() => {
        console.log("sharing" + allCheck);
    }, [allCheck])


    return (
        <View style={style.container}>
            <View style={style.imageArea}>
                <ImageView style= {style.container} post_ID={post_ID}/>
            </View>
            <View style={style.scrollView}>
                <ScrollView>
                    <Info style={style.InfoArea} post_ID={post_ID}/>
                    <Content style={style.contentArea} post_ID={post_ID}/>
                    <Promise allCheck = {allCheck} setCheck = {setCheck}/>
                    {/* <Comment/> */}
                </ScrollView>
            </View>
            <View style ={{flex:0.5}}>
                <SharingButton allCheck = {allCheck} buttonName = {"쉐어링 신청하기"} style={{flex:1}}/>
            </View>
        </View>
    );
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
        backgroundColor:"white",
    },
    imageArea:{
        flex : 2,
    },
    contentArea : {
        flex : 2,
    },
});
export default SharingPost;