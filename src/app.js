import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, Header, Spinner } from './components/common';
import LoginForm from './components/LoginForm';
import { firebaseConfig } from './config.js';

class App extends Component {
  state = { loggedIn : null }

  componentWillMount() {
    firebase.initializeApp(firebaseConfig);

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({loggedIn : true});
      } else {
        this.setState({loggedIn : false});
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Button onPress={() => firebase.auth().signOut()}>
            Log out
          </Button>
        );
        break;
      case false:
        return <LoginForm />;
        break;
      default:
        return <Spinner size='large' />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Auth" />
        {this.renderContent()}
      </View>
    )
  }
}

export default App;
