import React from 'react'
import { useNavigate } from "react-router-dom";
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
 
const HomePageContainer = () => {
  const navigate = useNavigate();
 
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Roommate Finder</Text>
         <Image
          source={{ uri: '/icons/Logo.jpg' }}
          style={styles.icon}
          resizeMode="contain"
        />
        <TouchableOpacity
          style={[styles.button, styles.primaryButton]}
          onPress={() => navigate("/post-property")}
        >
          <Text style={styles.buttonText}>Post Property</Text>
        </TouchableOpacity>
 
        <TouchableOpacity
          style={[styles.button, styles.secondaryButton]}
          onPress={() => navigate("/search-form")}
        >
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
    </View>
  );
};
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 50,
    minHeight: "100vh",
    backgroundColor: 'rgb(227 228 224)'
  },
 
  icon: {
    height: 300,
    width: 300,
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 8,
    textAlign: "center"
  },
  subtitle: {
    fontSize: 14,
    color: "#555",
    marginBottom: 20,
    textAlign: "center"
  },
  button: {
    width: "100%",
    paddingVertical: 12,
    borderRadius: 12,
    marginVertical: 8,
    alignItems: "center"
  },
  primaryButton: {
    backgroundColor: "#007bff",
  },
  secondaryButton: {
    backgroundColor: "#28a745",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  }
});
 
export default HomePageContainer;