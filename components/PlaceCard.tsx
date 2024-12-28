import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

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
      <Text style={styles.placeSubtitle}>{subtitle}</Text>
      <View style={styles.placeFooter}>
        <Text style={styles.pointsText}>{points}</Text>
        <View style={styles.rating}>
          <FontAwesome name="star" size={16} color="green" />
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
    color: 'green',
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    marginLeft: 5,
    fontSize: 14,
    color: 'green',
  },
});

