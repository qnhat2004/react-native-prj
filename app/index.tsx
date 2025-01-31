import { useState } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import ImageViewer from "@/components/ImageViewer";
import Button from "@/components/Button";
import * as ImagePicker from "expo-image-picker";
import IconButton from "@/components/IconButton";
import CircleButton from "@/components/CircleButton";

const PlaceholderImage = require("../assets/images/background-image.png"); // default image

export default function Index() {
  const [showAppOptions, setShowAppOptions] = useState(false) 
  const [selectedImage, setSelectedImage] = useState(null)

  const onReset = () => {
    setShowAppOptions(false)
  }

  const onAddSticker = () => {
  
  }

  const onSaveImageAsync = async () => {

  }

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri) 
      setShowAppOptions(true)
    } else {
      alert("No image selected");
    }
  };


  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer PlaceholderImageSource={PlaceholderImage} selectedImage={selectedImage}/>
      </View>
      {showAppOptions ? 
      <View style={styles.optionsContainer}>
        <View style={styles.optionsRow}>
        <IconButton icon="refresh" label="Reset" onPress={onReset}/>
        <CircleButton onPress={onAddSticker}/>
        <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync}/>
      </View>  
      </View>
       : (
          <View style={styles.footerContainer}>
            <Button label="Choose a photo" onPress={pickImageAsync}/>
            <Button label="Use this photo" onPress={() => setShowAppOptions(true)}/>
          </View>
        )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center"
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center"
  },
  optionsContainer: {
    position: "absolute",
    bottom: 80,
  },
  optionsRow: {
    flexDirection: "row",
    alignItems: "center",
  }
});
