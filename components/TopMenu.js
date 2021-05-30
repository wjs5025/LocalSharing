import React, {Component} from 'react';
import { Image, StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import {useNavigation} from '@react-navigation/native'

function TopMenu({...props}) {
    const navigation = useNavigation();
        return(
            <View style={{flexDirection : "row",}}>
                <View style={styles.barleft}>
                    <TouchableHighlight underlayColor = {'none'} onPress={props.toTop}>
                        <View>
                            <Image source={require('../image/homelogo.png')}/>
                        </View>
                    </TouchableHighlight>
                </View>
                <View style={styles.barright}>
                    <TouchableHighlight underlayColor = {'none'} onPress={() => navigation.navigate("AlarmPage")}>
                        <View style={styles.alalrmBtn}>
                            <Image source={require('../image/bell.png')} style={{width:30, height:30}}/>
                        </View>
                    </TouchableHighlight>
                    {/* <TouchableHighlight underlayColor = {'none'} onPress={()=>{alert("알림창");}}>
                        <View style={styles.alalrmBtn}>
                            <Image source={require('../image/plus.png')} style={{width:30, height:30}}/>
                        </View>
                    </TouchableHighlight> */}
                    </View>
                </View>
        );
}
const styles = StyleSheet.create({
    barleft : {
        flex:1,
        marginBottom : 10,
        justifyContent: "flex-start",
    },
    barright : {
        flex:1,
        alignContent:"center",
        justifyContent: "flex-end",
        flexDirection : "row"
    },
    alalrmBtn :{
        alignItems : "flex-end",
        justifyContent : "flex-start",
        paddingVertical : 1,
        height : 45,
       marginLeft : 9,
    },
  });


export default TopMenu;