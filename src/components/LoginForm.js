import React, { Component } from 'react';
import { Text, View, TextInput } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
  state = { email : '', password : '', error : '', loading : false };

  onButtonPress = () => {
    const { email, password } = this.state;

    this.setState({ error : '', loading : true});

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch((err) => {
        console.log('sign in err', err);
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch((err) => {this.onLoginFail(err.message)})
      })
  }

  onLoginSuccess = () => {
    this.setState({
      email : '',
      password : '',
      error : '',
      loading : false
    })
  }

  onLoginFail = (message) => {
    this.setState({
      error : message,
      loading : false
    })
  }

  renderButton = () => {
    if (this.state.loading) {
      return (
        <Spinner/>
      )
    }
    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Login
      </Button>
    )
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            value = {this.state.text}
            onChangeText = {email => this.setState({ email })}
            labelText = 'Email'
            placeholderText = 'user@gmail.com'
          />
        </CardSection>

        <CardSection>
          <Input
            value={this.state.password}
            onChangeText = {password => this.setState({password})}
            labelText = 'Password'
            placeholderText = 'password'
            isPasswordField = {true}
          />
        </CardSection>

        <CardSection>
          {this.renderButton()}
        </CardSection>

        <CardSection>
          <Text style={styles.errorStyle}>
            {this.state.error}
          </Text>
        </CardSection>
      </Card>
    )
  }
}

const styles = {
    errorStyle : {
      flex : 1,
      height : 20,
      margin : 5,
      justifyContent : 'center',
      color : 'red',
      alignSelf : 'center'
    }
}

export default LoginForm;
