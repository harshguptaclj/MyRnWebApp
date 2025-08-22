import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Platform,
  StyleSheet,
} from "react-native";
import { launchImageLibrary } from "react-native-image-picker";

const ImagePickerField = ({ image = "", setImages }) => {
  const pickImage = () => {
    if (Platform.OS === "web") {
      // Web: use input element
      const input = document.createElement("input");
      input.type = "file";
      input.accept = "image/*";
      input.multiple = true;
      input.onchange = (e) => {
        const files = Array.from(e.target.files);
        const selected = files.map((file) => URL.createObjectURL(file));
        setImages([...images, ...selected]);
      };
      input.click();
    } else {
      // Mobile: use react-native-image-picker
      launchImageLibrary(
        { mediaType: "photo", selectionLimit: 5 },
        (response) => {
          if (!response.didCancel && !response.errorCode) {
            const selected = response.assets.map((asset) => asset.uri);
            setImages([...images, ...selected]);
          }
        }
      );
    }
  };

  const removeImage = (index) => {
    setImages(images.filter((_, i) => i !== index));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Upload Images</Text>
      <View style={styles.imageGrid}>
        {images.map((uri, idx) => (
          <View key={idx} style={styles.imageWrapper}>
            <Image source={{ uri }} style={styles.image} />
            <TouchableOpacity
              style={styles.removeBtn}
              onPress={() => removeImage(idx)}
            >
              <Text style={{ color: "white", fontSize: 12 }}>✕</Text>
            </TouchableOpacity>
          </View>
        ))}
        <TouchableOpacity onPress={pickImage} style={styles.addButton}>
          <Text style={{ fontSize: 24 }}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginVertical: 12 },
  label: { 
    fontSize: 16, 
    fontWeight: "500", 
    marginBottom: 8 
  },
  imageGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  imageWrapper: {
    position: "relative",
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  removeBtn: {
    position: "absolute",
    top: -6,
    right: -6,
    backgroundColor: "red",
    borderRadius: 12,
    paddingHorizontal: 4,
    paddingVertical: 2,
  },
  addButton: {
    width: 80,
    height: 80,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc", // match main form
    alignItems: "center",
    justifyContent: "center",
  },
  addButtonText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#333",
  },
});

export default ImagePickerField;
