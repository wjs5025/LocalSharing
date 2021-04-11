import React, {Component} from 'react';
import { Platform, StyleSheet, View, Text, Button } from 'react-native';
import {Image,  TouchableOpacity, TouchableWithoutFeedback, Animated, Alert} from 'react-native';
import Swiper from "react-native-web-swiper";

class FirstSlide extends Component {

  render(){
    return (
       <View style={{
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'grey'
         }}>
        

        <View style={{
    
        position: 'absolute',
        alignSelf:'center',
        backgroundColor:'grey',
        width: 70,
        height: 70,
        borderRadius: 35,
        bottom: 35,
        zIndex: 10

        }}>

       <TouchableWithoutFeedback onPress={this.toggleOpen}>
            <View style={[styles.button, styles.actionBtn]}>
                    <Image style={{ width:60, height:60}}
                        resizeMode="contain"
                        source={{ uri: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Flittledeep.com%2Fphone-icon%2F&psig=AOvVaw2zmoXBQZLSXrLyDpgsmYpK&ust=1617707571493000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPCLxLz85u8CFQAAAAAdAAAAABAD' }} />
            </View>
            </TouchableWithoutFeedback>
            </View>
            <View style={{

                position: 'absolute',
                backgroundColor: 'white',
                border: 2,
                radius: 3,
                shadowOpacity: 0.3,
                shadowRadius: 3,
                shadowOffset:{
                    height:3,width:3
                },
                x: 0,
                y: 0,
                style: { marginVertical: 5},
                bottom: 0,
                width: '100%',
                height: 70,
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingVertical: 10,
                paddingHorizontal: 25

        }}>

            <View style={{
                flexDirection: 'column', alignItem: 'center', justifyContent: 'center'
                
            }}>
                <TouchableOpacity onPress={() => {Alert.alert('click') }}>
                    <Image 
                        style={{width:30,height:30}}
                        source={{uri:'https://www.google.com/url?sa=i&url=https%3A%2F%2Flittledeep.com%2Fphone-icon%2F&psig=AOvVaw2zmoXBQZLSXrLyDpgsmYpK&ust=1617707571493000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPCLxLz85u8CFQAAAAAdAAAAABAD'}}
                        onPress={()=>{Alert.alert("1")}}
                        >
                        </Image>
                </TouchableOpacity>
                <Text style={{justifyContent:'center',alignItems:'center'}}>Home</Text>
                </View>                
                <View style={{
                flexDirection: 'column', alignItem: 'center', justifyContent: 'center'
                
            }}>
                <TouchableOpacity onPress={() => {Alert.alert('click') }}>
                    <Image 
                        style={{width:30,height:30}}
                        source={{uri:'https://www.google.com/url?sa=i&url=https%3A%2F%2Flittledeep.com%2Fphone-icon%2F&psig=AOvVaw2zmoXBQZLSXrLyDpgsmYpK&ust=1617707571493000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPCLxLz85u8CFQAAAAAdAAAAABAD'}}
                        onPress={()=>{Alert.alert("1")}}
                        >
                        </Image>
                </TouchableOpacity>
                <Text style={{justifyContent:'center',alignItems:'center'}}>Review</Text>
                </View>                
                <View style={{
                flexDirection: 'column', alignItem: 'center', justifyContent: 'center'
                
            }}>
                <TouchableOpacity onPress={() => {Alert.alert('click') }}>
                    <Image 
                        style={{width:30,height:30}}
                        source={{uri:'https://www.google.com/url?sa=i&url=https%3A%2F%2Flittledeep.com%2Fphone-icon%2F&psig=AOvVaw2zmoXBQZLSXrLyDpgsmYpK&ust=1617707571493000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPCLxLz85u8CFQAAAAAdAAAAABAD'}}
                        onPress={()=>{Alert.alert("1")}}
                        >
                        </Image>
                </TouchableOpacity>
                <Text style={{justifyContent:'center',alignItems:'center'}}>Event</Text>
                </View>                
                <View style={{
                flexDirection: 'column', alignItem: 'center', justifyContent: 'center'
                
            }}>
                <TouchableOpacity onPress={() => {Alert.alert('click') }}>
                    <Image 
                        style={{width:30,height:30}}
                        source={{uri:'https://www.google.com/url?sa=i&url=https%3A%2F%2Flittledeep.com%2Fphone-icon%2F&psig=AOvVaw2zmoXBQZLSXrLyDpgsmYpK&ust=1617707571493000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPCLxLz85u8CFQAAAAAdAAAAABAD'}}
                        onPress={()=>{Alert.alert("1")}}
                        >
                        </Image>
                </TouchableOpacity>
                <Text style={{justifyContent:'center',alignItems:'center'}}>Setting</Text>
                </View>                

            </View>


        </View>
        );
  }
}

const styles = StyleSheet.create({

    MainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue'
    },
    button: {
        width:60,
        height:60,
        alignItems:'center',
        justifyContent:'center',
        shadowColor: 'grey',
        shadowOpacity: 0.1,
        shadowOffset: { x: 2, y: 0},
        shadowRadius: 2,
        borderRadius: 30,
        bottom:20,
        right:0,
        top:5,
        left:5,
        shadowOpacity:5.0,
    },
    actionBtn: {

        backgroundColor:'#1E90FF',
        textShadowOffset:{width:5,height:5},
        textShadowRadius:10,
        borderWidth:2,
        borderColor:'#fff'
    }
});
  export default FirstSlide;