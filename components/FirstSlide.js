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
              <Text style = {[styles.slideTextTitle]}>111ì²˜ìŒ?˜¤?…¨êµ°ìš”?</Text>
            </View>
            <View style={[styles.slideContainer,styles.slide2]}>
              <Text>ì§?ê¸ˆë???„° ?‘¸?“œ?‰?–´ë§ì— ????•´ ê°„ë‹¨?ˆ ?„¤ëª…í•´ ?“œë¦´ê²Œ?š”!</Text>
              <Text>?‘¸?“œ?‰?–´ë§ì´????</Text>
              <Text style = {[styles.slideTextTitle]}>{"\n"}"ë¨¹ì„ ?ˆ˜ ?ˆì§?ë§? ë¨¹ì?? ?•Š?Š” ?Œ?‹?„ ?‚˜?ˆ„?–´?„œ{"\n"} ?Œ?‹ë¬¼ì“°? ˆê¸°ë?? ì¤„ì´ê¸°ìœ„?•œ ì·¨ì???˜ ?™˜ê²½ìš´?™"{"\n"}</Text>
              <Text>?„ ?œ»?•©?‹ˆ?‹¤.</Text>
            </View>
            <View style={[styles.slideContainer,styles.slide3]}>
              <Text style={[styles.slideTextSub]}>ê·¸ë ‡?‹¤ë©?</Text>
              <Text> "ë¡œì»¬?‰?–´ë§?"?´????</Text>
              <Text>{"\n"}"?´?Ÿ¬?•œ ?‘¸?“œ?‰?–´ë§ì„ ?‚´ ì£¼ë???´?›ƒê³?{"\n"} ?†?‰½ê²? ì§„í–‰?•  ?ˆ˜ ?ˆ?„ë¡? ?„???ì£¼ëŠ” ?•±"{"\n"}</Text>
              <Text>?´?—?š” !</Text>
            </View>
            <View style={[styles.slideContainer,styles.slide4]}>
              <View style={[styles.slideText]}>
                <Text style={[styles.slideTextTitle]}>ì§?ê¸? ë°”ë¡œ{"\n"} ?‹œ?‘?•´ë³´ì„¸?š” !</Text>
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