import React from "react";
import Loading from "./components/Loading";
import FirstSlide from "./components/FirstSlide";
  
export default class extends React.Component{
  state={
    isLoading : true
  };
  componentDidMount= async() => {  
    // 1,000가 1초
    setTimeout(() => {this.setState({isLoading: false})},2000);
  }

  render(){
    if(this.state.isLoading){
      return <Loading/>
    }else{
      return <FirstSlide/>;
    }
  }
}  