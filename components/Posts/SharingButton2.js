import React, {Component, useState, useEffect} from 'react';
import { TouchableHighlight, ScrollView, StyleSheet, View, Text, Image } from 'react-native';
import firestore from '@react-native-firebase/firestore';

const style = StyleSheet.create({
    disable_container : {
        flex:1,
        alignItems: "center",
        justifyContent: "center",
        borderWidth : 1,
        borderColor : "#CF2A27",
        backgroundColor : '#CF2A27',
        borderRadius : 10,
    },
    container : {
        flex:1,
        alignItems: "center",
        justifyContent: "center",
        borderWidth : 1,
        borderColor : "#CF2A27",
        backgroundColor : '#CF2A27',
        borderRadius : 10,
    },
    sharingButton : {
        fontFamily : 'NanumSquare_acEB',
        fontSize : 25,
        color:'white'
    },
    diasble_sharingButton : {
        fontFamily : 'NanumSquare_acEB',
        fontSize : 25,
        color:'gray'
    }
});


export function SharingButton2({...props}) {
    console.log("버튼", props.disabled);
    const [data,setData] = useState([]);
        useEffect(()=>{
        const db = firestore().collection("sharing-posts").where('post_ID', 'in', props.post_ID);
        db.get().then((query) =>{
            query.forEach((doc)=>{
                setData(doc.data());
            //console.log(doc.data());
        }
        )})
     },[])
     
    return(
        <TouchableHighlight disabled={!props.allCheck | props.disabled} style={props.allCheck ? style.disable_container : style.container} underlayColor = {'none'} onPress={props.onPress}>
                <Text style={!props.allCheck|props.disabled ? style.diasble_sharingButton : style.sharingButton}>{props.buttonName + " ( " + data.sharing_now +  " / " + data.sharing_MAX} )</Text>
        </TouchableHighlight>
    );
}

export default SharingButton2;