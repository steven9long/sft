// components/BlogInvite.tsx
import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, TextInput } from "react-native";

const BlogInvite = () => (
  <View style={styles.container}>
    {/* Fake Search Bar */}
    <View style={styles.searchBar}>
      <TextInput
        style={styles.searchInput}
        placeholder="Let’s share what’s going..."
        placeholderTextColor="#757575"
        editable={false} // Fake input
      />
      <TouchableOpacity style={styles.createPostButton}>
        <Text style={styles.createPostText}>Create Post</Text>
      </TouchableOpacity>
    </View>

    {/* Fake Achievement Check */}
    <TouchableOpacity style={styles.achievementBanner}>
      <Text style={styles.achievementText}>You have got a new achievement!</Text>
      <TouchableOpacity style={styles.checkButton}>
        <Text style={styles.checkButtonText}>Check</Text>
      </TouchableOpacity>
    </TouchableOpacity>

    {/* Invite Section */}
    <TouchableOpacity style={styles.eventInvite}>
      <View style={styles.inviteHeader}>
        <Image
          source={{ uri: "https://via.placeholder.com/50" }}
          style={styles.profileImage}
        />
        <Text style={styles.inviteText}>
          john20p is inviting you to join this event!
        </Text>
      </View>

      {/* Event Card */}
      <View style={styles.eventCard}>
        <View style={styles.eventDateContainer}>
          <Text style={styles.eventDate}>FEB</Text>
          <Text style={styles.eventDay}>7</Text>
        </View>
        <View style={styles.eventDetails}>
          <Text style={styles.eventTitle}>Handmade soap workshop</Text>
          <Text style={styles.eventSubtitle}>Certified green NGO</Text>
          <View style={styles.tagContainer}>
            <Text style={styles.tag}>Workshop</Text>
            <Text style={styles.tag}>Organic</Text>
          </View>
        </View>
      </View>

      {/* Action Buttons */}
      <View style={styles.actionButtons}>
        <TouchableOpacity style={styles.acceptButton}>
          <Text style={styles.acceptButtonText}>ACCEPT</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.declineButton}>
          <Text style={styles.declineButtonText}>DECLINE</Text>
        </TouchableOpacity>
      </View>

    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#F9F9F9",
    flex: 1,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  searchInput: {
    flex: 1,
    height: 40,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 14,
    color: "#333333",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  createPostButton: {
    backgroundColor: "#436850",
    marginLeft: 8,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  createPostText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "600",
  },
  achievementBanner: {
    backgroundColor: "#85B266",
    borderRadius: 8,
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  achievementText: {
    color: "white",
    fontSize: 14,
    fontWeight: "600",
  },
  checkButton: {
    borderWidth: 1, 
    backgroundColor: "#FFFFFF", 
    borderColor: "#5A6C57", 
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  checkButtonText: {
    color: "#5A6C57", 
    fontSize: 12,
    fontWeight: "600",
  },
  eventInvite: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  inviteHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  inviteText: {
    fontSize: 14,
    color: "#333333",
    fontWeight: "600",
  },
  eventCard: {
    flexDirection: "row",
    backgroundColor: "#85A98F", // Updated to #85A98F
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
  },
  eventDateContainer: {
    backgroundColor: "#E8F5E9",
    borderRadius: 8,
    padding: 8,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  eventDate: {
    color: "#4CAF50",
    fontSize: 14,
    fontWeight: "600",
  },
  eventDay: {
    color: "#4CAF50",
    fontSize: 24,
    fontWeight: "800",
  },
  eventDetails: {
    flex: 1,
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333333",
    marginBottom: 4,
  },
  eventSubtitle: {
    fontSize: 14,
    color: "#757575",
    marginBottom: 8,
  },
  tagContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  tag: {
    backgroundColor: "#E8F5E9",
    color: "#4CAF50",
    borderRadius: 16,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginRight: 8,
    fontSize: 12,
    fontWeight: "500",
  },
  actionButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  acceptButton: {
    backgroundColor: "#5A6C57", // Updated background color
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 24,
  },
  acceptButtonText: {
    color: "#FFFFFF", // Updated text color
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
  },
  declineButton: {
    borderWidth: 1, // Added border width
    borderColor: "#5A6C57", // Updated border color
    backgroundColor: "#FFFFFF", // Updated background color
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 24,
  },
  declineButtonText: {
    color: "#5A6C57", // Updated text color
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
  },
  favoriteIcon: {
    position: "absolute",
    top: 16,
    right: 16,
  },
});

export default BlogInvite;