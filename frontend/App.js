import React, { Component } from 'react';
import { Animated, View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import LottieView from 'lottie-react-native';

export default class App extends Component {
  
    state = {
      fadeAnimation: new Animated.Value(0),
    };
  
    fadeIn = () => {
      Animated.timing(this.state.fadeAnimation, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true
      }).start();
    };

    render() {
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
                    source={require('./assets/splash.json')}
                    autoPlay
                    loop={false}
                    speed={0.5}
                    onAnimationFinish={() => {
                        this.fadeIn();
                    }}
                />
                <Animated.View style={{opacity:this.state.fadeAnimation}}>
                  <TouchableOpacity title="VALIDATE IDENTITY" style={styles.button}>
                      <Text style={{fontSize:25, fontFamily:"Helvetica", color:"white", letterSpacing:1}}>VALIDATE IDENTITY</Text>
                    </TouchableOpacity>
                </Animated.View>
                  
                
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
  }

});