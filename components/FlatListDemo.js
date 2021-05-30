import React, {Component , useEffect, useState, useCallback, useRef} from 'react';
import {TouchableHighlight , View, Text, StyleSheet, Button ,FlatList, TouchableOpacity, RefreshControl, Image} from 'react-native';

import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

import firestore from '@react-native-firebase/firestore';
import SharingPost from "./SharingPost";
import TopMenu from "./TopMenu";
import NewPost from "./Posts/NewPosts/NewPost";
import PlusButton from "./PlusButton";
import AlarmPage from "./AlarmPage";
import KakaoMaps from "./KakaoMaps"

import { ActivityIndicator } from 'react-native';
import { withRepeat } from 'react-native-reanimated';

const Stack = createStackNavigator();
export default Screen 

function Screen() {
     return (
        <Stack.Navigator>
          <Stack.Screen name="FlatListDemo" component={FlatListDemo} options={{headerShown: false}}/>
          <Stack.Screen name="SharingPost" component={SharingPost} options={{headerShown: false}}/>
          <Stack.Screen name="NewPost" component={NewPost} options={{headerShown: false}}/>
          <Stack.Screen name="AlarmPage" component={AlarmPage} options={{headerShown: false}}/>
          <Stack.Screen name="KakaoMaps" component={KakaoMaps} options={{headerShown: false}}/>
        </Stack.Navigator>
     );
   }


const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

function FlatListDemo(){
    const [data, setData] = useState([]);
    const [cnt, setCnt] = useState(0);
    const navigation = useNavigation();
    global.count = 0;


    //RefreshControl
    const [refreshing, setRefreshing] = useState(false);
    const onRefresh = useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
    },[]);

    //Totop
    const flatListRef = useRef()
    const toTop = () => {
        flatListRef.current.scrollToOffset({animated : true, offset:0})
    }

    useEffect(() => {
        firestore().collection('sharing-posts').orderBy("post_ID", "desc").onSnapshot(querySnapshot => {
            const data = [];
            querySnapshot.forEach(documentSnapshot => {
                count = count+1;
                data.push({
                    ...documentSnapshot.data(),
                    key : documentSnapshot.id,
                });
            });
            setCnt(count);
            setData(data);
        })
        },[]);
    

    const renderItem = ({item}) => {
        count = 0;
        const press = () => {
           navigation.navigate("SharingPost",{post_ID:item.post_ID})
        }
        return(
            <TouchableOpacity style={style.itemView} onPress={press}>
                <Image source={{uri : item.img}} style={style.itemImg}/>
                <View style={{flex:1, flexDirection:'column'}}>
                    <Text style={style.itemName}>{item.title}</Text>
                    <Text style={style.itemMsg}>{item.내용}</Text>
                    <Text style={style.itemhowfar}>{"\n"} - 현 위치로부터 ...m 이내</Text> 
                </View>
            </TouchableOpacity>
        );
    }
        return(
            <View style={style.root}>
                <TopMenu toTop = {toTop}/>
                <View style={style.location}>
                    <TouchableHighlight underlayColor = {'none'} onPress={()=>{navigation.navigate("KakaoMaps")}}>
                        <View style={{flexDirection : "row"}}>
                            <Image style={style.locationIcon} source={require('../image/location.png')}/>
                            <Text style={style.locationText} > 진주시 가좌동</Text>
                        </View>
                    </TouchableHighlight>
                <Text style={style.titleText}> 의 쉐어링</Text>
                </View>
                <FlatList
                    ref = {flatListRef}
                    style = {style.flatlist}
                    data={data}
                    renderItem={renderItem}
                    refreshControl ={
                        <RefreshControl
                        refreshing = {refreshing}
                        onRefresh = {onRefresh}/>
                    }
                    >
                        
                </FlatList>
                <PlusButton cnt = {cnt}/>
            </View>
        ); 
    }




const style= StyleSheet.create({
    flatlist:{},
    root:{
        flex:1,
        padding:16},
    location:{
        flexDirection : "row",
    },
    locationIcon:{},
    locationText:{
        fontFamily: 'NanumSquare_acEB',
        fontSize:18,
        paddingBottom:10,
    },
    titleText:{
        fontFamily: 'NanumSquare_acB',
        fontSize:17,
        marginTop:1
    },
    itemView:{
        height : 118,
        flexDirection:'row',
        borderWidth:1.5,
        borderColor:'#353535',
        padding:7,
        borderRadius:5,
        marginBottom:10,
    },
    itemImg:{
        borderWidth:1,
        borderColor:'#353535',
        width:105,
        height:100,
        resizeMode:'cover',
        marginRight:10,
        borderRadius: 5,
    },
    itemName:{
        marginTop :7,
        fontFamily: 'NanumSquare_acEB',
        fontSize:22,
    },
    itemMsg:{
        flex:1,
        marginTop:5,
        fontFamily: 'NanumSquare_acEB',
        fontSize:15,
        flexShrink:1,
        
    },
    itemhowfar:{
        flex:1,
        fontFamily: 'NanumSquare_acB',
        fontSize:13,
    },
    actionButtonIcon: {
        position: 'absolute',
        fontSize: 20,
        height: 22,
        color: 'white',
    }
})