import React from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import { useLocation } from 'react-router-dom';
import Header from "../CommonComponents/Header";

const PropertyDetailContainer = () => {

  const location = useLocation();
  const { property } = location.state || {};

return (
    <>
    <Header title="Roommie Radar" />
    <ScrollView style={styles.container}>
      {/* Image */}
      {property?.image && property?.image !== "" ? (
        <Image source={{ uri: property?.image }} style={styles.image} resizeMode="cover"/>
      ) : (
         <Image source={{ uri: "https://static.99acres.com/universalapp/img/projectnoimage.png"}} style={styles.image} resizeMode="cover"/>
      )}

      {/* Title */}
      <Text style={styles.title}>
        {property?.city} - {property?.locality}
      </Text>

      {/* Rent & BHK Info Card */}
      <View style={styles.cardRow}>
        <View style={styles.infoCard}>
          {/* <Icon name="home-outline" size={20} color="#3f51b5" /> */}
          <Image source={{ uri: '/icons/home.png' }} style={styles.icon}/>
          <Text style={styles.cardLabel}>{property?.bhk} BHK</Text>
        </View>
        <View style={styles.infoCard}>
          {/* <Icon name="cash-outline" size={20} color="#3f51b5" /> */}
           <Image source={{ uri: '/icons/cash.png' }} style={styles.icon}/>
          <Text style={styles.cardLabel}>₹ {property?.price}</Text>
        </View>
        <View style={styles.infoCard}>
          {/* <Icon name="expand-outline" size={20} color="#3f51b5" /> */}
           <Image source={{ uri: '/icons/flooePlan.png' }} style={styles.icon}/>
          <Text style={styles.cardLabel}>{property?.area} sq ft</Text>
        </View>
      </View>

      {/* Preferences Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Preferences</Text>
        <View style={styles.row}>
          {/* <Icon name="person-outline" size={18} color="#444" /> */}
          <Image source={{ uri: '/icons/person.png' }} style={styles.smallIcon}/>
          <Text style={styles.value}>Looking for: {property?.gender}</Text>
        </View>
        <View style={styles.row}>
          {/* <Icon name="paw-outline" size={18} color="#444" /> */}
           <Image source={{ uri: '/icons/catFootprint.png' }} style={styles.smallIcon}/>
          <Text style={styles.value}>Pet Friendly: {property?.pet_friendly ? 'Yes' : 'No'}</Text>
        </View>
        <View style={styles.row}>
          {/* <Icon name="fast-food-outline" size={18} color="#444" /> */}
           <Image source={{ uri: '/icons/foodBar.png' }} style={styles.smallIcon}/>
          <Text style={styles.value}>Food: {property?.food_preference}</Text>
        </View>
        <View style={styles.row}>
          {/* <Icon name="calendar-outline" size={18} color="#444" /> */}
           <Image source={{ uri: '/icons/calendar.png' }} style={styles.smallIcon}/>
          <Text style={styles.value}>
            Available From: {property?.move_in_date}
          </Text>
        </View>
        <View style={styles.row}>
          {/* <Icon name="wine-outline" size={18} color="#444" /> */}
          <Image source={{ uri: '/icons/wineGlass.png' }} style={styles.smallIcon}/>
          <Text style={styles.value}>
            Smoking/Drinking: {property?.smoking_drinking}
          </Text>
        </View>
      </View>

      {/* Highlights Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Highlights</Text>
        <View style={styles.chipContainer}>
          {property?.highlights?.map((item, idx) => (
            <View key={idx} style={styles.chip}>
              <Text style={styles.chipText}>{item}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Amenities Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Amenities</Text>
        <View style={styles.chipContainer}>
          {property?.amenities?.map((item, idx) => (
            <View key={idx} style={styles.chip}>
              <Text style={styles.chipText}>{item}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Description */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Description</Text>
        <Text style={styles.desc}>
          {property?.description || "No description provided."}
        </Text>
      </View>
    </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f9f9f9" },
  image: {
    width: "100%",
    height: 240,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  imagePlaceholder: {
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    margin: 16,
    color: "#222",
  },
  cardRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 16,
    marginBottom: 12,
  },
  infoCard: {
    flex: 1,
    backgroundColor: "#fff",
    marginHorizontal: 5,
    padding: 12,
    borderRadius: 12,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  cardLabel: { marginTop: 6, fontSize: 14, fontWeight: "600", color: "#444" },
  section: {
    backgroundColor: "#fff",
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 12,
    padding: 14,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 10,
    color: "#3f51b5",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },
  value: { marginLeft: 8, fontSize: 14, color: "#555" },
  chipContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  chip: {
    backgroundColor: "#e8eaf6",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    margin: 4,
  },
  chipText: {
    color: "#3f51b5",
    fontWeight: "600",
    fontSize: 13,
  },
  desc: {
    fontSize: 14,
    lineHeight: 20,
    color: "#444",
  },
  icon:{
    width: 20,
    height: 20
  },
  smallIcon:{
    width: 18,
    height: 18
  }
});


export default PropertyDetailContainer;
