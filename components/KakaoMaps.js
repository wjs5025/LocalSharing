import React, { Component } from 'react';
import { TouchableHighlight, StyleSheet, View, Image, Alert } from 'react-native';
import { WebView } from 'react-native-webview';
import BottomTabs from "./BottomTabs";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

const domain = 'https://kakaomapdb.web.app/'

const Stack = createStackNavigator();

class Screen extends Component {
  render() {
     return (
       <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Fisrt" component={App} options={{headerShown: false}} />
          <Stack.Screen name="Second" component={BottomTabs} options={{headerShown: false}}/>
        </Stack.Navigator>
       </NavigationContainer>
     );
   }
 }



class App extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            indexPage: { uri: domain }
        };
    }


     onWebViewMessage = (e) => {
       console.log(e.nativeEvent.data);
       console.log("!@!")
     };
 
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.webview}>
                <WebView
                    style={styles.webview}
                    source={this.state.indexPage}
                    onMessage={(event)=> console.log(event.nativeEvent.data)}
                    originWhitelist={['*']}
                    ref={webview => this.appWebview = webview}
                    javaScriptEnabled={true}
                    useWebKit={true}
                    
                />
                </View>
                <View style={styles.bottom}>
                     <TouchableHighlight onPress={() => {this.props.navigation.navigate("Second")}}>
                        <View>
                            <Image source={require('../image/kakao_button.png')}/>
                        </View>
                    </TouchableHighlight>


                </View>

            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding:10,
        backgroundColor: "#CF2A27"
    },
    webview: {
        flex: 5,
    },
    bottom:{
        flex: 2,
        alignItems: "center",
        justifyContent: "center"
    }
});


export default Screen;