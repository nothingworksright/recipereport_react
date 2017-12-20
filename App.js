import React from 'react';
import {
  Button,
  Dimensions,
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

async function doLogin () {
  try {
    console.log('doing login now')
    let res = await fetch('http://192.168.0.5:1138/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: 'yourValue',
        password: 'yourOtherValue',
      }),
    })
    console.log(res)
  } catch (err) {
    console.error(err)
  }
}

export default class App extends React.Component {
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
                underlineColorAndroid='transparent'
                style={styles.input}
              />
              <Text>Password</Text>
              <TextInput
                underlineColorAndroid='transparent'
                style={styles.input}
              />
              <View style={styles.spacer} />
              <Button
                onPress={doLogin}
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
}

var width = Dimensions.get("window").width;
var height = Dimensions.get("window").height;

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
