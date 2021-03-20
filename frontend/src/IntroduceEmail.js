import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import {Input} from 'react-native-elements';
import {useDispatch} from 'react-redux';
import {sendEmail} from '../actions/userActions';
import {WaveIndicator} from 'react-native-indicators';

export const IntroduceEmail = ({navigation}) => {
    const [email, setEmail] = useState("");
    const dispatch = useDispatch();

    const {loading, userInfo, error } = sendEmail;

    useEffect(() => {
        if(userInfo) {
            navigation.navigate("Waiting", {email: email});
        }
        

        return () => {

        };
    }, [userInfo]);

    const submitHandler = (e) => {
        e.preventDefault();
        if(email != "") {
            dispatch(sendEmail({email}));
            navigation.navigate("Waiting", {email: "test"});
        }
    }
    
        return (
            loading ?
            <WaveIndicator color="orange" style={{marginTop:-300}} size={80}/>
            :
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
                {error && <Text>{error.message}</Text>}
                <Input placeholder="Email address" color='black' leftIcon={{ type: 'font-awesome', name: 'address-card' }} size={30} onChangeText={(x) => setEmail(x)}/>
                <TouchableOpacity style={styles.button} onPress={submitHandler}>
                    <Text style={styles.text}>SUBMIT</Text>
                </TouchableOpacity>
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
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 7,
},
shadowOpacity: 0.43,
shadowRadius: 9.51,

elevation: 15,
  },
  text: {
    fontSize:18,
    color:"white",
    textAlign:"center",
    letterSpacing: 3
  },
  lottie: {
    width: 100,
    height: 100,
    zIndex: 1
  },
  textWaiting: {
    textAlign:"center",
    marginTop:20,
    color:"grey",
    fontSize: 17  
  },
  cancel: {
      alignSelf:"center",
      zIndex: 100
  },
  cancelText: {
      color:"red",
      textDecorationLine: "underline",
      fontSize:17
  }

});