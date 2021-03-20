import React, { Component } from 'react';
import { Animated, View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import LottieView from 'lottie-react-native';

export default function Home({navigation}) {
  
    state = {
      fadeAnimation: new Animated.Value(0),
    };
  
    fadeIn = () => {
      Animated.timing(state.fadeAnimation, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true
      }).start();
    };

        return (
            <View
                style={{
                    flex: 1,
                    marginTop: -250,
                    backgroundColor: '#F7E7BA',
                    justifyContent: 'flex-end',
                    paddingBottom: 70
                }}
            >
                <LottieView
                    source={require('../assets/splash.json')}
                    autoPlay
                    loop={false}
                    speed={0.5}
                    onAnimationFinish={() => {
                        fadeIn();
                    }}
                />
                <Animated.View style={{opacity:state.fadeAnimation}}>
                  <TouchableOpacity title="VALIDATE IDENTITY" style={styles.button} onPress={() => navigation.navigate("IntroduceEmail")}>
                      <Text style={styles.text}>VALIDATE IDENTITY</Text>
                    </TouchableOpacity>
                </Animated.View>
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
    fontSize:25,
    color:"white", 
    letterSpacing:1
  }

});