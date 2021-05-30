import { useNavigation } from '@react-navigation/native';
import React, {Component, useState, useEffect} from 'react';
import { View, Text, Image,StyleSheet } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import firestore from '@react-native-firebase/firestore';

const styles = StyleSheet.create({
    container : {
        flex:1,
        flexDirection:'column',
        borderBottomWidth : 1,
        borderBottomColor : "#BDBDBD"
    },
    image : {
        borderRadius : 10,
        borderWidth : 1,
        borderColor : "gray",
        width:70, 
        height:70,
        margin : 10,
        marginLeft : 15,
    },
    userInfo : {
        flex:2.6,
        paddingTop:5,
        marginTop : 17,
        marginLeft : 8,
        fontSize : 18,
        fontFamily: 'NanumSquare_acEB',
    },
    userAddress : {
        flex:1,
        margin : 8,
        paddingBottom : 13,
        fontSize : 15,
        fontFamily: 'NanumSquare_acEB',
    },
    reviewBtn : {
        flex : 1,
        marginTop : 19,
        marginRight : 15,
        fontSize : 15,
        fontFamily: 'NanumSquare_acEB',
    }
  });



 export default function Info({...props}){
    const db = firestore().collection("sharing-posts");
    const [user_id, setid] = useState('');
    const [kakao,setkakao] = useState([]);

    // post_ID 기반으로 post_ID
        useEffect(()=>{
            db.where('post_ID', 'in', props.post_ID).get().then((query) =>{
            query.forEach((doc)=>{
                setid(doc.data().User_ID);
                //console.log("글쓴이 User_ID : ",doc.data().User_ID);
        }
        )})}
        ,[])

        useEffect(()=>{
        firestore().collection("User").where('User_ID', '==', user_id).get().then((query2) => {
            query2.forEach((doc2) => {
                setkakao(doc2.data().Kakao_Account);
            })
        });}
        ,[user_id])
    
    const navigation = useNavigation();
      return (
            <View style = {styles.container}>
              <View style={{flexDirection : 'row'}}>
                <Image source={{uri :kakao.profileImageUrl}} style={styles.image}/>
                    <View style ={{flex : 1}}>
                        <View style ={{flex:1, flexDirection : 'row'}}>
                            <Text style={styles.userInfo}>{kakao.nickname}</Text>
                            <TouchableHighlight underlayColor = {'none'} onPress={()=>alert("리뷰보기")}><Text style={styles.reviewBtn}> {'>'} 리뷰보기</Text></TouchableHighlight>
                        </View>
                        <View style ={{flex : 1}}>
                            <Text style={styles.userAddress}>{kakao.email}</Text>
                        </View>
                    </View>
              </View>
            </View>
      );
    }