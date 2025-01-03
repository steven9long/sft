import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

interface PlaceCardProps {
  imageUri: string;
  title: string;
  subtitle: string;
  points: string;
  rating: string;
  onPress?: () => void;
}

export const PlaceCard: React.FC<PlaceCardProps> = ({
  imageUri,
  title,
  subtitle,
  points,
  rating,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.placeCard}>
      <Image source={{ uri: imageUri }} style={styles.placeImage} />
      <Text style={styles.placeTitle}>{title}</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Ionicons name="location-outline" size={16} color="#666" />
        <Text style={styles.placeSubtitle}>{subtitle}</Text>
      </View>
      <View style={styles.placeFooter}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <FontAwesome name="tree" size={16} color="#85A98F" />
          <Text style={styles.pointsText}>+{points}</Text>
        </View>
        <View style={styles.rating}>
          <FontAwesome name="star" size={16} color="#436850" />
          <Text style={styles.ratingText}>{rating}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  placeCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    marginRight: 15,
    width: 200,
    padding: 10,
  },
  placeImage: {
    width: '100%',
    height: 100,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  placeTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  placeSubtitle: {
    fontSize: 12,
    color: 'gray',
  },
  placeFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
  },
  pointsText: {
    fontSize: 14,
    color: '#85A98F',
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    marginLeft: 5,
    fontSize: 14,
    color: '#436850',
  },
});

