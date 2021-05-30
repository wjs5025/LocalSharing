import React, { Component, useState, useEffect} from 'react'
import { View, Text, Image,StyleSheet } from 'react-native';
import CheckBox from 'react-native-checkbox';

function Promise({...props}) {
        const [isSelected1, setSelection1] = useState(false); // isSelected 변수를 setSelection 변수로 관리하겠다. (최초 false로 초기화)
        const [isSelected2, setSelection2] = useState(false); // isSelected 변수를 setSelection 변수로 관리하겠다. (최초 false로 초기화)

        isSelected1 & isSelected2 ? props.setCheck(true) : props.setCheck(false);

    return(
        <View style={styles.container}>
            <View style={styles.checkboxContainer}>
                <CheckBox
                label = ""
                value={isSelected1} // Checkbox 의 value는 isSelected이다.
                onChange={(value) => setSelection1(value)} // 
                style={styles.checkbox}
                />
                <Text style={styles.Text}>  쉐어링 유의사항에 동의합니다. (필수)</Text>
            </View>
            <View style={styles.checkboxContainer}>
                <CheckBox
                label = ""
                value={isSelected1} // Checkbox 의 value는 isSelected이다.
                onChange={(value) => setSelection2(value)} // 
                style={styles.checkbox}
                />
                <Text style={styles.Text}>  본사의 약관에 동의합니다. (필수)</Text>
            </View>
           
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingLeft : 20,
      borderBottomWidth:1,
      borderBottomColor:"#BDBDBD",
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

export default Promise;