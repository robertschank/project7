import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';

import { Button, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm';
import MyCamera from './components/MyCamera';
import Home from './components/Home';
import Router from './Router';

export default class App extends Component {

  componentWillMount() {
  this.setState({ loggedIn: null });
    const config = {
      apiKey: "AIzaSyC_HvfGzLg4FDNNT6z8EyYaMFBmZwu8C8w",
      authDomain: "rncamera-11fe0.firebaseapp.com",
      databaseURL: "https://rncamera-11fe0.firebaseio.com",
      projectId: "rncamera-11fe0",
      storageBucket: "rncamera-11fe0.appspot.com",
      messagingSenderId: "234490296356"
    };
  firebase.initializeApp(config);

    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          this.setState({ loggedIn: true });
        } else {
          this.setState({ loggedIn: false });
        }
      });
    }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
      return (
          <Home />
      );
      case false:
        return <LoginForm />;
      default:
        return (
          <View alignSelf='center'>
            <Spinner size="large" />
          </View>);
    }
  }

  render() {
    return (
      <View style={{alignItems: 'stretch',
                    flex: 1,
                    backgroundColor: 'skyblue'}}>
        {this.renderContent()}
      </View>
      //<Router />
    )
  }
}