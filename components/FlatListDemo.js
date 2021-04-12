import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity, TouchableWithoutFeedback, Image} from 'react-native';

class FlatListDemo extends Component{
    constructor(){  // 객체 상태 초기화
        super();

        this.state={
            datas3: [
                {name:"sam", message:"Hello world",img: require('./baseline_face_black_18x.png')},
                {name:"robin", message:"Hello rn",img: require('./baseline_face_black_18x.png')},
                {name:"kim", message:"Hello react",img: require('./baseline_face_black_18x.png')},
                {name:"hong", message:"Hello hybrid",img: require('./baseline_face_black_18x.png')},
                {name:"rosa", message:"Hello ios",img: require('./baseline_face_black_18x.png')},
                {name:"lee", message:"Hello rom",img: require('./baseline_face_black_18x.png')},
                {name:"jack", message:"Hello tom",img: require('./baseline_face_black_18x.png')},
                {name:"moana", message:"Hello native",img: require('./baseline_face_black_18x.png')},

            ],
        };
    }

    render(){ // 렌더링 해서 화면에 보여줄 컨텐츠들
        return(
            <View style={style.root}>
                <Text style={style.titleText}>FlatList Test</Text>
                <FlatList // FlatList 의 기본속성, data는 this.state처럼 가변한 부분에서 가져온다.
                    data={this.state.datas3}
                    renderItem={this.renderItem}  // this.state가 renderItem의 매개변수로 들어간다.
                    keyExtractor={ item=> item.name }>  // item 각각을 구분해주는 역할
                </FlatList>
            </View>
        );
    }//render method ..

    //멤버 메소드 - FlatList의 renderItem용
    renderItem=({item})=>{
        return(
            <TouchableOpacity style={style.itemView} onPress={()=>{alert(item.name);}}>
                <Image source={item.img} style={style.itemImg}></Image>
                <View style={{flexDirection:'column'}}>
                    <Text style={style.itemName}>{item.name}</Text>
                    <Text style={style.itemMsg}>{item.message}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}
const style= StyleSheet.create({
    root:{flex:1, padding:16,},
    titleText:{
        fontSize:24,
        fontWeight:'bold',
        textAlign:'center',
        paddingBottom:16,
    },
    itemView:{
        flexDirection:'row',
        borderWidth:1,
        borderRadius:4,
        padding:8,
        marginBottom:12,
    },
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

export default FlatListDemo