import React, {Component} from 'react';
import { Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import firestore from '@react-native-firebase/firestore';

// 컴포넌트 임포트
import FlatListDemo from "./FlatListDemo";
import ReviewTab from "./ReviewTabs/ReviewTab";
import EventTab from './EventTabs/EventTab';
import MyinfoTab from './MyInfoTabs/MyinfoTab';



function HomeScreen() {
  return (
    <View style={{flex: 1}}>
      <FlatListDemo/>
    </View>
  );
}

function ReviewScreen() {

   firestore().collection('User').where('User_ID', '==', login_user.id).get().then(Doc => {
        Doc.forEach((DO)=>{
            Now_Review_Post=DO.data().Unwritten_Reviews;
            URlen=Object.keys(Now_Review_Post).length;
            var Temp = Now_Review_Post[0];
            Now_Review_Post=Number(Temp);
            console.log("Now_Review_Post="+Now_Review_Post);  // string 
        });
    }).catch((error)=>{
        console.log("Error2");
      });


  return (
    <View style={{flex: 1}}>
      <ReviewTab/>
    </View>
  );
}

function EventScreen() {
    return (
      <View style={{ flex: 1}}>
        <EventTab/>
      </View>
    );
  }

function MyinfoScreen() {
    return (
      <View style={{flex: 1}}>
      <MyinfoTab/>
    </View>
    );
  }
  
const Tab = createBottomTabNavigator();

class App extends Component {
    render(){
        return(
            <Tab.Navigator>
              <Tab.Screen name="홈" component={HomeScreen} options={{tabBarLabel : '홈', tabBarIcon:()=> <Image source={require('../image/home.png')} style = {{width:23, height:23}}/>}}/>
              <Tab.Screen name="리뷰" component={ReviewScreen} options={{tabBarLabel : '리뷰', tabBarIcon:()=> <Image source={require('../image/edit.png')} style = {{width:23, height:23}}/>}}/>
              <Tab.Screen name="이벤트" component={EventScreen} options={{tabBarLabel : '이벤트', tabBarIcon:()=> <Image source={require('../image/star.png')} style = {{width:23, height:23}}/>}}/>
              <Tab.Screen name="내 정보" component={MyinfoScreen} options={{tabBarLabel : '내 정보', tabBarIcon:()=> <Image source={require('../image/user.png')} style = {{width:23, height:23}}/>}}/>
            </Tab.Navigator>
        );
    }
}
export default App;