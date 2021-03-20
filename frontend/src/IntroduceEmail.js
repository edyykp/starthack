import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import {Input} from 'react-native-elements';

export default class IntroduceEmail extends Component {

    render() {
        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: '#F7E7BA',
                    justifyContent: 'flex-start',
                    paddingTop: 300,
                    paddingLeft:20,
                    paddingRight: 20
                }}
            >
                <Input placeholder="Email address" color='black' leftIcon={{ type: 'font-awesome', name: 'address-card' }} size={30} email/>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text}>SUBMIT</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create ({
  button: {
    backgroundColor: "#8D6114",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    alignSelf: "center",
    borderRadius: 10,
    height:70,
  },
  text: {
    fontSize:23,
    fontFamily:"Helvetica", 
    color:"white", 
    letterSpacing:7
  }

});