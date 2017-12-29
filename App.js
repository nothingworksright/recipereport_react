'use strict'

/**
 * Recipe.Report mobile app, built using React Native
 * @author {@link https://github.com/jmg1138 jmg1138}
 */

import React from 'react'
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native'
import {
  Button,
} from 'react-native-elements'
import {
  mostlight,
  verylight,
  light,
  mediumlight,
  medium,
  mediumdark,
  dark,
  darker,
  verydark,
  mostdark
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
          <Text style={styles.title}>🗃 Recipe.Report</Text>
          <Text style={styles.text}>Email Address</Text>
          <TextInput
            value={this.state.email}
            onChangeText={email => this.setState({email})}
            underlineColorAndroid='transparent'
            style={styles.input}
          />
          <Text style={styles.text}>Password</Text>
          <TextInput
            ref={ref => (this.passwordInput = ref)}
            value={this.state.password}
            onChangeText={password => this.setState({password})}
            underlineColorAndroid='transparent'
            style={styles.input}
          />
          <Button
            containerViewStyle={styles.buttonContainer}
            buttonStyle={styles.button}
            textStyle={styles.buttonText}
            onPress={this._doLogin}
            title='LOGIN'
            color='#607D8B'
            accessibilityLabel="Login to Recipe.Report"
          />
          <View style={styles.linkContainer}>
            <Text style={styles.linkRegister}>Register</Text>
            <Text style={styles.linkForgot}>Forgot Password?</Text>
          </View>
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
    justifyContent: 'center',
  },
  title: {
    margin: 10,
    fontFamily: 'System',
    fontSize: 40,
    fontWeight: '900',
    color: dark,
    alignSelf: 'center',
  },
  text: {
    flexDirection:'row',
    flex: 0.8,
    margin: 10,
    marginBottom: 0,
    fontFamily: 'System',
    fontSize: 20,
    fontWeight: '900',
    color: dark,
    alignSelf: 'flex-start',
  },
  input: {
    margin: 10,
    padding: 10,
    marginTop: 0,
    fontFamily: 'System',
    fontSize: 20,
    color: dark,
    alignSelf: 'stretch',
    borderWidth: 1,
    borderColor: mostdark
  },
  buttonContainer: {
    width: '100%',
    marginLeft: 0,
  },
  button: {
    margin: 10,
    marginTop: 20,
    backgroundColor: verylight,
    borderWidth: 1,
    borderColor: mostdark
  },
  buttonText: {
    textAlign: 'center',
    fontFamily: 'System',
    fontSize: 20,
    fontWeight: '900',
    color: dark,
    alignSelf: 'stretch',
  },
  linkContainer: {
    flexDirection:'row',
    flex: 0.8,
  },
  linkRegister: {
    margin: 10,
    fontFamily: 'System',
    fontSize: 20,
    fontWeight: '100',
    color: 'blue',
    alignSelf: 'flex-start',
    textDecorationLine: 'underline',
  },
  linkForgot: {
    margin: 10,
    fontFamily: 'System',
    fontSize: 20,
    fontWeight: '100',
    color: 'blue',
    alignSelf: 'flex-end',
    textDecorationLine: 'underline',
  }
});
