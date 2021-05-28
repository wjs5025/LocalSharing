import React, { Component, useState, useEffect } from 'react'
import { Text, View, Image, Dimensions } from 'react-native'
import Swiper from "react-native-web-swiper";
import firestore from '@react-native-firebase/firestore';

const { width } = Dimensions.get('window')

const styles = {
  container: {
    flex: 1,
    borderWidth : 1,
  },
  wrapper: {
    flex :1,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
  },
  imageArea: {
    width,
    flex: 1
  },
  contentArea :{
    width,
    flex : 2
  }
}

export default ImageView;


function ImageView({...props}){
  const [data,setData] = useState([]);
        useEffect(()=>{
        const db = firestore().collection("sharing-posts").where('post_ID', 'in', props.post_ID);
        db.get().then((query) =>{
            query.forEach((doc)=>{
                setData(doc.data());
        }
        )})
     },[])
     
    return (
      <View style={styles.container}>
            <Image style={styles.imageArea} source={{uri : data.img}}/>
      </View>
    )
  }