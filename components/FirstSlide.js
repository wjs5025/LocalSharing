import React, {Component} from 'react';
import { Platform, StyleSheet, View, Text, Button } from 'react-native';
import Swiper from "react-native-web-swiper";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }, 
  slideContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  slide1: {
    backgroundColor: "rgba(20,20,200,0.3)"
  },
  slide2: {
    backgroundColor: "rgba(20,200,20,0.3)"
  },
  slide3: {
    backgroundColor: "rgba(200,20,20,0.3)"
  },
  slide4: {
    backgroundColor: "#903372",
  },
  slideTextTitle:{
    color : "blue",
    fontSize : 30,
  },
  slideTextSub :{
    color : "red",
  }
});

class FirstSlide extends Component {
  render(){
    return (
      <View style={styles.container}>
        <View style={{ flex: 1 }}>
          <Swiper
            index={1}
            >
            <View style={[styles.slideContainer,styles.slide1]}>
              <Text style = {[styles.slideTextTitle]}>111처음?��?��군요?</Text>
            </View>
            <View style={[styles.slideContainer,styles.slide2]}>
              <Text>�?금�???�� ?��?��?��?��링에 ????�� 간단?�� ?��명해 ?��릴게?��!</Text>
              <Text>?��?��?��?��링이????</Text>
              <Text style = {[styles.slideTextTitle]}>{"\n"}"먹을 ?�� ?���?�? 먹�?? ?��?�� ?��?��?�� ?��?��?��?��{"\n"} ?��?��물쓰?��기�?? 줄이기위?�� 취�???�� ?��경운?��"{"\n"}</Text>
              <Text>?�� ?��?��?��?��.</Text>
            </View>
            <View style={[styles.slideContainer,styles.slide3]}>
              <Text style={[styles.slideTextSub]}>그렇?���?</Text>
              <Text> "로컬?��?���?"?��????</Text>
              <Text>{"\n"}"?��?��?�� ?��?��?��?��링을 ?�� 주�???��?���?{"\n"} ?��?���? 진행?�� ?�� ?��?���? ?��???주는 ?��"{"\n"}</Text>
              <Text>?��?��?�� !</Text>
            </View>
            <View style={[styles.slideContainer,styles.slide4]}>
              <View style={[styles.slideText]}>
                <Text style={[styles.slideTextTitle]}>�?�? 바로{"\n"} ?��?��?��보세?�� !</Text>
                <Button title="Hello"></Button>
              </View>
            </View>
          </Swiper>
        </View>
      </View>
    );
  }
}
  export default FirstSlide;