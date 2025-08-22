import React from "react";
import { View, Text, Button } from "react-native";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import HomePageContainer from "./modules/HomePage/HomePageContainer";
import PostingFormContainer from "./modules/PostingForm/PostingFormContainer";





// ✅ Main App Component
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePageContainer />} />
        <Route path="/post-property" element={<PostingFormContainer />} />
      </Routes>
    </Router>
  );
}
