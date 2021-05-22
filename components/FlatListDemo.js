import React, {Component} from 'react';
import {TouchableHighlight , View, Text, StyleSheet, FlatList, TouchableOpacity, TouchableWithoutFeedback, Image} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

import firestore from '@react-native-firebase/firestore';
import SharingPost from "./SharingPost";
import TopMenu from "./TopMenu";
import PlusButton from "./PlusButton"

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
        post :[
            [{title : "", User_ID : 0, post_ID : 0, sharing_MAX : 0, sharing_now : 0, title : "", 내용 : "", img : ""}]
        ]
    }
   constructor(props){
    super(props);
    this.getPost();
    this.post = firestore().collection("sharing-posts").doc("post1").onSnapshot(doc => {
        this.setState({
            post :[
                {User_ID : doc.data().UserID, post_ID : doc.data().post_ID, sharing_MAX : doc.data().sharing_MAX, sharing_now : doc.data().sharing_now, title : doc.data().title, 내용 : doc.data().내용, img : doc.data().img,}
            ]})
    })
    this.state={
        datas:[
            {name:"치킨집", message:"방금 시켰는데 나눠드실 분",img: require('../image/치킨.jpg')},
            {name:"우도기식당 입니다.", message:"오늘 남은 반찬드릴게요🎁",img: require('../image/반찬.jpg')},
            {name:"엄지반점 입니다.", message:"김장했는데 많이 남아서 나눠드리려고해요",img: require('../image/김치.jpg')},
            {name:"혁주네 반찬", message:"무말랭이 남아서 드려요",img: require('../image/무말랭이.jpg')},
            {name:"정훈이네 레스토랑", message:"무지성 제육 볶아드립니다",img: require('../image/당근.jpg')},
            {name:"농사왕 조재현", message:"유기농 무 드려요",img: require('../image/무.jpg')},
            {name:"KNU 황윤용라면", message:"라면 가져가세요",img: require('../image/라면.jpg')},
            {name:"메론 너무 많다", message:"메론 반쪽 나눠드려요",img: require('../image/메론.jpg')}
        ],
    };
    }
    getPost = async () => {
        const userDocument = await firestore().collection('sharing-posts').doc("post1").get() 
        console.log(userDocument)
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
                {console.log(this.state.datas)}
                {console.log(this.state.post)}
                <FlatList // FlatList 의 기본속성, data는 this.state처럼 가변한 부분에서 가져온다.
                    style = {style.flatlist}
                    data={this.state.post}
                    renderItem={this.renderItem}  // this.state가 renderItem의 매개변수로 들어간다.
                    keyExtractor={ item=> item.name }>
                </FlatList>
                <PlusButton/>
            </View>
        ); 
    }//render method ..

    //멤버 메소드 - FlatList의 renderItem용 
    renderItem=({item, state})=>{

        return(
            <TouchableOpacity style={style.itemView} onPress={() => { this.props.navigation.navigate("SharingPost")}}>
                <Image source={{uri : item.img}} style={style.itemImg}/>
                <View style={{flexDirection:'column'}}>
                    <Text style={style.itemName}>{item.title}</Text>
                    <Text style={style.itemMsg}>{item.내용}</Text>
                    <Text style={style.itemhowfar}>{"\n"}{"\n"} - 현 위치로부터 ...m 이내</Text> 
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
        marginTop:10,
        fontFamily: 'NanumSquare_acEB',
        fontSize:15,
        flexShrink:1,
    },
    itemhowfar:{
        fontFamily: 'NanumSquare_acB',
        fontSize:13,
    },
    actionButtonIcon: {
        position: 'absolute',
        fontSize: 20,
        height: 22,
        color: 'white',
    }
});

