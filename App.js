import React from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, View } from 'react-native';
import { Button, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'

export default class App extends React.Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={{flex: 0.2, padding: 20}}></View>
          <View style={styles.row}>
            <View style={styles.box}>
              <Image
                source={require('./icons/icon_512.png')}
                style={styles.logo}
              />
            </View>
          </View>
          <View style={{flex: 0.2, padding: 20}}></View>
          <View style={styles.row}>
            <View style={styles.form}>
              <FormLabel>Email Address</FormLabel>
              <FormInput />
              <FormLabel>Password</FormLabel>
              <FormInput />
              <Button
                icon={{name: 'shield', size: 15, type: "octicon"}}
                buttonStyle={{backgroundColor: 'skyblue', borderRadius: 10, marginTop: 20}}
                textStyle={{textAlign: 'center'}}
                title={`SUBMIT`}
              />
            </View>
          </View>
          <View style={{flex: 0.2, padding: 20}}></View>
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
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection:'row',
  },
  box: {
    flex: 0.8,
    padding: 20,
    backgroundColor: '#eeeeee',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: width,
    height: height * 0.2,
    resizeMode: 'contain',
  },
  form: {
    flex: 0.8,
    padding: 20,
    backgroundColor: '#eeeeee',
  },
});
