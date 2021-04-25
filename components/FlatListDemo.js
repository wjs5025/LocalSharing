import React, {Component} from 'react';
import {TouchableHighlight , View, Text, StyleSheet, FlatList, TouchableOpacity, TouchableWithoutFeedback, Image} from 'react-native';

import TopAlarm from "./TopAlarm";
class FlatListDemo extends Component{
    constructor(){  // 객체 상태 초기화
        super();

        this.state={
            datas3: [
                {name:"식당1", message:"오늘 남은 치킨 드려요",img: require('../image/baseline_face_black_18x.png')},
                {name:"식당2", message:"오늘 남은 반찬드립니다~",img: require('../image/baseline_face_black_18x.png')},
                {name:"식당3", message:"오늘 남은 김치 드립니다!!",img: require('../image/baseline_face_black_18x.png')},
                {name:"식당4", message:"무말랭이 남아서 드려요",img: require('../image/baseline_face_black_18x.png')},
                {name:"자취1", message:"안쓰는 당근 드립니다.",img: require('../image/baseline_face_black_18x.png')},
                {name:"자취2", message:"유기농 무 드려요",img: require('../image/baseline_face_black_18x.png')},
                {name:"자취3", message:"라면 가져가세요",img: require('../image/baseline_face_black_18x.png')},
                {name:"자취4", message:"메론 반쪽 나눠드려요",img: require('../image/baseline_face_black_18x.png')},

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
                    <Text>현 위치로부터 200m 이내</Text>
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
        marginTop:2
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
        padding:10,
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
        fontSize:24,
        fontWeight:'bold',
    },
    itemMsg:{
        fontSize:16,
        fontStyle:'italic',
    },
});

export default FlatListDemo;