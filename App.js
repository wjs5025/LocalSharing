import React, {Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';

// 컴포넌트 임포트
import BottomTabs from "./components/BottomTabs";
import FirstSlide from "./components/FirstSlide";
import FlatListDemo from "./components/FlatListDemo";
import KakaoMaps from "./components/KakaoMaps";
import PlusButton from "./components/PlusButton";
import ReviewTab from "./components/ReviewTabs/ReviewTab";
import SharingPost from "./components/SharingPost";
import TopMenu from "./components/TopMenu";
import NewReview from "./components/ReviewTabs/NewReview";
import EventTab from "./components/EventTabs/EventTab";
import MyinfoTab from "./components/MyInfoTabs/MyinfoTab";

//  ./Posts/...
import Comment from "./components/Posts/Comment";
import Content from "./components/Posts/Content";
import ImageView from "./components/Posts/ImageView";
import Info from "./components/Posts/Info";
import Promise from "./components/Posts/Promise";
import SharingButton from "./components/Posts/SharingButton";
import NewPost from "./components/Posts/NewPosts/NewPost";

class App extends Component {
  componentDidMount() { 
    SplashScreen.hide(); //로딩 화면
  }
  render() {
    return (
      <NavigationContainer><BottomTabs/></NavigationContainer>
        
      );
  }
}

export default App;
