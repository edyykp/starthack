import React, { useEffect} from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import {WaveIndicator} from 'react-native-indicators';
import {getVerification} from '../actions/userActions';
import {useDispatch} from 'react-redux';

export const Waiting = ({navigation, email}) => {
    const { userInfo } = getVerification;

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getVerification({email}));
        if(userInfo) {
            navigation.navigate("CameraScan");
         console.log("waiting");
        }
        navigation.navigate("CameraScan");
      });

        return (
            <View style={{
                flex: 1,
                flexDirection: "column"
            }}>
                <View style={{
                    flex: 4,
                    backgroundColor: '#F7E7BA',
                    justifyContent: 'flex-start',
                    paddingTop: 300,
                    paddingLeft:20,
                    paddingRight: 20
                }}>
                
                    <Text style={styles.textWaiting}>We sent you a confirmation email. Please press the link in your email to confirm your email address.</Text>
                    <WaveIndicator color="orange" style={{marginTop:-300}} size={80}/>
                
                </View>
                <View style={{
                    flex:1,
                    backgroundColor: '#F7E7BA',
                }}>
                    <TouchableOpacity style={styles.cancel} onPress={() => navigation.navigate("IntroduceEmail")}>
                        <Text style={styles.cancelText}>Cancel</Text>
                    </TouchableOpacity>
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
    height:70
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
    fontSize: 17 ,shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    
    elevation: 15, 
  },
  cancel: {
      alignSelf:"center",
      zIndex: 100
  },
  cancelText: {
      color:"red",
      textDecorationLine: "underline",
      fontSize:17,
      shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 7,
},
shadowOpacity: 0.43,
shadowRadius: 9.51,

elevation: 15,
  }

});