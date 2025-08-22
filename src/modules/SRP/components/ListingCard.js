import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from "react-native";

const ListingCard = ({item}) => {
  console.log("props", item)
  return (
    <View style={styles.card}>
      {/* Top image */}
      <Image
        source={{ uri: item?.image }} // replace with real image URL
        style={styles.image}
      />

      {/* Content */}
      <View style={styles.content}>
        <View style={styles.tagsRow}>
          <Text style={styles.title}>{item?.locality} • {item?.price}</Text>
          <View style={[styles.tag, { backgroundColor: "#E6F4EA" }]}>
            <Text style={[styles.tagText, { color: "#137333" }]}>{item?.score}% Compatible</Text>
          </View>
        </View>
        <Text style={styles.subtitle}>{item?.property_type} • {item?.bhk}BHK • {item?.furnished}</Text>
        <Text style={styles.subtitle}>Looking for {item?.gender}</Text>

        {/* Chips */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.chipsRow}>
          {item?.amenities.map((chip, i) => (
            <View key={i} style={styles.chip}>
              <Text style={styles.chipText}>{chip}</Text>
            </View>
          ))}
        </ScrollView>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.chipsRow}>
          {item?.highlights.map((chip, i) => (
            <View key={i} style={styles.chip}>
              <Text style={styles.chipText}>{chip}</Text>
            </View>
          ))}
        </ScrollView>

        {/* Buttons */}
        <View style={styles.buttonRow}>
          <TouchableOpacity style={[styles.button, styles.outlineButton]}>
            <Text style={[styles.buttonText, { color: "#1A73E8" }]}>View Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.fillButton]}>
            <Text style={[styles.buttonText, { color: "#fff" }]}>Message</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "#fff",
    elevation: 3, // Android shadow
    shadowColor: "#000", // iOS shadow
    shadowOpacity: 0.3,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    margin: 12,
  },
  image: {
    width: "100%",
    height: 150,
  },
  content: {
    padding: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 2,
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
    marginBottom: 8,
  },
  tagsRow: {
    flexDirection: "row",
    gap: 6,
    marginBottom: 8,
  },
  tag: {
    borderRadius: 6,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  tagText: {
    fontSize: 12,
    fontWeight: "500",
  },
  chipsRow: {
    flexDirection: "row",
    marginBottom: 12,
  },
  chip: {
    borderRadius: 16,
    backgroundColor: "#F1F3F4",
    paddingVertical: 4,
    paddingHorizontal: 10,
    marginRight: 6,
  },
  chipText: {
    fontSize: 12,
    color: "#555",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },
  button: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
    marginHorizontal: 4,
  },
  outlineButton: {
    borderWidth: 1,
    borderColor: "#1A73E8",
  },
  fillButton: {
    backgroundColor: "#1A73E8",
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "600",
  },
});

export default ListingCard;
