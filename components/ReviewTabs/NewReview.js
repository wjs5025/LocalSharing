import React, {Component, useEffect, useState} from 'react';
import {TouchableHighlight , View, Button ,ScrollView, Text, StyleSheet, TextInput, TouchableOpacity, TouchableWithoutFeedback, Image} from 'react-native';
import SharingButton from "../Posts/SharingButton";
import ImageView from "../Posts/ImageView";
import Promise from "../Posts/Promise";
import Info from "../Posts/Info";
import Comment from "../Posts/Comment";
import Content from "../Posts/Content";
import  {launchCamera ,  launchImageLibrary }  from  'react-native-image-picker' ;
import firestore from '@react-native-firebase/firestore';

function NewReview({...props}) {

    // 쉐어링 동의 확인 변수 선언
    const [allCheck, setCheck] = useState(false);

    // 제목, 내용, 이미지 변수 선언
    const [TitleValue, onChangeTitle] = useState('');
    const [InnerValue, onChangeInner] = useState('');
    
    // TextInput 포커즈 관련 변수 선언
    const [Titlefocus, setTitleFocus] = useState(false);
    const [Innerfocus, setInnerFocus] = useState(false);

    const TitleFocusStyle = Titlefocus ? style.TitleInputFocus : style.TitleInput;
    const InnerFocusStyle = Innerfocus ? style.InnerInputFocus : style.InnerInput;

    const Temp = useState(Number(Now_Review_Post));
    
    // 게시글 등록 버튼 이벤트 함수 (DB에 값 추가하고 이전화면으로)
    const submit = () =>{
        var date = new Date().getDate();
        var month = new Date().getMonth() + 1;
        var year = new Date().getFullYear();
        var Dt = year + '-' + month + '-' + date;  // 2021-05-28

        

        console.log("          login_user="+login_user.id);
        console.log("          Now_Review_Post="+Now_Review_Post);
        console.log("          Review_Cnt="+Review_Cnt);

       
    
        firestore().collection("review-posts").doc('post'+(Review_Cnt+1)).set({
            Received_User : login_user.id, // 따로수정  게시글에 대한 정보를 가져와야함    info.js 처럼 하면된다 post_ID 가지고 user_id 받아오면댐
            User_ID : login_user.id,
            comment : InnerValue,
            date : Dt,
            post_ID : Now_Review_Post, 
            review_ID : Review_Cnt+1,
            title : TitleValue
        });

        firestore().collection('review-posts').doc('PK').update({
            Cnt: Review_Cnt+1, }) .then(() => {console.log('Review updated!');
        });        

        
        // 배열에서 빼는거만 하면 끝

        props.navigation.pop();
    }

    return(

        <View style = {style.container}>
            
            <View style={style.imageArea}>
                <ImageView style= {style.container} post_ID={Temp} />
            </View>
            <View style={style.scrollView}>
                <ScrollView>
                    <Info style={style.InfoArea} post_ID={Temp}/>
                    <Content style={style.contentArea} post_ID={Temp}/>
                    {/* <Comment/> */}
                </ScrollView>
            </View>


            <View style = {style.section}>
                <View style = {{flex :1}}>
                <TextInput 
                    placeholderTextColor = "gray"
                    style = {TitleFocusStyle}
                    placeholder = '제목을 입력하세요 (20자 이내)'
                    multiline={false}
                    onFocus={() => setTitleFocus(true)}
                    onBlur = {() => setTitleFocus(false)}
                    onChangeText={text => onChangeTitle(text)} 
                    maxLength={20}

                    />
                <TextInput 
                    placeholderTextColor = "gray"
                    style = {InnerFocusStyle} 
                    placeholder = '내용을 입력하세요 (100자 이내)'
                    multiline 
                    numberOfLines={3} 
                    onFocus={() => setInnerFocus(true)}
                    onBlur = {() => setInnerFocus(false)}
                    onChangeText={text => onChangeInner(text)}
                    maxLength={100} 
                    textAlignVertical = "top" />
                         <View style ={{flex:0.5}}>
                        <Button title="submit" onPress={()=> {submit()}}/>
                        {/* <SharingButton allCheck = {allCheck} buttonName = {"게시글 등록하기"} style={{flex:1}}/> */}
                     </View>
                </View>
            </View>
            </View>
    )
}

    // 스타일
    const style = StyleSheet.create({
        input : {
    
            marginTop : 0,
        },
        container: {
            flex : 1,
        },
        picture : {
            flex : 2,
            borderRadius : 10,
            borderWidth :3,
            borderColor : "#CF2A27",
            margin : 10,
            alignItems : 'center',
            justifyContent : 'center'
        },
        section : {
            flex :3.5,
        },
        TitleInput : {
            borderWidth : 3,
            fontSize : 20,
            borderRadius : 10,
            margin : 10,
            paddingLeft : 10,
            height : 50,
            fontFamily : 'NanumSquareEB',
            borderColor : "gray"
        },
        InnerInput : {
            borderWidth : 3,
            fontSize : 20,
            borderRadius : 10,
            margin : 10,
            paddingLeft : 10,
            height : 150,
            fontFamily : 'NanumSquareEB',
            borderColor : "gray"
        },
        TitleInputFocus : {
            flex:0.5,
            borderWidth : 3,
            fontSize : 20,
            borderRadius : 10,
            margin : 10,
            paddingLeft : 10,
            height : 50,
            fontFamily : 'NanumSquareEB',
            borderColor : "#CF2A27"
        },
        InnerInputFocus : {
            borderWidth : 3,
            fontSize : 20,
            borderRadius : 10,
            margin : 10,
            paddingLeft : 10,
            height : 185,
            fontFamily : 'NanumSquareEB',
            borderColor : "#CF2A27"
        },
        InfoArea: {
                flex:1,
        },
        scrollView : {
                flex:2.5,
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

export default NewReview;