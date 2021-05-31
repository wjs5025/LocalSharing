import React, {Component, useEffect, useState} from 'react';
import { TouchableHighlight, StyleSheet, View, Text, Image } from 'react-native';
import firestore from '@react-native-firebase/firestore';

const style = StyleSheet.create({
    container : {
        flex:1,
    },
    title : {
        flex:1,
        paddingLeft : 15,
        textAlignVertical : "center",
        fontFamily: 'NanumSquareEB',
        fontSize : 28,
        paddingTop : 15,
        paddingBottom : 15,
    },
    inner : {
        borderBottomWidth : 1,
        borderBottomColor:"#BDBDBD",
        height : 150,
        flex:3,
        paddingLeft : 15,
        paddingTop : 0,
        paddingBottom : 15,
        fontFamily: 'NanumSquareEB',
        fontSize : 18
    },
});


function Content({...props}){
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
     
       return (
        <View style = {style.container}>
            <View style = {style.container}>
                <Text style={style.title}>{data.title}</Text>
                <Text style={style.inner}>{data.내용}</Text> 
            </View>
        </View>
       );
    }
export default Content