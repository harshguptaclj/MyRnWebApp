import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
import SearchBar from '../CommonComponents/SearchBar';
import ListingCard from './components/ListingCard';
import Header from '../CommonComponents/Header';
import { useLocation } from 'react-router-dom';

const SRPContainer = () => {
  const [data, setData] = useState([]);
  const location = useLocation();
  const { formData } = location.state || {}; // Access passed form data

  const getData = async () => {

    try {
        const params = new URLSearchParams(formData);
        console.log("formData1",params.toString());
        console.log("formData:", formData);

        const response = await fetch(`http://127.0.0.1:8000/listing/search?${params.toString()}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        });

        const result = await response.json();
        return result; 
        
    } catch (error) {
        console.error("Error in GET:", error);
    }
    // try {
    //   const response = await fetch("http://127.0.0.1:8000/listing/", {
    //     method: "GET",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   });

    //   const result = await response.json();
    //   console.log("GET success:", result);
    //   return result; // ✅ return parsed data
    // } catch (error) {
    //   console.error("Error in GET:", error);
    //   return [];
    // }
  };

  useEffect(() => {
    getData().then(fetchedData => setData(fetchedData));
  }, []); // ✅ run only once on mount

  return (
    <View style={{ flex: 1, padding: 16, gap: 16 }}>
      <Header title="Roommie Radar" />  
      <SearchBar />
      <FlatList
        data={data}
        renderItem={({ item }) => <ListingCard item={item} />} // ✅ proper render
        keyExtractor={(item) => item._id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default SRPContainer;
