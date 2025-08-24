import React, { use, useEffect, useState } from "react";
import Dropdown from "./components/Dropdown";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView,
    StyleSheet,
    Platform,
    Image,
    Pressable,
} from "react-native";
import Chip from "./components/Chip";
import ImagePickerField from "./components/ImagePickerField";
import DatePickerField from "./components/DatePickerFiled";
import Header from "../CommonComponents/Header";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";

export default function PostingFormContainer() {
  const navigate = useNavigate();
    const postData = async () => {
    try {
        const response = await fetch("http://127.0.0.1:8000/listing/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData)});
    
        const property = await response.json();
        navigate("/property-detail", { state: { property } })
        console.log("POST success:", property);
    } catch (error) {
        console.error("Error in POST:", error);
    }
    };

    

  
    // ✅ Single state for all form data
    const [formData, setFormData] = useState({
        user_id :"user_123",
        city: "",
        locality: "",
        area: "",
        price: "",
        bhk: "",
        property_type: "apartment",
        gender: "",
        pet_friendly: "",
        about_me: "bfvfv",
        food_preference: "",
        move_in_date: "",
        smoking_drinking: "",
        highlights: [],
        amenities: [],
        description: "",
        rooms_vacant: 1,
        total_rooms: 1,
        image: "",
        furnished: "fully-furnished",
    });


    const CITY = [
        "Delhi", "Mumbai", "Bangalore", "Hyderabad", "Pune",
        "Chennai", "Kolkata", "Ahmedabad", "Jaipur", "Lucknow",
    ];
    const LOCALITY = ["Indiranagar", "Koramangala", "Whitefield", "HSR Layout", "MG Road",
        "Andheri", "Bandra", "Juhu", "Powai", "Versova",
    ];
    const BHK_OPTIONS = [2,3,4,5];

    // 🔹 Generic updater
    const updateField = (field, value) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    // 🔹 For multi-select chips (toggle)
    const toggleChip = (field, value) => {
        setFormData((prev) => {
            const list = prev[field];
            return list.includes(value)
                ? { ...prev, [field]: list.filter((item) => item !== value) }
                : { ...prev, [field]: [...list, value] };
        });
    };

    const handleDesc = async () => {
    try {
        const response = await fetch("http://localhost:8000/listing/generate-description", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData)});
    
        const result = await response.json();

        setFormData((prev) => ({ ...prev, description: result?.generated_description  || "Generated description from AI" }));

        console.log("POST success:", result);
    } catch (error) {
        console.error("Error in POST:", error);
    }
    };

    return (
      <View style={{ flex: 1 }}>
        <Header title="Roommie Radar" />
        <ScrollView style={styles.container}>
            <Text style={styles.heading}>Post a Roommate Requirement</Text>
            {/* Location */}
            <Dropdown
                label="City"
                options={CITY}
                selectedValue={formData.city}
                onSelect={(val) => updateField("city", val)}
            />


            <Dropdown
                label="Locality"
                options={LOCALITY}
                selectedValue={formData.locality}
                onSelect={(val) => updateField("locality", val)}
            />

            {/* BHK */}
            <Dropdown
                label="BHK"
                options={BHK_OPTIONS}
                selectedValue={formData.bhk}
                onSelect={(val) => updateField("bhk", val)}
            />

            {/* Rent */}
            <Text style={styles.label}>Rent (₹)</Text>
            <TextInput
                style={styles.input}
                keyboardType="numeric"
                value={formData.price}
                onChangeText={(val) => updateField("price", val)}
                placeholder="Enter rent"
            />

            {/* Area */}
            <Text style={styles.label}>Area (sq ft)</Text>
            <TextInput
                style={styles.input}
                keyboardType="numeric"
                value={formData.area}
                onChangeText={(val) => updateField("area", val)}
                placeholder="Enter area in sqft"
            />


            {/* Image Picker */}
            <ImagePickerField
                image={formData.image}   // 👈 single value, not images
                setImage={(newImage) =>
                    setFormData((prev) => ({ ...prev, image: newImage }))
                }
            />


            {/* Looking For */}
            <Text style={styles.label}>Looking For</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.chipContainer}>
                {["Male", "Female", "Any"].map((opt) => (
                    <Chip
                        key={opt}
                        label={opt}
                        selected={formData.gender === opt}
                        onPress={() => updateField("gender", opt)}
                    />
                ))}
            </ScrollView>

            {/* Pet Friendly */}
            <Text style={styles.label}>Pet Friendly</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.chipContainer}>
                {["Yes", "No"].map((opt) => (
                    <Chip
                        key={opt}
                        label={opt}
                        selected={formData.pet_friendly === opt}
                        onPress={() => updateField("pet_friendly", opt)}
                    />
                ))}
            </ScrollView>

            {/* Food Preference */}
            <Text style={styles.label}>Food Preference</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.chipContainer}>
                {["Veg", "Non-Veg", "Neutral"].map((opt) => (
                    <Chip
                        key={opt}
                        label={opt}
                        selected={formData.food_preference === opt}
                        onPress={() => updateField("food_preference", opt)}
                    />
                ))}
            </ScrollView>

            {/* Available From (TEMP TEXT FIELD instead of Date Picker) */}
            <Text style={styles.label}>Available From</Text>
            <DatePickerField
                value={formData.move_in_date}
                onChange={(val) => updateField("move_in_date", val)}
            />

            {/* Smoking / Drinking */}
            <Text style={styles.label}>Smoking / Drinking</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.chipContainer}>
                {["yes", "no", "occasionally"].map((opt) => (
                    <Chip
                        key={opt}
                        label={opt}
                        selected={formData.smoking_drinking === opt}
                        onPress={() => updateField("smoking_drinking", opt)}
                    />
                ))}
            </ScrollView>

            {/* Highlights */}
            <Text style={styles.label}>Choose Highlights</Text>
            <View style={styles.chipWrapContainer}>
                {[
                    "Attached Washroom",
                    "Attached Balcony",
                    "Gated Society",
                    "Market Nearby",
                    "Close to Metro"
                ].map((opt) => (
                    <Chip
                        key={opt}
                        label={opt}
                        selected={formData.highlights.includes(opt)}
                        onPress={() => toggleChip("highlights", opt)}
                    />
                ))}
            </View>


            {/* Amenities */}
            <Text style={styles.label}>Amenities</Text>
            <View style={styles.chipWrapContainer}>
                {["Fridge", "Kitchen", "WiFi", "Washing Machine", "Cook", "AC"].map((opt) => (
                    <Chip
                        key={opt}
                        label={opt}
                        selected={formData.amenities.includes(opt)}
                        onPress={() => toggleChip("amenities", opt)}
                    />
                ))}
            </View>
            {/* Description */}
            <Text style={styles.label}>Description</Text>
            <TextInput
                style={[styles.input, { height: 100 }]}
                multiline
                value={formData.description}
                onChangeText={(val) => updateField("description", val)}
                placeholder="Write details..."
            />


              <View style={styles.descriptionView}>
                 <Image
                    source={{ uri: '/icons/ai.png' }}
                    style={styles.icon}
                    resizeMode="contain"
                />
                <Text style={styles.needHelp}>'Need help in writing ?'</Text>
                <Pressable onPress={handleDesc}>
                    <Text style={styles.yes}>'Yes, Write for me'</Text>
                </Pressable>
            </View>

            {/* Submit */}
            <TouchableOpacity style={styles.submitBtn} onPress={postData}>
                <Text style={styles.submitText}>Submit</Text>
            </TouchableOpacity>
        </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, backgroundColor: "#fff" },
    heading: { fontSize: 22, fontWeight: "bold", marginBottom: 20, textAlign: "center" },
    label: { fontSize: 16, fontWeight: "500", marginTop: 15, marginBottom: 8 },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        padding: 10,
        fontSize: 16,
        marginBottom: 10,
    },
    chipContainer: { flexDirection: "row", marginBottom: 10 },
    chip: {
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: "#ccc",
        marginRight: 8,
    },
    chipWrapContainer: {
        flexDirection: "row",
        flexWrap: "wrap",       // allow multiple lines
        alignItems: "flex-start",
        marginVertical: 8,
        gap: 8,                 // spacing between chips (if RN 0.71+)
    },
    chipSelected: { backgroundColor: "#007AFF", borderColor: "#007AFF" },
    chipText: { fontSize: 14, color: "#333" },
    chipTextSelected: { color: "#fff" },
    submitBtn: {
        backgroundColor: "#007BFF",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
        marginTop: 20,
        marginBottom: 40,
    },
    submitText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
    descriptionView: {
        flexDirection: 'row',
    },
    needHelp: {
        fontSize: 12,
        lineHeight: 16,
        fontWeight: 400,
        color: '#42526e',
        paddingLeft: 4
    },
    yes: {
         fontSize: 14,
        lineHeight: 16,
        fontWeight: 600,
        color: '#0078db',
        paddingLeft: 8
    },
    icon: {
        height: 16,
        width: 16,
    }
});
