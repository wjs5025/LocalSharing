import React, {Component} from 'react';
import {TouchableHighlight , View, Text, StyleSheet, FlatList, TouchableOpacity, TouchableWithoutFeedback, Image, TextInput} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import firestore from '@react-native-firebase/firestore';


const Stack = createStackNavigator();
class Screen extends Component {
  render() {
     return (
        <ReviewTap/>
     );
   }
 }



class ReviewTap extends Component{
    GetWriten() {
        console.log(this.state);
        this.state={
            datas3: [
                {name:"배고프닭", message:"나눔 치킨 너무 맛있엇습니다!!", date:"21-04-07"},
                {name:"우도기식당 입니다.", message:"역시 우도기식당 짱 ^^bbbb", date:"21-04-27"},
                ],
       };
       console.log("-----------");
       console.log(this.state);
       
    }
    state = {
        post : {
            title : ""
        }
    }
   constructor(props){
    super(props);
    this.getPost();
    this.subscriber = firestore().collection("sharing-posts").doc("post1").onSnapshot(doc => {
        this.setState({
            post :{
                title : doc.data().title
            }})
    })
    this.state={
        datas3: [
            {name:"원이닭", message:"나눔 치킨 너무 맛있엇습니다!!", date:"21-04-07"},
            {name:"우도기식당 입니다.", message:"역시 우도기식당 짱 ^^bbbb", date:"21-04-27"},
            {name:"엄지반점 입니다.", message:"김치찌개 맛잇게 해먹었어요 ^__^", date:"21-05-10"},
            {name:"혁주네 반찬", message:"혁주네 하면 무말랭이!!", date:"21-04-12"},
            {name:"정훈이네 레스토랑", message:"거,, 제육 더 없나..?", date:"21-05-20"},
            {name:"농사왕 조재현", message:"어라.. 어째서 눈물이..", date:"21-05-01"},
            {name:"KNU 황윤용라면", message:"경북대생이 만든 라면..? 귀하네요..", date:"21-05-05"},
            {name:"메론 너무 많다", message:"메론 :p", date:"21-04-30"}
        ],
    };
    }
    getPost = async () => {
        const userDocument = await firestore().collection('sharing-posts').doc("post1").get()
        console.log(userDocument)
       }

    render(){ // 렌더링 해서 화면에 보여줄 컨텐츠들
        return(
            <View style={style.root}>
                <View style={style.Review}>
                    <TouchableHighlight underlayColor = {'none'} onPress={()=>{this.GetWriten(this);}}>
                        <View style={{flexDirection : "row"}}>
                            <Text style={style.Writen } >| 내가 쓴 리뷰 |</Text>
                            
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor = {'none'} onPress={()=>{alert("내가 받은");}}>
                        <View style={{flexDirection : "row"}}>
                            <Text style={style.Given} > | 내가 받은 리뷰 |</Text>
                        </View>
                    </TouchableHighlight>
                    </View>


                    <FlatList // FlatList 의 기본속성, data는 this.state처럼 가변한 부분에서 가져온다.
                    data={this.state.datas3}
                    renderItem={this.renderItem}  // this.state가 renderItem의 매개변수로 들어간다.
                    keyExtractor={ item=> item.name }>
                   </FlatList>

                
            </View>
        );
    }//render method ..
    renderItem=({item, state})=>{
        return(
            <View style={style.List}>
                <View style={{flexDirection:'column'}}>
                     
                    <Text style={style.itemName}>{item.name}</Text>
                    <Text style={style.itemMsg}>{item.message}</Text>
                    <Text style={style.itemdate}>{item.date}</Text>
                    
                    
                </View>
            </View>
        );
    }


}
const style= StyleSheet.create({
    root:{
        flex:1,
        padding:16, 
        marginTop: 30,
        backgroundColor: "#CF2A27"
    },
    Review:{
        flexDirection : "row",
        marginLeft : 40,
    },
   
    Writen:{
        fontFamily: 'NanumSquare_acEB',
        fontSize:18,
        marginBottom:10,
        marginRight : 20,

    },
    Given:{
        fontFamily: 'NanumSquare_acEB',
        fontSize:18,
        marginBottom:10,
        marginLeft : 20,

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
    // 
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
export default Screen;