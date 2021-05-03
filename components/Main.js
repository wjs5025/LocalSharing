import React, { Component } from 'react';
import { WebView } from 'react-native-webview'
import { Alert } from 'react-native';

const html = `
    <script>
      function send(){
        window.postMessage('hello react-native!!');
      }
    </script>
    <button onclick="send()">Send</button>
`;

export default class App extends Component {
  render() {
    return (
        <WebView style={{top:50}}
          source={{html}}
          onMessage={(event)=> Alert.alert(event.nativeEvent.data) }
        />
    );
  }
}
