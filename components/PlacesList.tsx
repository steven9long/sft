import React, { useState } from 'react';
import { ScrollView, StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { PlaceCard } from './PlaceCard';
import { useRouter } from 'expo-router';
import { MaterialCommunityIcons, Entypo, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

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
      points: " 10,000",
      rating: "4.6",
      categories: ["Parks", "Historical"],
    },
    {
      imageUri: "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcTT3m33ZWK8oL30U9kUlzAbrqreM9UStFMhoIGYhOXT-V-vBImTQj_or8xeJXBCud2UxKAUvQzR3DuZCOPRMtDRTe9qyZSBbTAlrEiXVPg",
      title: "Tai Long Wan",
      subtitle: "Sai Kung, Hong K",
      points: " 15,000",
      rating: "4.8",
      categories: ["Ocean"],
    },
  ];

  const filteredPlaces = places.filter(place => 
    selectedCategory === 'All' || place.categories.includes(selectedCategory)
  );

  const categoryIcons: { [key: string]: (isActive: boolean) => JSX.Element } = {
    All: (isActive: boolean) => (
      <MaterialCommunityIcons name="dots-grid" size={16} color={isActive ? "#FFFFFF" : "gray"} />
    ),
    Parks: (isActive: boolean) => (
      <Entypo name="tree" size={16} color={isActive ? "#FFFFFF" : "gray"} />
    ),
    Historical: (isActive: boolean) => (
      <MaterialIcons name="temple-buddhist" size={16} color={isActive ? "#FFFFFF" : "gray"} />
    ),
    Ocean: (isActive: boolean) => (
      <FontAwesome5 name="water" size={16} color={isActive ? "#FFFFFF" : "gray"} />
    ),
    // Add icons for other categories if needed
  };

  return (
    <>
      <View style={styles.categoryButtons}>
        {['All', 'Parks', 'Historical', 'Ocean'].map((category: string) => (
          <TouchableOpacity
            key={category}
            style={[
              styles.categoryButton,
              selectedCategory === category && styles.categoryButtonActive
            ]}
            onPress={() => setSelectedCategory(category)}
          >
            <View style={styles.categoryContent}>
              {categoryIcons[category](selectedCategory === category)}
              <Text style={[
                styles.categoryText,
                selectedCategory === category && styles.categoryTextActive
              ]}>
                {category}
              </Text>
            </View>
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
    marginVertical: 0,
  },
  categoryButtons: {
    flexDirection: "row",
    marginBottom: 10,
  },
  categoryButton: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    marginRight: 10,
    borderWidth: 1,
    borderColor: "gray",
  },
  categoryText: {
    color: "gray",
  },
  categoryButtonActive: {
    backgroundColor: "#85A98F",
    borderColor: "#85A98F",
  },
  categoryTextActive: {
    color: "#FFFFFF",
  },
  categoryContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});