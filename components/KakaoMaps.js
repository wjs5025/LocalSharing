import React, { Component } from 'react';
import { TouchableHighlight, StyleSheet, View, Image, Alert ,Text} from 'react-native';
import { WebView } from 'react-native-webview';
import BottomTabs from "./BottomTabs";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

const domain = 'https://kakaomapdb.web.app/'


const Stack = createStackNavigator();

export default class Screen extends Component {
  render() {
     return (
        <Stack.Navigator>
            <Stack.Screen name="fisrt" component={App} options={{headerShown: false}}/>
          <Stack.Screen name="Second" component={BottomTabs} options={{headerShown: false}}/>
        </Stack.Navigator>
     );
   }
 }


 class App extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            indexPage: { uri: domain },
            X:0,
            Y:0 
        };
        
    }

    
     onWebViewMessage = event => {
       console.log("--------------");
       console.log(event.nativeEvent.data);

       console.log("--------------");
       this.setState(
           {
             X: JSON.parse(event.nativeEvent.data).Lat,
             Y: JSON.parse(event.nativeEvent.data).Lng
           }
       )
       
     };
 
    render() {
        console.log("Html");
        console.log(this);
        return (
            <View style={styles.container}>
                <View style={styles.webview}>
                <WebView
                    style={styles.webview}
                    source={this.state.indexPage}
                    onMessage={this.onWebViewMessage}
                    originWhitelist={['*']}
                    ref={webview => this.appWebview = webview}
                    javaScriptEnabled={true}
                    useWebKit={true}
                    
                />
                </View>
                 <View>
                     <Text>
                        {"\n"}
                        X 좌표 : {this.state.X}  {"\n"}
                        Y 좌표 : {this.state.Y}         
                    </Text>
                    
                </View>
                {console.log("X좌표 = " + this.state.X + " / Y좌표 = " + this.state.Y)}
                <View style={styles.bottom}>
                     <TouchableHighlight onPress={() => {this.props.navigation.navigate("Second")}}>
                                             <View>
                            <Image source={require('../image/kakao_button.png')}/>
                        </View>
                    </TouchableHighlight>


                </View>

            </View>
            
        );
        console.log(this);
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

