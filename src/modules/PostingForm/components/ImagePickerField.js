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

const ImagePickerField = ({ image = null, setImage }) => {
  const pickImage = () => {
    if (Platform.OS === "web") {
      // Web: use input element
      const input = document.createElement("input");
      input.type = "file";
      input.accept = "image/*";
      input.onchange = (e) => {
        const file = e.target.files[0];
        if (file) {
          const selected = URL.createObjectURL(file);
          setImage(selected);
        }
      };
      input.click();
    } else {
      // Mobile: use react-native-image-picker
      launchImageLibrary(
        { mediaType: "photo", selectionLimit: 1 },
        (response) => {
          if (!response.didCancel && !response.errorCode) {
            const selected = response.assets[0]?.uri;
            setImage(selected);
          }
        }
      );
    }
  };

  const removeImage = () => {
    setImage(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Upload Image</Text>
      <View style={styles.imageGrid}>
        {image ? (
          <View style={styles.imageWrapper}>
            <Image source={{ uri: image }} style={styles.image} />
            <TouchableOpacity
              style={styles.removeBtn}
              onPress={removeImage}
            >
              <Text style={{ color: "white", fontSize: 12 }}>✕</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity onPress={pickImage} style={styles.addButton}>
            <Text style={{ fontSize: 24 }}>+</Text>
          </TouchableOpacity>
        )}
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
    borderColor: "#ccc",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ImagePickerField;
