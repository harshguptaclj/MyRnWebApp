// src/components/Chip.js
import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function Chip({ label, selected, onPress }) {
  return (
    <TouchableOpacity
      style={[styles.chip, selected && styles.selectedChip]}
      onPress={onPress}
    >
      <Text style={[styles.text, selected && styles.selectedText]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  chip: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#f9f9f9",
    marginRight: 8,
    marginBottom: 8,
    alignSelf: "flex-start",
  },
  selectedChip: {
    backgroundColor: "#007bff",
    borderColor: "#007bff",
  },
  text: { fontSize: 14, color: "#333" },
  selectedText: { color: "#fff", fontWeight: "600" },
});
