import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import { Camera } from 'expo-camera';
import axios from 'axios';

export default function CameraScan() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  const takePicture = async () => {
        const options = {quality: 1, base64: true};
        const scan_image_base64 = await camera.takePictureAsync(options);
        const ApiKey = "1616255202Ln7L1FSlgmNzqzHb0FiyTbW2DMCl8bXhsWd79VSy";
        const country_code = "ROU";
        const card_code = "MRZ";
        const headers = {
          "Api-Key": ApiKey
        }
        const response = await axios.post("https://accurascan.com/api/v4/ocr", {country_code: country_code, card_code: card_code, scan_image_base64: scan_image_base64.base64}, {headers: headers});
        console.log(response.data);
};

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type} autoFocus="on" ref={ref => {camera = ref;}}>
      <View style={{flex:0.1, justifyContent:"flex-end"}}>
        <Text style={{fontWeight:"bold", textAlign:"center", fontSize:20, textDecorationLine:"underline",shadowColor: "#000",shadowOffset: { width: 0, height: 7},
                        shadowOpacity: 0.43,
                        shadowRadius: 9.51,
                        elevation: 15,}}>Scan your ID card for identity approval</Text>
      </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => takePicture()} style={styles.buttonCapture}>
                <Text style={{textAlign:"center", fontSize:20, letterSpacing:2, color:"white"}}>SCAN</Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 0.9,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent:"center",
    margin: 20,
  },
  buttonCapture: {
    flex: 0.2,
    alignSelf:"flex-end",
    justifyContent:"center",
    marginBottom: 50,
    backgroundColor:'#C47C00',
    borderRadius: 1000,
    width:200,
    height:105,
    padding:20,
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 7,
},
shadowOpacity: 0.43,
shadowRadius: 9.51,

elevation: 15,

elevation: 6,
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
});
