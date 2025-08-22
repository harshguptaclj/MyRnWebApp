import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Platform } from "react-native";
import { useNavigate } from "react-router-dom"; // only for web routing

export default function Header({ title }) {
  const navigate = useNavigate?.(); // web navigation
  const handleBack = () => {
    if (Platform.OS === "web") {
      navigate ? navigate(-1) : window.history.back();
    } else {
      // For mobile react-navigation, you can use navigation.goBack()
      // Assuming you pass `navigation` prop from your screen
      // navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleBack} style={styles.backButton}>
        <Text style={styles.backText}>◀</Text>
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  backButton: {
    marginRight: 12,
  },
  backText: {
    fontSize: 16,
    color: "#1e1a1fff",
  },
  title: {
    paddingLeft: 15,
    fontSize: 18,
    fontWeight: "bold",
  },
});
