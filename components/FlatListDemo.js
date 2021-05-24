import React, {Component , useEffect, useState} from 'react';
import {TouchableHighlight , View, Text, StyleSheet, FlatList, TouchableOpacity, TouchableWithoutFeedback, Image} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

import firestore from '@react-native-firebase/firestore';
import SharingPost from "./SharingPost";
import TopMenu from "./TopMenu";
import PlusButton from "./PlusButton"
import { ActivityIndicator } from 'react-native';

const Stack = createStackNavigator();
export default class Screen extends Component {
  render() {
     return (
        <Stack.Navigator>
          <Stack.Screen name="FlatListDemo" component={FlatListDemo} options={{headerShown: false}}/>
          <Stack.Screen name="SharingPost" component={SharingPost} options={{headerShown: false}}/>
          
        </Stack.Navigator>
     );
   }
 }

class FlatListDemo extends Component{
state = {
    data : []
}
constructor(props){
super(props);
this.post = firestore().collection("sharing-posts").get().then(querySnapshot => {
    querySnapshot.forEach(documentSnapshot => {
        console.log(documentSnapshot);
        this.setState({
         data : this.state.data.concat(documentSnapshot.data())
        });
    });
    })
}


render(){ // 렌더링 해서 화면에 보여줄 컨텐츠들
    return(
        <View style={style.root}>
            <TopMenu/>
            <View style={style.location}>
                <TouchableHighlight underlayColor = {'none'} onPress={()=>{alert("위치설정");}}>
                    <View style={{flexDirection : "row"}}>
                        <Image style={style.locationIcon} source={require('../image/location.png')}/>
                        <Text style={style.locationText} > 진주시 가좌동</Text>
                    </View>
                </TouchableHighlight>
            <Text style={style.titleText}> 의 쉐어링</Text>
            </View>
            <FlatList // FlatList 의 기본속성, data는 this.state처럼 가변한 부분에서 가져온다.
                style = {style.flatlist}
                data={this.state.data}
                renderItem={this.renderItem}  // this.state가 renderItem의 매개변수로 들어간다.
                keyExtractor={ item=> item.name }
                >
            </FlatList>
        </View>
    ); 
}//render method ..

//멤버 메소드 - FlatList의 renderItem용 
renderItem=({item, state})=>{
    return(
        <TouchableOpacity style={style.itemView} onPress={() => { this.props.navigation.navigate("SharingPost")}}>
            <Image source={{uri : item.img}} style={style.itemImg}/>
            <View style={{flex:1, flexDirection:'column'}}>
                <Text style={style.itemName}>{item.title}</Text>
                <Text style={style.itemMsg}>{item.내용}</Text>
                <Text style={style.itemhowfar}>{"\n"} - 현 위치로부터 ...m 이내</Text> 
            </View>
        </TouchableOpacity>
    );
}
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