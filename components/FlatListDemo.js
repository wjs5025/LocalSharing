import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const FlatListDemo = ({num}) => {
return (
		<View style={styles.container}>
			<Text style={styles.text}>{num}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		borderBottomWidth: 1,
		height: 100,
	},
	text: {
		textAlign: 'center',
		textAlignVertical: 'center',
		fontSize: 50,
	},
});

export default FlatListDemo;