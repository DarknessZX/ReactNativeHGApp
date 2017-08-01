import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, Header } from './components/common';
import LoginForm from './components/LoginForm';
import { firebaseConfig } from './config.js';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyCMTNFrlzkXNmQ51cUu3AwVvudYmrnTd6E",
      authDomain: "auth-eb178.firebaseapp.com",
      databaseURL: "https://auth-eb178.firebaseio.com",
      projectId: "auth-eb178",
      storageBucket: "auth-eb178.appspot.com",
      messagingSenderId: "1098401480556"
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Auth" />
        <LoginForm />
      </View>
    )
  }
}

export default App;
