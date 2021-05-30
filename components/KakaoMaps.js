import React, { Component } from 'react';
import { TouchableHighlight, StyleSheet, View, Image, Alert ,Text} from 'react-native';
import { WebView } from 'react-native-webview';
import BottomTabs from "./BottomTabs";
import firestore from '@react-native-firebase/firestore';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

const domain = 'https://kakaomapdb.web.app/'


const Stack = createStackNavigator();

export default class Screen extends Component {
  render() {
     return (
        <Stack.Navigator>
           <Stack.Screen name="App" component={App} options={{headerShown: false}}/>
           <Stack.Screen name="BottomTabs" component={BottomTabs} options={{headerShown: false}}/>
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

    signup_user (){
        console.log("---------");
        console.log("User_Cnt=",User_Cnt);
          if (!Exist){                                     // 존재 하지 않으면 DB에 등록
              var doc_name = 'User'+User_Cnt;
              firestore().collection('User').doc(doc_name).set({ 
              Kakao_Account: login_user,
              User_ID: login_user.id,
              User_First: false,
              X : this.state.X,
              Y : this.state.Y
          }).then(() => {console.log('User added!');});
           
          firestore().collection('User').doc('PK').update({
            Cnt: User_Cnt+1, }) .then(() => {console.log('User updated!');});
          }
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
        // console.log(this);
        return (
            <View style={styles.container}>
                <View style={{flex:0.3}}/>
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
                 <View style={{flex:1.1}}>
                     <Text style ={{flex:1, alignSelf:'center'}}>
                        {"\n"}
                        X 좌표 : {this.state.X}  {"\n"}
                        Y 좌표 : {this.state.Y}   {"\n"}      
                        Exist : {Exist}  {"\n"}
                        User : {login_user.id}  {"\n"}
                    </Text>
                    
                </View>
                {
                console.log("X좌표 = " + this.state.X + " / Y좌표 = " + this.state.Y),
                console.log("User = "+ login_user),
                console.log("Exist = "+Exist)
                }
                <View style={styles.bottom}>
                     <TouchableHighlight style={{flex:1}} onPress={() => {this.signup_user(this),this.props.navigation.navigate("BottomTabs")}}>
                        <View style={{flex:1, marginTop : 29}}>
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
        backgroundColor: "white"
    },
    webview: {
        flex: 5,
        borderWidth : 2,
        borderColor:"#CF2A27"
    },
    bottom:{
        flex: 2,
        alignItems: "center",
        justifyContent: "center"
    }
});

