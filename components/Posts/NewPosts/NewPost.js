import React, {Component, useEffect, useState} from 'react';
import {TouchableHighlight , View, Button , Text, StyleSheet, TextInput, TouchableOpacity, TouchableWithoutFeedback, Image} from 'react-native';
import SharingButton from "../SharingButton";
import Promise from "../Promise";
import  {launchCamera ,  launchImageLibrary }  from  'react-native-image-picker' ;

import firestore, { firebase } from '@react-native-firebase/firestore';



function NewPost({...props}) {
    const cnt = props.route.params.cnt;

    // 쉐어링 동의 확인 변수 선언
    const [allCheck, setCheck] = useState(false);

    // 제목, 내용, 이미지 변수 선언
    const [TitleValue, onChangeTitle] = useState('');
    const [InnerValue, onChangeInner] = useState('');
    const [ImageUri, setImageSource] = useState('../../../image/photo.png');

    // TextInput 포커즈 관련 변수 선언
    const [Titlefocus, setTitleFocus] = useState(false);
    const [Innerfocus, setInnerFocus] = useState(false);
    const TitleFocusStyle = Titlefocus ? style.TitleInputFocus : style.TitleInput;
    const InnerFocusStyle = Innerfocus ? style.InnerInputFocus : style.InnerInput;


    // 게시글 등록 버튼 이벤트 함수 (DB에 값 추가하고 이전화면으로)
    const submit = () =>{
        firestore().collection("sharing-posts").doc('Post'+(cnt+1)).set({
            title : TitleValue,
            내용 : InnerValue,
            img : ImageUri,
            post_ID : cnt+1,
            sharing_MAX : 0,
            sharing_now : 0,
            User_ID : login_user.id,
        })
        props.navigation.pop();
        count = 0;
    }

    return(
        <View style = {style.container}>
            <TouchableHighlight underlayColor = {'none'} style = {style.picture} onPress={() => {launchImageLibrary(options, (response) => {
                console.log('Response = ', response);
                if (response.didCancel) {
                    console.log('image picker 취소');
                } else if(response.error){
                    console.log('response.customButton')
                } else {
                    setImageSource(response.uri);
                }})}}>
                <Image source={require('../../../image/photo.png')} style={{flex:1, resizeMode : "contain"}}/>
            </TouchableHighlight>
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
                    numberOfLines={4} 
                    onFocus={() => setInnerFocus(true)}
                    onBlur = {() => setInnerFocus(false)}
                    onChangeText={text => onChangeInner(text)}
                    maxLength={100} 
                    textAlignVertical = "top" />
                <Promise allCheck = {allCheck} setCheck = {setCheck} style={{flex:1}}/>
                    <View style ={{flex:0.5}}>
                        <SharingButton allCheck = {allCheck} submit = {()=>submit()} buttonName = {"게시글 등록하기"} style={{flex:1}}/>
                     </View>
                </View>
            </View>
            </View>
    )
}

    // react-image-picker 옵션
    const options = {
        title: 'Load Photo',
        storageOptions: {
        skipBackup: true,
        path: 'images',
        },
    };

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
            height : 185,
            fontFamily : 'NanumSquareEB',
            borderColor : "gray"
        },
        TitleInputFocus : {
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
    });

export default NewPost;