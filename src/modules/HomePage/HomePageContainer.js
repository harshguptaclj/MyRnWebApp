import React from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { View, Text, Button } from 'react-native';


const HomePageContainer = () => {
  const navigate = useNavigate();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Welcome to Roommate Finder</Text>
      <Button title="Post Property" onPress={() => navigate("/post-property")} />
      <Button title="Search" onPress={() => navigate("/search-form")} />
    </View>
  );
}

export default HomePageContainer
