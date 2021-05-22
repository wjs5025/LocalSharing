import React, {Component, useState} from 'react';
import {TouchableHighlight , View, Text, StyleSheet, TextInput, TouchableOpacity, TouchableWithoutFeedback, Image} from 'react-native';
import SharingButton from "../SharingButton";
import Promise from "../Promise";
import  {launchCamera ,  launchImageLibrary }  from  'react-native-image-picker' ;

const options = {
    title: 'Load Photo',
    customButtons: [
      { name: 'button_id_1', title: 'CustomButton 1' },
      { name: 'button_id_2', title: 'CustomButton 2' }
    ],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };



function NewPost({...props}) {
    const [allCheck, setCheck] = useState(false);
    const [TitleValue, onChangeTitle] = useState('');
    const [InnerValue, onChangeInner] = useState('');
    const [Titlefocus, setTitleFocus] = useState(false);
    const [Innerfocus, setInnerFocus] = useState(false);
    const TitleFocusStyle = Titlefocus ? style.TitleInputFocus : style.TitleInput;
    const InnerFocusStyle = Innerfocus ? style.InnerInputFocus : style.InnerInput;

    const [ImageUri, setImageSource] = useState('');

    return(
        <View style = {style.container}>
            <TouchableHighlight underlayColor = {'none'} style = {style.picture} onPress={() => {launchImageLibrary(options, (response) => {
                console.log('Response = ', response);

                if (response.didCancel) {
                    console.log('User cancelled image picker');
                } else if(response.error){
                    console.log('response.customButton')
                } else if(response.customButtons){
                    console.log('User tapped custom button : ', response.customButtons);
                    alert(response.customButtons);
                } else {
                    setImageSource(response.uri);
                    console.log(ImageUri);
                }
            })}}>
                <Image source={require('../../../image/photo.png')} />

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
                    value={TitleValue}/>
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
                    textAlignVertical = "top" 
                    value={InnerValue}/>
                <Promise allCheck = {allCheck} setCheck = {setCheck} style={{flex:1}}/>
                    <View style ={{flex:0.5}}>
                        <SharingButton allCheck = {allCheck} buttonName = {"게시글 등록하기"} style={{flex:1}}/>
                     </View>
                </View>
            </View>
            </View>
    )
}

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