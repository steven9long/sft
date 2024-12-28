import React, { useState } from 'react';
import { ScrollView, StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { PlaceCard } from './PlaceCard';
import { useRouter } from 'expo-router';

export const PlacesList = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const router = useRouter();

  const handlePress = (title: string) => {
    if (title === "Kowloon Park") {
      router.push('/kowloon-park');
    } else if (title === "Tai Long Wan") {
      router.push('/tai-long-wan');
    }
  };

  const places = [
    {
      imageUri: "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcRPJRXldwNs9_qd1rh1X0ymUHPkN36jnzHiC6ULHPI0ttUfUNT2VDDMo2qKfsaHltRoDADOuoVUPL6bnlqI235X00HOIPwaevU_rEdgGw",
      title: "Kowloon Park",
      subtitle: "Tsim Sha Tsui, Hong K",
      points: "+ 🌳15,000",
      rating: "4.8",
      categories: ["Parks", "Historical"],
    },
    {
      imageUri: "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcTT3m33ZWK8oL30U9kUlzAbrqreM9UStFMhoIGYhOXT-V-vBImTQj_or8xeJXBCud2UxKAUvQzR3DuZCOPRMtDRTe9qyZSBbTAlrEiXVPg",
      title: "Tai Long Wan",
      subtitle: "Sai Kung, Hong K",
      points: "+ 🌳15,000",
      rating: "4.8",
      categories: ["Ocean"],
    },
  ];

  const filteredPlaces = places.filter(place => 
    selectedCategory === 'All' || place.categories.includes(selectedCategory)
  );

  return (
    <>
      <View style={styles.categoryButtons}>
        {['All', 'Parks', 'Historical', 'Ocean', 'Mountains', 'Beaches'].map(category => (
          <TouchableOpacity
            key={category}
            style={[
              styles.categoryButton,
              selectedCategory === category && styles.categoryButtonActive
            ]}
            onPress={() => setSelectedCategory(category)}
          >
            <Text style={[
              styles.categoryText,
              selectedCategory === category && styles.categoryTextActive
            ]}>
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.placesScroll}>
        {filteredPlaces.map(place => (
          <PlaceCard
            key={place.title}
            imageUri={place.imageUri}
            title={place.title}
            subtitle={place.subtitle}
            points={place.points}
            rating={place.rating}
            onPress={() => handlePress(place.title)}
          />
        ))}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  placesScroll: {
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
  },
  categoryTextActive: {
    color: "#fff",
  },
});