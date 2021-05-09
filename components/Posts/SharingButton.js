import React, {Component, useState} from 'react';
import { TouchableHighlight, ScrollView, StyleSheet, View, Text, Image } from 'react-native';

const style = StyleSheet.create({
    container : {
        flex:1,
        alignItems: "center",
        justifyContent: "center",
        borderWidth : 1,
        borderColor : "#CF2A27",
        backgroundColor : '#CF2A27'
    },
    sharingButton : {
        fontFamily : 'NanumSquare_acEB',
        fontSize : 30,
        color:'white'
    }
});
function SharingButton() {
    return(
        <TouchableHighlight style={style.container} underlayColor = {'none'} onPress={()=>{alert("리프래쉬");}}>
            <View style={style.container}>
                <Text style={style.sharingButton}>쉐어링 신청하기</Text>
            </View>
        </TouchableHighlight>
    );
}

export default SharingButton;