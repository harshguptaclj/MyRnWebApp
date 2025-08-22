import React from 'react';
import { View, Text, Pressable, StyleSheet, Platform, Image } from 'react-native';
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";

const SearchBarButton = ({ placeholder = "Search here..." }) => {
  const navigate = useNavigate();
  return (
    <Pressable
      onPress={() => navigate("/search-form")}
      style={({ pressed }) => [
        styles.container,
        pressed && { opacity: 0.8, transform: [{ scale: 0.98 }] },
      ]}
    >
      <Image
        source={{ uri: '/icons/SearchIcon.png' }}
        style={styles.icon}
        resizeMode="contain"
        />

      <Text style={styles.text}>{placeholder}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',

    paddingHorizontal: 12,
    paddingVertical: Platform.select({ ios: 10, default: 8 }),
    borderRadius: 12,
    backgroundColor: '#F2F3F5',
    borderWidth: 1,
    borderColor: '#E3E5E7',
  },
  icon: {
    marginRight: 8,
    opacity: 0.7,
    height: 20,
    width: 20
  },
  text: {
    fontSize: 16,
    color: '#7A7A7A',
  },
});

export default SearchBarButton;
