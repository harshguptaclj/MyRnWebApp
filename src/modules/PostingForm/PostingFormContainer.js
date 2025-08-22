import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Platform,
} from "react-native";


export default function PostingFormContainer() {
  // ✅ Single state for all form data
  const [formData, setFormData] = useState({
    location: "",
    bhk: "",
    rent: "",
    lookingFor: "",
    petFriendly: "",
    foodPref: "",
    availableFrom: "",
    smoking: "",
    highlights: [],
    amenities: [],
    description: "",
  });

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

      {/* City */}
      <Text style={styles.label}>City</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.chipContainer}>
        {CITY.map((place) => (
          <TouchableOpacity
            key={place}
            style={[styles.chip, formData.location === place && styles.chipSelected]}
            onPress={() => updateField("location", place)}
          >
            <Text style={[styles.chipText, formData.location === place && styles.chipTextSelected]}>
              {place}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

    {/* Locality */}
      <Text style={styles.label}>Locality</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.chipContainer}>
        {LOCALITY.map((place) => (
          <TouchableOpacity
            key={place}
            style={[styles.chip, formData.location === place && styles.chipSelected]}
            onPress={() => updateField("location", place)}
          >
            <Text style={[styles.chipText, formData.location === place && styles.chipTextSelected]}>
              {place}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* BHK */}
      <Text style={styles.label}>BHK</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.chipContainer}>
        {BHK_OPTIONS.map((option) => (
          <TouchableOpacity
            key={option}
            style={[styles.chip, formData.bhk === option && styles.chipSelected]}
            onPress={() => updateField("bhk", option)}
          >
            <Text style={[styles.chipText, formData.bhk === option && styles.chipTextSelected]}>
              {option}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Rent */}
      <Text style={styles.label}>Rent (₹)</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={formData.rent}
        onChangeText={(val) => updateField("rent", val)}
        placeholder="Enter rent"
      />

      {/* Looking For */}
      <Text style={styles.label}>Looking For</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.chipContainer}>
        {["Male", "Female", "Any"].map((opt) => (
          <TouchableOpacity
            key={opt}
            style={[styles.chip, formData.lookingFor === opt && styles.chipSelected]}
            onPress={() => updateField("lookingFor", opt)}
          >
            <Text style={[styles.chipText, formData.lookingFor === opt && styles.chipTextSelected]}>
              {opt}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Pet Friendly */}
      <Text style={styles.label}>Pet Friendly</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.chipContainer}>
        {["Yes", "No"].map((opt) => (
          <TouchableOpacity
            key={opt}
            style={[styles.chip, formData.petFriendly === opt && styles.chipSelected]}
            onPress={() => updateField("petFriendly", opt)}
          >
            <Text style={[styles.chipText, formData.petFriendly === opt && styles.chipTextSelected]}>
              {opt}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Food Preference */}
      <Text style={styles.label}>Food Preference</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.chipContainer}>
        {["Veg", "Non-Veg", "Neutral"].map((opt) => (
          <TouchableOpacity
            key={opt}
            style={[styles.chip, formData.foodPref === opt && styles.chipSelected]}
            onPress={() => updateField("foodPref", opt)}
          >
            <Text style={[styles.chipText, formData.foodPref === opt && styles.chipTextSelected]}>
              {opt}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

        {/* Available From (TEMP TEXT FIELD instead of Date Picker) */}
      <Text style={styles.label}>Available From</Text>
      <TextInput
        style={styles.input}
        placeholder="Available From (e.g. 01-09-2025)"
        value={formData.availableFrom}
        onChangeText={(text) => handleChange('availableFrom', text)}
      />

      {/* Smoking / Drinking */}
      <Text style={styles.label}>Smoking / Drinking</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.chipContainer}>
        {["Yes", "No", "Occasionally"].map((opt) => (
          <TouchableOpacity
            key={opt}
            style={[styles.chip, formData.smoking === opt && styles.chipSelected]}
            onPress={() => updateField("smoking", opt)}
          >
            <Text style={[styles.chipText, formData.smoking === opt && styles.chipTextSelected]}>
              {opt}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Highlights */}
      <Text style={styles.label}>Choose Highlights</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.chipContainer}>
        {["Attached Washroom", "Attached Balcony", "Gated Society", "Market Nearby", "Close to Metro"].map((opt) => (
          <TouchableOpacity
            key={opt}
            style={[styles.chip, formData.highlights.includes(opt) && styles.chipSelected]}
            onPress={() => toggleChip("highlights", opt)}
          >
            <Text style={[styles.chipText, formData.highlights.includes(opt) && styles.chipTextSelected]}>
              {opt}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Amenities */}
      <Text style={styles.label}>Amenities</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.chipContainer}>
        {["Fridge", "Kitchen", "WiFi", "Washing Machine", "Cook", "AC"].map((opt) => (
          <TouchableOpacity
            key={opt}
            style={[styles.chip, formData.amenities.includes(opt) && styles.chipSelected]}
            onPress={() => toggleChip("amenities", opt)}
          >
            <Text style={[styles.chipText, formData.amenities.includes(opt) && styles.chipTextSelected]}>
              {opt}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

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
