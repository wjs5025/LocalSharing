import React, { Component, useState} from 'react'
import { View, Text, Image,StyleSheet } from 'react-native';
import CheckBox from 'react-native-checkbox';

function App() {
        const [isSelected, setSelection] = useState(false);
    return(
        <View style={styles.container}>
            <View style={styles.checkboxContainer}>
                <CheckBox
                label = ""
                value={isSelected}
                onValueChange={setSelection}
                style={styles.checkbox}
                onChange={(checked) => console.log('I am checked', checked)}/>
                <Text style={styles.Text}> 쉐어링 유의사항에 동의합니다. (필수)</Text>
            </View>
            <View style={styles.checkboxContainer}>
                <CheckBox
                label = ""
                value={isSelected}
                onValueChange={setSelection}
                style={styles.checkbox}
                onChange={(checked) => console.log('I am checked', checked)}/>
                <Text style={styles.Text}> 본사의 약관에 동의합니다. (필수)</Text>
            </View>
        </View> 
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingLeft : 20,
      borderBottomWidth:1,
      borderBottomColor:"black",
      justifyContent: "center",
    },
    checkboxContainer: {
        marginTop:5,
        flexDirection: "row",
      
    },
    checkbox: {
      alignSelf: "center",
    },
    Text : {
        fontFamily: 'NanumSquareEB',
        fontSize : 18,
        marginTop : 3
    }

  });

export default App;