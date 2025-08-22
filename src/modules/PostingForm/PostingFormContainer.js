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
} from "react-native";
import Chip from "./components/Chip";
import ImagePickerField from "./components/ImagePickerField";
import DatePickerField from "./components/DatePickerFiled";

export default function PostingFormContainer() {
    // ✅ Single state for all form data
    const [formData, setFormData] = useState({
        city: "",
        locality: "",
        area: "",
        price: "",
        bhk: "",
        property_type: "apartment",
        gender: "",
        pet_friendly: "",
        about_me: "",
        food_preference: "",
        move_in_date: "",
        smoking_drinking: "",
        highlights: [],
        amenities: [],
        description: "",
        rooms_vacant: 1,
        total_rooms: 1,
        images: [],
        furnished: "fully-furnished",
    });

//     {
//   "user_id": "user_123",
//   "city": "Pune",
//   "locality": "Koregaon Park",
//   "area": "1200 sqft",
//   "price": 15000,
//   "bhk": 2,
//   "property_type": "apartment",
//   "gender": "male",
//   "about_me": "Looking for a friendly roommate",
//   "image": "https://example.com/image.jpg",
//   "furnished": "fully-furnished",
//   "description": "Spacious 2 BHK apartment",
//   "rooms_vacant": 1,
//   "total_rooms": 2,
//   "food_preference": "veg",
//   "pet_friendly": true,
//   "smoking_drinking": "no",
//   "highlights": ["Attached Washroom", "Market Nearby"],
//   "amenities": ["Fridge", "WiFi", "AC"],
//   "move_in_date": "2025-09-01"
// }

    // Static dropdown options
    const CITY = [
        "Delhi", "Mumbai", "Bangalore", "Hyderabad", "Pune",
        "Chennai", "Kolkata", "Ahmedabad", "Jaipur", "Lucknow",
    ];
    const LOCALITY = ["Indiranagar", "Koramangala", "Whitefield", "HSR Layout", "MG Road",
        "Andheri", "Bandra", "Juhu", "Powai", "Versova",
    ];
    const BHK_OPTIONS = ["2 BHK", "3 BHK", "4 BHK", "5 BHK"];

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
                images={formData.images}
                setImages={(newImages) => setFormData(prev => ({ ...prev, images: newImages }))}
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
                {["Yes", "No", "Occasionally"].map((opt) => (
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

            {/* Submit */}
            <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit}>
                <Text style={styles.submitText}>Submit</Text>
            </TouchableOpacity>
        </ScrollView>
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
        backgroundColor: "#28a745",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
        marginTop: 20,
        marginBottom: 40,
    },
    submitText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
});
