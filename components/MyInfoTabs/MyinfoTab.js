import React ,{useState}from 'react';
import { FlatList, StyleSheet, Text, View, Image } from 'react-native';
import { State } from 'react-native-gesture-handler';
import { baseProps } from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlers';

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    borderBottomWidth : 1,
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  profileArea:{
    flex:1,
    alignItems : 'center',
    justifyContent : 'center'
  },
  image: {
      marginTop : 45,
      width : 200,
      height : 200,
      borderWidth : 1,
      borderColor : "black",
      borderRadius : 30,
  },
  UserName : {
    flex:1,
    marginTop : 15,
    fontFamily: 'NanumSquare_acEB',
    color : "black",
    fontSize : 30,
  },
  FlatList:{
      flex:1,
      marginLeft : 30,
      marginRight : 30,
  }
});

const MyinfoTab = () => {
    const [Name, onChangeName] = useState('저니녁');
    return (
        <View style={styles.container}>
            <View style = {styles.profileArea}>
                <Image style={styles.image} source={require('../../image/저니녁.jpg')}/>
                <Text style={styles.UserName}>{Name} 님</Text>
            </View>
        <FlatList
            style={styles.FlatList}
            data={[
            {key: 'Devin'},
            {key: 'Dan'},
            {key: 'Dominic'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'John'},
            {key: 'Jillian'},
            {key: 'Jimmy'},
            {key: 'Julie'},
            ]}
            renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
        </View>
    );
    }

export default MyinfoTab;