import React, { useState } from "react";
import Dropdown from "./components/Dropdown";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView,
    StyleSheet,
    Platform,
    Button
} from "react-native";
import Chip from "./components/Chip";
import ImagePickerField from "./components/ImagePickerField";
import DatePickerField from "./components/DatePickerFiled";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Header from "../CommonComponents/Header";

export default function SearchFormContainer() {
    const navigate = useNavigate();
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
            // move_in_date: "",
            smoking_drinking: "",
            highlights: [],
            amenities: [],
            description: "",
            rooms_vacant: 1,
            total_rooms: 1,
            images: [],
            furnished: "fully-furnished",
        });


    // Static dropdown options
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

    const handleSubmit = () => {
        console.log("Form Submitted:", formData);
        alert("Form Submitted ✅ (check console)");
    };

    return (
      <View style={{ flex: 1 }}>
        <Header title="Roommie Radar" />    
        <ScrollView style={styles.container}>
            <Text style={styles.heading}>Search for a Roommate</Text>
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
            <Text style={styles.label}>Budget (₹)</Text>
            <TextInput
                style={styles.input}
                keyboardType="numeric"
                value={formData.price}
                onChangeText={(val) => updateField("price", val)}
                placeholder="Enter Approx Budget in ₹"
            />

             <Text style={styles.label}>Area (sq ft)</Text>
                <TextInput
                    style={styles.input}
                    keyboardType="numeric"
                    value={formData.area}
                    onChangeText={(val) => updateField("area", val)}
                    placeholder="Enter area in sqft"
                />


            {/* Looking For */}
            <Text style={styles.label}>Gender</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.chipContainer}>
                {["Male", "Female"].map((opt) => (
                    <Chip
                        key={opt}
                        label={opt}
                        selected={formData.gender === opt}
                        onPress={() => updateField("gender", opt)}
                    />
                ))}
            </ScrollView>

            {/* Pet Friendly */}
            <Text style={styles.label}>Do you have pets?</Text>
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


            {/* Smoking / Drinking */}
            <Text style={styles.label}>Do you Smoke / Drink?</Text>
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
            <Text style={styles.label}>Choose Required Highlights</Text>
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
            <Text style={styles.label}>Amenities Required?</Text>
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

            {/* Submit */}
            <TouchableOpacity style={styles.submitBtn} onPress={() => navigate("/search", { state: { formData } })}>
                <Text style={styles.submitText}>Search</Text>
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
});
