import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const GreenCreditScreen = () => {
  const rewards = [
    {
      id: 1,
      title: "$20 Off Next Purchase",
      subtitle: "Handmade Soap Store",
      image: "https://cdn.pixabay.com/photo/2015/01/16/09/32/soap-601239_1280.jpg",
      points: 8000,
    },
    {
      id: 2,
      title: "5% off regular-priced ...",
      subtitle: "Hong Kong Wetland Park",
      image:
        "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcR4UHtUQgvO0FmGlxhwBxlnnVTeMDD1mUhh39ARMXxJpKfVeU3qvyb5118EGQwLou1EiJYvb3K5vGFVA2OYJBYXmqJlr5gMkuVM23qfkg",
      points: 6000,
    },
    {
      id: 3,
      title: "$50 coupon",
      subtitle: "Hong Kong Ocean Park",
      image:
        "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcSQVVCH4x85f1WPlSXBecSZ1_BP7UfipfJgGCHrwc-qSqzEoKKvEh9g8o-KMBnvTJ9eQSHMb8SdLfEIdOfCiDeWEY5VxgzRCGQywYYRkg",
      points: 15000,
    },
    {
      id: 4,
      title: "Buy 1 Get 1 Free",
      subtitle: "Microgreens Store",
      image:
        "https://cdn.pixabay.com/photo/2017/07/03/01/35/microgreens-2466365_1280.jpg",
      points: 4500,
    },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Your Green Credit</Text>
      </View>

      {/* Points Display */}
      <View style={styles.pointsContainer}>
        <FontAwesome name="tree" size={24} color="#85A98F" />
        <Text style={styles.pointsText}>18,000</Text>
      </View>

      {/* Rewards List */}
      <ScrollView contentContainerStyle={styles.rewardsList}>
        {rewards.map((reward) => (
          <View key={reward.id} style={styles.rewardCard}>
            <Image source={{ uri: reward.image }} style={styles.rewardImage} />
            <View style={styles.rewardDetails}>
              <Text style={styles.rewardTitle}>{reward.title}</Text>
              <Text style={styles.rewardSubtitle}>{reward.subtitle}</Text>
              <View style={styles.rewardPoints}>
                <FontAwesome name="tree" size={16} color="#85A98F" />
                <Text style={styles.pointsRequired}>{reward.points}</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
    color: "#000",
  },
  pointsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  pointsText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#85A98F",
    marginLeft: 10,
  },
  rewardsList: {
    paddingHorizontal: 15,
    paddingBottom: 20,
  },
  rewardCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 10,
    overflow: "hidden",
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    marginBottom: 15,
  },
  rewardImage: {
    width: 100,
    height: 100,
  },
  rewardDetails: {
    flex: 1,
    padding: 10,
    justifyContent: "space-between",
  },
  rewardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  rewardSubtitle: {
    fontSize: 14,
    color: "#666",
  },
  rewardPoints: {
    flexDirection: "row",
    alignItems: "center",
  },
  pointsRequired: {
    fontSize: 14,
    color: "#85A98F",
    marginLeft: 5,
  },
});

export default GreenCreditScreen;