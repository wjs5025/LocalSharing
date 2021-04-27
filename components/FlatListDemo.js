import React, {Component} from 'react';
import {TouchableHighlight , View, Text, StyleSheet, FlatList, TouchableOpacity, TouchableWithoutFeedback, Image} from 'react-native';

import TopAlarm from "./TopAlarm";
class FlatListDemo extends Component{
    constructor(){  // 객체 상태 초기화
        super();

        this.state={
            datas3: [
                {name:"치킨 가져가세요 !", message:"방금 시켰는데 나눠드실 분",img: require('../image/치킨.jpg')},
                {name:"우도기식당 입니다.", message:"오늘 남은 반찬드릴게요🎁",img: require('../image/반찬.jpg')},
                {name:"인혁반점 입니다.", message:"김장했는데 많이 남아서 나눠드리려고해요",img: require('../image/김치.jpg')},
                {name:"혁주네 반찬", message:"무말랭이 남아서 드려요",img: require('../image/무말랭이.jpg')},
                {name:"진주 유기농 당근", message:"안쓰는 당근 드립니다.",img: require('../image/당근.jpg')},
                {name:"농사왕 조재현", message:"유기농 무 드려요",img: require('../image/무.jpg')},
                {name:"열라면 나눠요", message:"라면 가져가세요",img: require('../image/라면.jpg')},
                {name:"메론 너무 많다", message:"메론 반쪽 나눠드려요",img: require('../image/메론.jpg')},

            ],
        };
    }

    render(){ // 렌더링 해서 화면에 보여줄 컨텐츠들
        return(
            <View style={style.root}>
                <TopAlarm/>
                <View style={style.location}>
                    <TouchableHighlight onPress={()=>{alert("위치설정");}}>
                        <View style={{flexDirection : "row"}}>
                            <Image style={style.locationIcon} source={require('../image/location.png')}/>
                            <Text style={style.locationText} > 진주시 가좌동</Text>
                        </View>
                    </TouchableHighlight>
                <Text style={style.titleText}> 의 쉐어링</Text>
                </View>
                
                <FlatList // FlatList 의 기본속성, data는 this.state처럼 가변한 부분에서 가져온다.
                    data={this.state.datas3}
                    renderItem={this.renderItem}  // this.state가 renderItem의 매개변수로 들어간다.
                    keyExtractor={ item=> item.name }>
                </FlatList>
            </View>
        );
    }//render method ..

    //멤버 메소드 - FlatList의 renderItem용
    renderItem=({item})=>{
        return(
            <TouchableOpacity style={style.itemView} onPress={()=>{alert(item.name);}}>
                <Image source={item.img} style={style.itemImg}/>
                <View style={{flexDirection:'column'}}>
                    <Text style={style.itemName}>{item.name}</Text>
                    <Text style={style.itemMsg}>{item.message}</Text>
                    <Text style={{fontStyle:'italic', fontSize:14}}>· 현 위치로부터 200m 이내</Text>
                </View>
            </TouchableOpacity>
        );
    }
}
const style= StyleSheet.create({
    root:{flex:1, padding:16,},
    location:{
        flexDirection : "row",
    },
    locationIcon:{
        marginTop:2,
    },
    locationText:{
        fontWeight:'bold',
        fontSize:18,
        paddingBottom:10,
    },
    titleText:{
        fontSize:18,
        paddingBottom:10,
    },
    itemView:{
        flexDirection:'row',
        borderWidth:1,
        borderColor:'gray',
        padding:7,
        borderRadius:10,
        marginBottom:7,
    },
    // 
    itemImg:{
        width:120,
        height:100,
        resizeMode:'cover',
        marginRight:8,
    },
    itemName:{
        fontSize:22,
        fontWeight:'bold',
    },
    itemMsg:{
        fontSize:16,
        
    },
});

export default FlatListDemo;