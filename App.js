'use strict'

/**
 * 
 */

import React from 'react';
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import {
  lightest,
  verylight,
  light,
  mediumlight,
  medium,
  mediumdark,
  dark,
  darker,
  verydark,
  darkest
} from './colorpalette'

export default class App extends React.Component {
  state = {
    email: '',
    password: '',
  }

  onLayout(e) {
    const {width, height} = Dimensions.get('window')
    console.log(width, height)
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.spacer} />
          <Text style={styles.title}>🗃 Recipe.Report</Text>
          <View style={styles.spacer} />
          <View style={styles.row}>
            <View style={styles.form}>
              <Text>Email Address</Text>
              <TextInput
                value={this.state.email}
                onChangeText={email => this.setState({email})}
                underlineColorAndroid='transparent'
                style={styles.input}
              />
              <Text>Password</Text>
              <TextInput
                ref={ref => (this.passwordInput = ref)}
                value={this.state.password}
                onChangeText={password => this.setState({password})}
                underlineColorAndroid='transparent'
                style={styles.input}
              />
              <View style={styles.spacer} />
              <Button
                onPress={this._doLogin}
                title='LOGIN'
                color='#607D8B'
                accessibilityLabel="Login to Recipe.Report"
              />
            </View>
          </View>
          <View style={styles.spacer} />
        </View>
      </ScrollView>
    );
  }

  _doLogin = async () => {
    try {
      console.log('doing login now')
      const { email, password } = this.state
      let res = await fetch('http://192.168.0.5:1138/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      })
      let token = JSON.parse(res._bodyText).json.token
      console.log(token)
    } catch (err) {
      console.error(err)
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  spacer: {
    flex: 0.2,
    padding: 20,
  },
  row: {
    flexDirection:'row',
  },
  form: {
    flex: 0.8,
    padding: 20,
    backgroundColor: lightest,
  },
  title: {
    flex: 0.8,
    padding: 20,
    fontFamily: 'sans-serif',
    fontSize: 30,
    color: darkest,
    alignSelf: 'center',
  },
  input: {
    borderWidth: 2,
    borderColor: 'lightgrey',
  },
  button: {
    backgroundColor: medium,
    borderRadius: 10,
    marginTop: 20,
  },
  buttontext: {
    textAlign: 'center',
    fontFamily: 'sans-serif',
  },
});
