import React, {Component} from 'react';
import { View, Text, Image,StyleSheet } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
    container : {
        flex:1,
        flexDirection:'column',
        borderWidth : 1,
    },
    image : {
        borderRadius : 10,
        borderWidth : 1,
        borderColor : "black",
        width:70, 
        height:70,
        margin : 10,
        marginLeft : 20,
    },
    userInfo : {
        flex:2.6,
        marginTop : 20,
        marginLeft : 10,
        fontSize : 20,
        fontFamily: 'NanumSquare_acEB',
        // backgroundColor:'blue'dd
    },
    userAddress : {
        flex:1,
        margin : 10,
        fontSize : 15,
        fontFamily: 'NanumSquare_acEB',
    },
    reviewBtn : {
        flex : 1,
        marginTop : 20,
        marginRight : 15,
        fontSize : 15,
        fontFamily: 'NanumSquare_acEB',
        // backgroundColor:'yellow'

    }
  });

export default class Info extends Component {
    render(){
      return (
            <View style = {styles.container}>
              <View style={{flexDirection : 'row'}}>
                <Image source={require('../../image/저니녁.jpg')} style={styles.image}/>
                    <View style ={{flex : 1}}>
                        <View style ={{ flex:1, flexDirection : 'row'}}>
                            <Text style={styles.userInfo}>저니녁</Text>
                            <TouchableHighlight underlayColor = {'none'} onPress={()=>{alert("리뷰보기");}}><Text style={styles.reviewBtn}> {'>'} 리뷰보기</Text></TouchableHighlight>
                        </View>
                        <View style ={{flex : 1}}>
                            <Text style={styles.userAddress}>경남 진주시 진주대로 542번길 19-10</Text>
                        </View>
                    </View>
              </View>
            </View>
      );
    }
  }