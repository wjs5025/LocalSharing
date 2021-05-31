import React ,{useState}from 'react';
import { TouchableHighlight } from 'react-native';
import { FlatList, StyleSheet, Text, View, Image} from 'react-native';
import { State } from 'react-native-gesture-handler';
import { baseProps } from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlers';

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22,
   backgroundColor:'white'
  },
  item: {
    flex:1,
    borderBottomWidth : 1,
    borderColor : "gray",
    padding: 10,
    height: 66.3,
    justifyContent : 'center'
  
  },
  profileArea:{
    flex:1,
    alignItems : 'center',
    justifyContent : 'center',

  },
  image: {
      marginTop : 20,
      width : 200,
      height : 200,
      borderWidth : 3,
      borderColor : "#CF2A27",
      borderRadius : 30,
  },
  UserName : {
    flex:1,
    margin : 15,
    fontFamily: 'NanumSquare_acEB',
    color : "black",
    fontSize : 30,
  },
  FlatList:{
      flex:1,
      marginLeft : 40,
      marginRight : 40,
      marginBottom : 7,
  },
  menuText : {
    fontFamily: 'NanumSquare_acEB',
    fontSize : 18,
    marginLeft : 20,
    marginTop : 11
  },
  menuImage : {
    marginTop : 8,
    width:28, 
    height:28, 

  }
});

const DATA = [
  {
    id : "Menu1",
    title : "프로필 설정",
    icon : require('../../image/icon/settings.png')
},
  {
    id : "Menu2",
    title : "셀러 인증",
    icon : require('../../image/icon/medal.png')
  },
  {
    id : "Menu3",
    title : "포인트 조회",
    icon : require('../../image/icon/point.png')
  },
  {
    id : "Menu4",
    title : "마켓",
    icon : require('../../image/icon/market.png')
  },
  {
    id : "Menu5",
    title : "앱 정보",
    icon : require('../../image/icon/information.png')
  },
];

const Item = ({item, onPress, backgroundColor}) => (
  <TouchableHighlight underlayColor = {'none'} onPress = {onPress} style={[styles.item, backgroundColor]}>
    <View style ={{flex:1, flexDirection : "row"}}>
      <Image source={item.icon} style={styles.menuImage}/>
      <Text style={[styles.menuText]}> {item.title}</Text>
    </View>
  </TouchableHighlight>
);

const MyinfoTab = () => {
    const [SelectedId, setSelectedId] = useState(null);
    const [name, setName] = useState(login_user.nickname);

    const renderItem = ({ item }) => {
      return (
        <Item
          item={item}
          onPress={() => alert(item.title)}

        />
      );
    };

    return (
      <View style={styles.container}>
        <View style = {styles.profileArea}>
                <Image style={styles.image} source={{uri :login_user.profileImageUrl}}/>
                <Text style={styles.UserName}>{name} 님</Text>
            </View>
        <View style ={{flex:1.3, marginTop : 15}}>
        <FlatList
          style = {styles.FlatList}
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          extraData={SelectedId}
        />
        </View>
      </View>
    );
  };

export default MyinfoTab;