import React from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  View
} from 'react-native';
import {
  Button,
  FormLabel,
  FormInput,
  FormValidationMessage
} from 'react-native-elements'

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
          <View style={styles.row}>
            <View style={styles.frame}>
              <Image
                source={require('./icons/icon_640.png')}
                style={styles.logo}
              />
            </View>
          </View>
          <View style={styles.spacer} />
          <View style={styles.row}>
            <View style={styles.form}>
              <FormLabel>Email Address</FormLabel>
              <FormInput />
              <FormLabel>Password</FormLabel>
              <FormInput />
              <Button
                icon={{name: 'shield', size: 15, type: "octicon"}}
                buttonStyle={styles.button}
                textStyle={{textAlign: 'center'}}
                title={`LOGIN`}
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
    backgroundColor: '#ffffff',
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
  frame: {
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
  button: {
    backgroundColor: 'skyblue',
    borderRadius: 10,
    marginTop: 20,
  },
});
