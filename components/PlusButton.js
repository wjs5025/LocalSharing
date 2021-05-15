import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { Component, useCallback } from 'react';
import { StyleSheet, View} from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import BottomTabs from './BottomTabs'
import NewPost from './Posts/NewPosts/NewPost'

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={PlusButton} />
      <Stack.Screen name="NewPost" component={NewPost} />
    </Stack.Navigator>
  );
}

function PlusButton(props) {
    return (
          <ActionButton 
              offsetX={10}
              offsetY={15}
              size={62}
              buttonColor="#CF2A27"
              bgColor="rgba(0, 0, 0, 0.7)"
              >
          <ActionButton.Item 
          buttonColor='white' 
          title="게시글 작성"
          textContainerStyle ={{
            borderWidth : 0,
            backgroundColor : "rgba(0, 0, 0, 0)"          
          }}
          textStyle = {{
            color : "white",
            fontFamily: 'NanumSquare_acEB',
            fontSize : 15
          }}
          onPress={() => this.props.navigation.navigate('Details')}>
          <Icon name="md-create" style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>
    );
}

const styles = StyleSheet.create({
  actionButtonIcon: {
    position: 'absolute', 
    fontSize: 30,
    height: 30,
    paddingBottom:6,
    paddingLeft:2,
    color: '#CF2A27',
  },
});

export default PlusButton;