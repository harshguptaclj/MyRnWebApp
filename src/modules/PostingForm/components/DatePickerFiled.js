import React from "react";
import { Platform, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

export default function DatePickerField({ value, onChange }) {
  // For web, use native input type="date"
  if (Platform.OS === "web") {
    return (
      <input
        type="date"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{
          padding: 10,
          fontSize: 16,
          borderRadius: 8,
          border: "1px solid #ccc",
          marginBottom: 10,
          width: "100%",
        }}
      />
    );
  }

  // For mobile (iOS/Android), use React Native DateTimePicker
  // You will need to install: @react-native-community/datetimepicker
  // yarn add @react-native-community/datetimepicker
  const [show, setShow] = React.useState(false);

  const handleChange = (event, selectedDate) => {
    setShow(false);
    if (selectedDate) {
      const isoDate = selectedDate.toISOString().split("T")[0];
      onChange(isoDate);
    }
  };

  return (
    <>
      <TouchableOpacity
        style={styles.input}
        onPress={() => setShow(true)}
      >
        <Text style={{ fontSize: 16 }}>
          {value || "Select date"}
        </Text>
      </TouchableOpacity>
      {show && (
        <DateTimePicker
          value={value ? new Date(value) : new Date()}
          mode="date"
          display="default"
          onChange={handleChange}
        />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
});
