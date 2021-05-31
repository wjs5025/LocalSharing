import React, {Component, useState} from 'react';
import { TouchableHighlight, ScrollView, StyleSheet, View, Text, Image } from 'react-native';


const style = StyleSheet.create({
    disable_container : {
        flex:1,
        alignItems: "center",
        justifyContent: "center",
        borderWidth : 1,
        borderColor : "#CF2A27",
        backgroundColor : '#CF2A27'
    },
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
    },
    diasble_sharingButton : {
        fontFamily : 'NanumSquare_acEB',
        fontSize : 30,
        color:'gray'
    }
});

function SharingButton({...props}) {
    return(
        <TouchableHighlight disabled={!props.allCheck} style={props.allCheck ? style.disable_container : style.container} underlayColor = {'none'} onPress={props.submit}>
                <Text style={!props.allCheck ? style.diasble_sharingButton : style.sharingButton}>{props.buttonName}</Text>
        </TouchableHighlight>
    );
}

export default SharingButton;