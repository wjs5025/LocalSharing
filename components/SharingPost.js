import React, {Component, useState, useEffect} from 'react';
import { TouchableHighlight, Button, ScrollView, StyleSheet, View, Text, Image} from 'react-native';
import Swiper from "react-native-web-swiper";
import ImageView from "./Posts/ImageView";
import Content from "./Posts/Content";
import SharingButton2 from "./Posts/SharingButton2";
import Info from "./Posts/Info";
import Promise from "./Posts/Promise";
import Comment from "./Posts/Comment";
import firestore, { firebase } from '@react-native-firebase/firestore';
import { set } from 'react-native-reanimated';




function SharingPost({...props}){
    const [allCheck, setCheck] = useState(false);
    const post_ID = useState(props.route.params.post_ID) /// FlatListDemo 에서 받아온 post_ID
    const [data, setData] = useState([]);
    const [data2, setData2] = useState([]);
    const [loginFlag, setFlag] = useState(false);
    const [buttonStyle, setButton] = useState("쉐어링 신청하기");
    const [disabled, setdisabled] = useState(false);


    // post_ID 이용해서 해당 포스트의 data.json 불러오기
    useEffect(()=>{
        const db = firestore().collection("sharing-posts").where('post_ID', 'in', post_ID);
        db.get().then((query) =>{
            query.forEach((doc)=>{
                setData(doc.data());
                setData2(doc.data().participate);
        })})
     },[])

     // 신청버튼 클릭시 이벤트(Max>now => now++ / MAX<now => 경고)
    const sharingSubmit = () =>{
        if (data.sharing_now < data.sharing_MAX) {
            firestore().collection("sharing-posts").doc('Post' + props.route.params.post_ID).update({
                sharing_now : ++data.sharing_now,
                participate : firebase.firestore.FieldValue.arrayUnion(login_user.id)
            });
                props.navigation.pop();
                setFlag(false);
            } else {
               alert("신청가능 인원이 초과되었습니다.")
            }
    }

    // 약관 동의 두개다 체크시 콘솔
    useEffect(() => {
        console.log("sharing" + allCheck);
        console.log("array : ", data2);
        console.log(loginFlag);
        console.log(typeof(data2));
        console.log(data2);
        console.log("참트루 : ", data2.indexOf(login_user.id) == -1);
    }, [allCheck])

    useEffect(() => {
        if (data2.indexOf(login_user.id) != -1){
            setButton("이미 신청한 쉐어링");
            setdisabled(true);
            setFlag(true);
        }
    })

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
                <SharingButton2 allCheck = {allCheck} disabled= {disabled} buttonName = {buttonStyle} post_ID={post_ID} onPress={sharingSubmit} style={{flex:1}}/>
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