import { Image, StyleSheet, Platform, View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import React from "react";
import { Ionicons, MaterialIcons, FontAwesome } from "@expo/vector-icons";
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import WeatherForecast from "@/components/WeatherForecast"; // 2) import component
import { PlacesList } from '@/components/PlacesList';
import { PeopleLiked } from '@/components/PeopleLiked';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  const handleViewAll = () => {
    router.push('/all-places');
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.greeting}>
          Howday <Text style={styles.emoji}>👋</Text> Alex!
        </Text>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.aiButton}>
            <Text style={styles.aiText}>AI assistant</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Points and Redeem */}
      <View style={styles.pointsContainer}>
        <Text style={styles.pointsText}>🌳 18,000</Text>
        <TouchableOpacity>
          <Text style={styles.redeemText}>🎁 Redeem</Text>
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchBar}>
        <TextInput style={styles.searchInput} placeholder="Start searching here..." />
        <TouchableOpacity style={styles.filterButton}>
          <Ionicons name="filter" size={20} color="green" />
        </TouchableOpacity>
      </View>

      {/* Discover Places */}
      <Text style={styles.sectionTitle}>Discover Places</Text>
      
      <PlacesList />

      {/* Weather Forecast */}
      <WeatherForecast /> {/* 3) placed here */}

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
    backgroundColor: "#EBF5E3",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
  },
  aiText: {
    fontSize: 14,
    color: "green",
  },
  pointsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  points: {
    flexDirection: "row",
    alignItems: "center",
  },
  pointsText: {
    marginLeft: 5,
    fontSize: 14,
    color: "green",
  },
  redeemText: {
    fontSize: 14,
    color: "green",
  },
  searchBar: {
    flexDirection: "row",
    backgroundColor: "#F6F6F6",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    marginVertical: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  filterButton: {
    marginLeft: 10,
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
    backgroundColor: "green",
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
    color: "green",
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