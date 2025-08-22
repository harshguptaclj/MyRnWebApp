import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import SearchBar from '../CommonComponents/SearchBar';
import ListingCard from './components/ListingCard';



const SRPContainer = () => {
   const data = [
    {
    "_id": "68a810fcb89a56cdaec19eb2",
    "user_id": "122",
    "city": "Pune",
    "locality": "Koregaon Park",
    "area": "1200 sqft",
    "price": 15000,
    "bhk": 2,
    "property_type": "apartment",
    "gender": "male",
    "about_me": "Looking for a friendly roommate",
    "image": "https://img.freepik.com/free-photo/beautiful-red-brick-house-with-decorative-lights_53876-49372.jpg?semt=ais_hybrid&w=740&q=80",
    "furnished": "fully-furnished",
    "description": "Spacious 2 BHK apartment",
    "rooms_vacant": 1,
    "total_rooms": 2,
    "food_preference": "veg",
    "pet_friendly": true,
    "smoking_drinking": "no",
    "highlights": [
        "Attached Washroom",
        "Market Nearby"
    ],
    "amenities": [
        "Fridge",
        "WiFi",
        "AC"
    ],
    "move_in_date": null,
    "compatible": 70
},
{
    "_id": "68a810fcb89a56cdaec19eb2",
    "user_id": "122",
    "city": "Pune",
    "locality": "Koregaon Park",
    "area": "1200 sqft",
    "price": 15000,
    "bhk": 2,
    "property_type": "apartment",
    "gender": "male",
    "about_me": "Looking for a friendly roommate",
    "image": "https://media.istockphoto.com/id/589538090/photo/exterior-of-small-american-house-with-blue-paint.jpg?s=2048x2048&w=is&k=20&c=l5yp8MwBrutZLRkiF06nRcJ8eS0iYtcoMgklFxVvh8o=",
    "furnished": "fully-furnished",
    "description": "Spacious 2 BHK apartment",
    "rooms_vacant": 1,
    "total_rooms": 2,
    "food_preference": "veg",
    "pet_friendly": true,
    "smoking_drinking": "no",
    "highlights": [
        "Attached Washroom",
        "Market Nearby"
    ],
    "amenities": [
        "Fridge",
        "WiFi",
        "AC"
    ],
    "move_in_date": null,
    "compatible": 80
},
{
    "_id": "68a810fcb89a56cdaec19eb2",
    "user_id": "122",
    "city": "Pune",
    "locality": "Koregaon Park",
    "area": "1200 sqft",
    "price": 15000,
    "bhk": 2,
    "property_type": "apartment",
    "gender": "male",
    "about_me": "Looking for a friendly roommate",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqsJ4LhakfmO587QbnkKWVvmhFPz6-8zDBnQ&s",
    "furnished": "fully-furnished",
    "description": "Spacious 2 BHK apartment",
    "rooms_vacant": 1,
    "total_rooms": 2,
    "food_preference": "veg",
    "pet_friendly": true,
    "smoking_drinking": "no",
    "highlights": [
        "Attached Washroom",
        "Market Nearby"
    ],
    "amenities": [
        "Fridge",
        "WiFi",
        "AC"
    ],
    "move_in_date": null,
    "compatible": 90
}
   ]
  return (
    <View style={{ flex: 1, padding: 16, gap: 16 }}>
      <SearchBar />
       <FlatList
          data = {data}
          renderItem={ListingCard}
          keyExtractor={(item) => item._id}
          showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

export default SRPContainer

