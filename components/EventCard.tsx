// components/EventCard.tsx
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

interface EventCardProps {
  date: string;
  title: string;
  tags: string[];
  organization: string;
  avatar?: string; // Optional avatar image
}

const EventCard: React.FC<EventCardProps> = ({ date, title, tags, organization, avatar }) => (
  <TouchableOpacity style={styles.eventCard}>
    {/* Date Section */}
    <View style={styles.dateContainer}>
      <Text style={styles.dateMonth}>{date.split(" ")[0]}</Text>
      <Text style={styles.dateDay}>{date.split(" ")[1]}</Text>
    </View>

    {/* Event Details */}
    <View style={styles.detailsContainer}>
      <Text style={styles.eventTitle}>{title}</Text>
      <View style={styles.organizationContainer}>
        {avatar && <Image source={{ uri: avatar }} style={styles.avatar} />}
        <Text style={styles.organizationText}>{organization}</Text>
      </View>
      <View style={styles.tagsContainer}>
        {tags.map((tag, index) => (
          <View key={index} style={styles.tag}>
            <Text style={styles.tagText}>{tag}</Text>
          </View>
        ))}
      </View>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  eventCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 12,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  dateContainer: {
    backgroundColor: "#E8F5E9",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  dateMonth: {
    color: "#4CAF50",
    fontSize: 14,
    fontWeight: "600",
  },
  dateDay: {
    color: "#4CAF50",
    fontSize: 24,
    fontWeight: "800",
  },
  detailsContainer: {
    flex: 1,
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333333",
    marginBottom: 4,
  },
  organizationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  avatar: {
    width: 24,
    height: 24,
    borderRadius: 12,
    marginRight: 8,
  },
  organizationText: {
    fontSize: 14,
    color: "#757575",
  },
  tagsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  tag: {
    backgroundColor: "#E8F5E9",
    borderRadius: 16,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginRight: 8,
    marginBottom: 4,
  },
  tagText: {
    fontSize: 12,
    color: "#4CAF50",
    fontWeight: "500",
  },
});

export default EventCard;