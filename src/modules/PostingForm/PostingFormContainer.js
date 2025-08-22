import React from 'react'
import { View, Text, Button } from 'react-native';
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";


const PostingFormContainer = () => {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 22, marginBottom: 20 }}>Post a Property</Text>

      <Text>Name:</Text>
      <input type="text" style={{ marginBottom: 10, width: "100%", padding: 8 }} />

      <Text>Location:</Text>
      <input type="text" style={{ marginBottom: 10, width: "100%", padding: 8 }} />

      <Text>Rent:</Text>
      <input type="number" style={{ marginBottom: 10, width: "100%", padding: 8 }} />

      <Text>Description:</Text>
      <textarea style={{ marginBottom: 10, width: "100%", padding: 8, height: 100 }} />

      <Button title="Submit" onPress={() => alert("Property Submitted 🚀")} />
    </View>
  );
}

export default PostingFormContainer


