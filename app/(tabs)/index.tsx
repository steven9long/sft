import React, { useState } from 'react';
import { Image, StyleSheet, Platform, View, Text, TextInput, ScrollView, TouchableOpacity, Modal } from 'react-native';
import { Ionicons, MaterialIcons, FontAwesome, AntDesign, Feather } from "@expo/vector-icons";
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import WeatherForecast from "@/components/WeatherForecast";
import { PlacesList } from '@/components/PlacesList';
import { PeopleLiked } from '@/components/PeopleLiked';
import { useRouter, RelativePathString, ExternalPathString } from 'expo-router';
import * as WebBrowser from 'expo-web-browser';
import PointsPopup from '@/components/PointsPopup'; // Import the new PointsPopup component

export default function HomeScreen() {
  const router = useRouter();
  const [isPointsPopupVisible, setPointsPopupVisible] = useState(false);
  const [isRedeemPopupVisible, setRedeemPopupVisible] = useState(false);

  const handleViewAll = () => {
    router.push('/all-places');
  };

  const handleAIAssistant = async () => {
    await WebBrowser.openBrowserAsync('https://ecostride-hxvrlziappkdd4bokn4pccw.streamlit.app/');
  };

  const togglePointsPopup = () => {
    setPointsPopupVisible(!isPointsPopupVisible);
  };

  const handleRedeem = () => {
    router.push('/green-credit');
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.greeting}>
          Howday <Text style={styles.emoji}>👋</Text> Alex!
        </Text>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.aiButton} onPress={handleAIAssistant}>
            <MaterialIcons name="chat" size={20} color="#12372A" />
            <Text style={styles.aiText}>AI assistant</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Points and Redeem */}
      <View style={styles.pointsContainer}>
        <TouchableOpacity style={styles.points} onPress={togglePointsPopup}>
          <FontAwesome name="tree" size={20} color="#85A98F" />
          <Text style={styles.pointsText}>18,000</Text>
          <AntDesign name="questioncircle" size={20} color="#85A98F" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.points} onPress={handleRedeem}>
          <Ionicons name="gift" size={20} color="#85A98F" />
          <Text style={styles.pointsText}>Redeem</Text>
        </TouchableOpacity>
      </View>

      {/* Points Popup */}
      <PointsPopup visible={isPointsPopupVisible} onClose={togglePointsPopup} />

      {/* Search Bar */}
      <View style={styles.searchBar}>
        <TextInput
          style={styles.searchInput}
          placeholder="Start searching here..."
          placeholderTextColor="#828F9C"
        />
        <TouchableOpacity style={styles.filterButton}>
          <View style={styles.filterIconContainer}>
            <Feather name="filter" size={20} color="white" />
          </View>
        </TouchableOpacity>
      </View>

      {/* Discover Places */}
      <Text style={styles.sectionTitle}>Discover Places</Text>
      
      <PlacesList />

      {/* Weather Forecast */}
      <WeatherForecast />

      {/* Add People Liked component */}
      <PeopleLiked onViewAll={handleViewAll} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  greeting: {
    fontSize: 24,
    fontWeight: "bold",
  },
  emoji: {
    fontSize: 24,
  },
  headerRight: {
    flexDirection: "row",
  },
  aiButton: {
    backgroundColor: "#ECE58B",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  aiText: {
    fontSize: 14,
    color: "#12372A",
    marginLeft: 5,
  },
  pointsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
  },
  points: {
    flexDirection: "row",
    alignItems: "center",
  },
  pointsText: {
    marginLeft: 5,
    fontSize: 14,
    color: "#85A98F",
  },
  redeemText: {
    fontSize: 14,
    color: "#85A98F",
  },
  searchBar: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 20, // Increased border radius for more rounded corners
    padding: 7,
    alignItems: "center",
    marginVertical: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  filterButton: {
    marginLeft: 10,
  },
  filterIconContainer: {
    backgroundColor: "#85A98F",
    borderRadius: 20,
    padding: 7,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
  },
  categoryButtons: {
    flexDirection: "row",
    marginBottom: 10,
  },
  categoryButton: {
    backgroundColor: "#F6F6F6",
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 20,
    marginRight: 10,
  },
  categoryText: {
    color: "gray",
  },
  categoryButtonActive: {
    backgroundColor: "#85A98F",
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 20,
    marginRight: 10,
  },
  categoryTextActive: {
    color: "#fff",
  },
  placesScroll: {
    marginVertical: 10,
  },
  placeCard: {
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    marginRight: 15,
    width: 200,
    padding: 10,
  },
  placeImage: {
    width: "100%",
    height: 100,
    borderRadius: 10,
  },
  placeTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 5,
  },
  placeSubtitle: {
    fontSize: 12,
    color: "gray",
  },
  placeFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 5,
  },
  rating: {
    flexDirection: "row",
    alignItems: "center",
  },
  ratingText: {
    marginLeft: 5,
    fontSize: 14,
    color: "#85A98F",
  },
  weatherContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  weatherDay: {
    alignItems: "center",
  },
  weatherText: {
    fontSize: 12,
    color: "gray",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 20,
    borderTopWidth: 1,
    borderColor: "#F0F0F0",
  },
});