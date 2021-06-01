import React, {Component, useEffect} from 'react';
import {TouchableHighlight , View, Text, StyleSheet, FlatList, TouchableOpacity, TouchableWithoutFeedback, Image, TextInput} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import firestore from '@react-native-firebase/firestore';
import NewReview from "./NewReview";
import color from 'color';


const Stack = createStackNavigator();


class ReviewTab extends Component{
    state = {
        data : [],
        writen : false,
        receive : false,
    }
    constructor(props){
    super(props);
    } 
    

    WritenReview() {
       this.setState({writen : true, receive:false});
       console.log("WrithenReview()");
       console.log("-------------");
       console.log(login_user)
       firestore().collection("review-posts").where('User_ID', '==', login_user.id).get().then(querySnapshot => {
        this.setState({data:[]});
        querySnapshot.forEach(documentSnapshot => {
            console.log(documentSnapshot.data());
            this.setState({
             data : this.state.data.concat(documentSnapshot.data())
            });
        });
        })
    }


//  Review_post : Post_ID : 1 을 저장   ->  그걸 Post에서 검색 ->  작성자가 login_user 이면 출력!
//   귀찮아서 Received_User를 만듬!
    ReceivedReview(){
        this.setState({writen : false, receive:true});
       console.log("ReceiveReview()");
       console.log("-------------");

       firestore().collection("review-posts").where('Received_User', '==', login_user.id).get().then(querySnapshot => {
        this.setState({data:[]});
        querySnapshot.forEach(documentSnapshot => {
            console.log(documentSnapshot.data());
            this.setState({
             data : this.state.data.concat(documentSnapshot.data())
            });
        });
        })
    }
    UnWrittenReview(){
       console.log("UnWrittenReview()");
       console.log("-------------",login_user.id);
       console.log("-------------",typeof login_user.id);
       firestore().collection("review-posts").doc("PK").get().then((doc) => {
        Review_Cnt = doc.data().Cnt;
        console.log("Rn="+doc.data().Cnt);
    }).catch((error)=>{
      console.log("Error");
    })
    
    }

    componentDidMount(){
        this.WritenReview();

    }


    render(){ // 렌더링 해서 화면에 보여줄 컨텐츠들
        return(
            <View style={style.root}>
                <View style={style.Review}>
                    <View style={{flexDirection:'row'}}>
                        <TouchableHighlight style = {this.state.writen ? style.writenContainer : style.writenContainer2} underlayColor = {'none'} onPress={()=>{this.WritenReview(this);}}>
                                <Text style={this.state.writen ? style.Writen : style.Writen2}>내가 쓴 리뷰</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style = {this.state.receive ? style.receivecontainer : style.receivecontainer2} underlayColor = {'none'} onPress={()=>{this.ReceivedReview(this);}}>
                                <Text style={this.state.writen ? style.Given : style.Given2} >내가 받은 리뷰</Text>
                        </TouchableHighlight>
                    </View>
                    <View style ={{flex:1, alignItems:'flex-end'}}>
                        <TouchableHighlight underlayColor = {'none'} onPress={()=>{this.UnWrittenReview(this), this.props.navigation.navigate("NewReview");}}>
                            <Text style={style.Unwritten}>
                                <Image style={style.Edit} source={require('../../image/edit.png')}/> 미작성 리뷰({URlen}) 작성하기</Text>  
                        </TouchableHighlight>
                    </View>
                </View>
                    <View style={{flex:7}}>
                    <FlatList // FlatList 의 기본속성, data는 this.state처럼 가변한 부분에서 가져온다.
                    style={{flex:1, marginLeft:20, marginRight:10}}
                    data={this.state.data}
                    renderItem={this.renderItem}  // this.state가 renderItem의 매개변수로 들어간다.
                    keyExtractor={ item=> item.review_ID }
                    >
                   </FlatList>
                   </View>
            </View>
        );
    }//render method ..
    renderItem=({item, state})=>{
        return(
            <View style={style.List}>
                <View style={{flexDirection:'column'}}>
                    <Text style={style.itemName}>{item.title}</Text>
                    <Text style={style.itemMsg}>{item.comment}</Text>
                    <Text style={style.itemdate}>{item.date}</Text>
                    
                    
                </View>
            </View>
        );
    }


}


export default class Screen extends Component {
    
    render() {
       return (
          <Stack.Navigator>
             <Stack.Screen name="ReviewTab" component={ReviewTab} options={{headerShown: false}}/>
             <Stack.Screen name="NewReview" component={NewReview} options={{headerShown: false}}/>
          </Stack.Navigator>
       );
     }
}

const style= StyleSheet.create({
    receivecontainer : {
        flex:1, 
        alignItems:'center',
        backgroundColor : '#CF2A27',
        borderRadius:5,
    },
    receivecontainer2 : {
        flex:1, 
        alignItems:'center',
        borderRadius:5,
    },
    writenContainer:{
        flex:1, 
        alignItems:'center',
        backgroundColor : '#CF2A27',
        borderRadius:5,
        
    },
    writenContainer2:{
        flex:1, 
        alignItems:'center',
        borderRadius:5,
    },
    Edit: {
        width:23,
        height:23,
    },
    root:{
        flex:1,
        backgroundColor: "white"
    },
    Review:{
        flex:1,
    },
    Writen:{
        marginTop:7,
        flex:1,
        fontFamily: 'NanumSquare_acEB',
        fontSize:25,
        color:'white'
    },
    Writen2:{
        marginTop:7,
        flex:1,
        fontFamily: 'NanumSquare_acEB',
        fontSize:25,
        color:'black'
    },
    Given:{
        marginTop:7,
        fontFamily: 'NanumSquare_acEB',
        fontSize:25,
        marginBottom:10,
        color:'black'
    },
    Given2:{
        marginTop:7,
        fontFamily: 'NanumSquare_acEB',
        fontSize:25,
        marginBottom:10,
        color:'white'
    },
    Unwritten:{
        fontFamily: 'NanumSquare_acEB',
        flexDirection: 'row',     
        fontSize:18,
        marginRight:5,
        paddingBottom:5,
    },
    List:{
        borderWidth:4,
        borderRadius: 10, 
        resizeMode:'contain',
        marginRight:10,
        borderRadius: 0,
        marginBottom:3,
        backgroundColor: "#FFFFFF"
    },
    itemView:{
        flexDirection:'row',
        borderWidth:1.3,
        borderColor:'#353535',
        padding:7,
        borderRadius:10,
        marginBottom:7,
    },
    itemdate:{
        marginLeft:7,
        marginRight:10,
        fontFamily: 'NanumSquare_acR',
        fontSize:14,
        marginBottom:7,
    },
    itemName:{
        marginLeft:7,
        marginTop:7,
        fontFamily: 'NanumSquare_acEB',
        fontSize:18,
    },
    itemMsg:{
        marginLeft:7,
        marginTop:5,
        fontFamily: 'NanumSquare_acR',
        fontSize:15,
        flexShrink:1,
    },

});
