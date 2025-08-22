import React from 'react'
import { View, Text, Button } from 'react-native';
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";


const SearchFormContainer = () => {
   const navigate = useNavigate();
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 22, marginBottom: 20 }}>Search</Text>

     

      <Button title="Search" onPress={() => navigate("/search")} />
    </View>
  );
}

export default SearchFormContainer


