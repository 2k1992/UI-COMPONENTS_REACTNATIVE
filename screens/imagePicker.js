import React, { useState } from "react";
import { View, Button, Image, StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  placeholderContainer: {
    width: 200,
    height: 200,
    borderWidth: 1,
    borderColor: "gray",
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  placeholderText: {
    color: "gray",
    fontSize: 16,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
});

const ImagePickerScreen = () => {
  const [imageURI, setImageURI] = useState(null);

  const selectImage = async () => {
    try {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission denied");
        return;
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
      });

      if (!result.canceled) {
        setImageURI(result.assets[0].uri);
      }
    } catch (error) {
      console.log("Error picking an image:", error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.placeholderContainer}>
        {!imageURI && (
          <Text style={styles.placeholderText}>Select an image</Text>
        )}
        {imageURI && <Image source={{ uri: imageURI }} style={styles.image} />}
      </View>
      <Button title="Select Image" onPress={selectImage} />
    </View>
  );
};

export default ImagePickerScreen;
