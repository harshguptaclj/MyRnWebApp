import React from "react";
import { View, Text, Button } from "react-native";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import HomePageContainer from "./modules/HomePage/HomePageContainer";
import PostingFormContainer from "./modules/PostingForm/PostingFormContainer";
import SearchFormContainer from "./modules/Search/SearchFormContainer";
import SRPContainer from "./modules/SRP/SRPContainer";





// ✅ Main App Component
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePageContainer />} />
        <Route path="/post-property" element={<PostingFormContainer />} />
        <Route path="/search" element={<SRPContainer />} />
        <Route path="/search-form" element={<SearchFormContainer />} />
      </Routes>
    </Router>
  );
}