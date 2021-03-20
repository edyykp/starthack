import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import {Input} from 'react-native-elements';
import {useDispatch} from 'react-redux';
import AnimatedLoader from "react-native-animated-loader";
import {sendEmail} from '../actions/userActions';

export const IntroduceEmail = () => {
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(0);

    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        if(email != "") {
            dispatch(sendEmail(email));
            setSubmitted(1);
        }
    }

        return (
            !submitted ?
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
                <Input placeholder="Email address" color='black' leftIcon={{ type: 'font-awesome', name: 'address-card' }} size={30} onChangeText={(x) => setEmail(x)}/>
                <TouchableOpacity style={styles.button} onPress={submitHandler}>
                    <Text style={styles.text}>SUBMIT</Text>
                </TouchableOpacity>
            </View>
            :
            <View style={{
                flex: 1,
                backgroundColor: '#F7E7BA',
                justifyContent: 'flex-start',
                paddingTop: 300,
                paddingLeft:20,
                paddingRight: 20
            }}>
            <View style={{flex:0}}>
                <AnimatedLoader 
                        visible={true}
                        overlayColor="rgba(255,255,255,0.75)"
                        source={require("../assets/loader.json")}
                        animationStyle={styles.lottie}
                        speed={1}
                    />
            </View>
            <View>
                <Text style={styles.text}>We sent you a confirmation email. Please press the link in your email to confirm your email address.</Text>
            </View>
                
            </View>
        )
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
    fontSize:18,
    fontFamily:"Helvetica", 
    color:"black",
    textAlign:"center",
    marginTop:20
  },
  lottie: {
    width: 100,
    height: 100
  }

});