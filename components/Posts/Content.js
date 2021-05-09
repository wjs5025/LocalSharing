import React, {Component, useState} from 'react';
import { TouchableHighlight, StyleSheet, View, Text, Image } from 'react-native';

const style = StyleSheet.create({
    container : {
        flex:1,
    },
    title : {
        borderTopWidth :1,
        flex:1,
        paddingLeft : 15,
        textAlignVertical : "center",
        fontFamily: 'NanumSquareEB',
        fontSize : 33,
        paddingTop : 15,
        paddingBottom : 15,
    },
    inner : {
        borderBottomWidth : 1,
        height : 150,
        flex:3,
        paddingLeft : 15,
        paddingTop : 0,
        paddingBottom : 15,
        fontFamily: 'NanumSquareEB',
        fontSize : 20
    },
});

export default class Content extends Component {
    render() {
       return (
        <View style = {style.container}>
            <View style = {style.container}>
                <Text style={style.title}>치킨나눠드려요</Text>
                <Text style={style.inner}>오늘 가게 마감 직전에 치킨이 조금 많이 남아서 판매합니다. 총 20마리 정도 남아있구요, 오늘안에 꼭 다 처리해야해서 급하게 내놓습니다. 가져가실분은 신청 후 진주대로 542번길 19-10 봄이치킨으로 방문해주세요</Text> 
            </View>
        </View>
       );
    }
}