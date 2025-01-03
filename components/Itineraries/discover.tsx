import React, { useState } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Carousel from 'react-native-reanimated-carousel';

const itineraries = [
  {
    title: 'Tuen Mun – Yuen Long',
    author: 'Amanda H.',
    difficulty: 1,
    duration: '3 hr',
    visitors: 15000,
    description:
      'The ecology, scenic beauty and local delicacies in Tuen Mun, Yuen Long and Tin Shui Wai are surprisingly wonderful. Lau Fau Shan, renowned for its seafood offer, attracts a large number of visitors during holidays who enjoy delicious seafood, buy souvenirs and appreciate the sunset.',
    image: {
      uri: 'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcTy70GwRcdsNzgBARUwjeqSKR5KXw32lgWVlOMYqq3MDo3G0yxpHXyUJ7BAg6SfMcaYdIGz1gYptSkYiAdqzTdaQhbyMY3Q0w9b5rRpFg',
    },
    tags: ['Cycling', 'Nature', 'Photography'],
    savedBy: ['JudyA', 'john20p', 'susansss'],
  },
  {
    title: 'Yuen Long - Sheung Shui',
    author: 'Amanda H.',
    difficulty: 2,
    duration: '1.5 hr',
    visitors: 4600,
    description:
      'Found along the section from Yuen Long to Sheung Shui are the scenic spots with rich natural and cultural ambience, as well as deep historical roots. There are not only beautiful natural landscapes and wildlife animals, but also many historical and cultural monuments.',
    image: {
      uri: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/67/42/73/this-is-one-of-my-favorite.jpg?w=1200&h=-1&s=1'
    },
    tags: ['Cycling', 'Nature', 'Photography'],
    savedBy: ['JudyA', 'john20p', 'susansss'],
  },
  {
    title: 'Mai Po Nature Reserve',
    author: 'Amanda H.',
    difficulty: 3,
    duration: '1.5 hr',
    visitors: 3000,
    description:
      'Mai Po Nature Reserve, located in Yuen Long District, is a Ramsar wetland and the largest wetland in Hong Kong, adjacent to Shenzhen\'s Futian area. The reserve maintains 24 operational gei wai shrimp ponds, and hosts fishponds, reedbeds, mudflats, and mangroves, attracting a vast array of species, including around 400 insect species and 300 bird species.',
    image: {
      uri: 'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcRkezk0KNraAYGpgW-lE20xDRVNsL30_gH7fGCXFIxeINALYKhlZkuWWKiXiE7jYeUGzCuN1AVw3iL1lzPqqZAv85yrkI4cSokJVMr1Zw',
    },
    tags: ['Cycling', 'Nature', 'Photography'],
    savedBy: ['JudyA', 'john20p', 'susansss'],
  },
];

export default function DiscoverItinerariesScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const renderDifficulty = (level: number) => {
    const dots = Array(5)
      .fill(0)
      .map((_, index) => (
        <Ionicons
          key={index}
          name="ellipse"
          size={10}
          color={index < level ? '#85A98F' : '#E0E0E0'}
          style={{ marginHorizontal: 2 }}
        />
      ));
    return <View style={styles.difficultyContainer}>{dots}</View>;
  };

  const currentItinerary = itineraries[currentIndex];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        
        <View style={styles.content}>
          <Text style={styles.subtitle}>As you like <Ionicons name="bicycle" size={16} color="#85A98F" /> Cycling...</Text>

          <View style={styles.imageContainer}>
            <Carousel
              width={300}
              height={200}
              data={itineraries}
              renderItem={({ item }) => <Image source={item.image} style={styles.image} />}
              onSnapToItem={(index) => setCurrentIndex(index)}
            />
            <View style={styles.carouselPrompts}>
              <Text style={styles.carouselPrompt}>&lt;</Text>
              <Text style={styles.carouselPrompt}>&gt;</Text>
            </View>
          </View>

          <View style={styles.infoContainer}>
            <Text style={styles.title}>{currentItinerary.title}</Text>
            <Text style={styles.author}>By {currentItinerary.author}</Text>

            <View style={styles.detailsContainer}>
              <Text style={styles.detailText}>
                <Ionicons name="time-outline" size={14} color="#666" /> {currentItinerary.duration}
              </Text>
              <Text style={styles.detailText}>
                <Ionicons name="people-outline" size={14} color="#666" /> +{currentItinerary.visitors.toLocaleString()}
              </Text>
            </View>

            <View style={styles.difficulty}>
              <Text style={styles.detailText}>Difficulty: </Text>
              {renderDifficulty(currentItinerary.difficulty)}
            </View>
          </View>

          <Text style={styles.description}>{currentItinerary.description}</Text>

          <View style={styles.savedByContainer}>
            {currentItinerary.savedBy.map((person, index) => (
              <Ionicons
                key={index}
                name="person-circle-outline"
                size={24}
                color="#666"
                style={[styles.savedByAvatar, { marginLeft: index === 0 ? 0 : -8 }]}
              />
            ))}
            <Text style={styles.savedByText}>
              {currentItinerary.savedBy.join(', ')} have saved this plan
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  headerTitle: { fontSize: 20, fontWeight: 'bold' },
  content: { padding: 16 },
  subtitle: { fontSize: 16, color: '#85A98F', fontWeight: '600', marginBottom: 8 },
  imageContainer: {
    position: 'relative',
    alignItems: 'center',
  },
  image: { width: '100%', height: 200, borderRadius: 12, marginBottom: 16 },
  infoContainer: { marginBottom: 16 },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 4 },
  author: { fontSize: 14, color: '#666', marginBottom: 8 },
  detailsContainer: { flexDirection: 'row', marginBottom: 8 },
  detailText: { fontSize: 14, color: '#666', marginRight: 16 },
  difficulty: { flexDirection: 'row', alignItems: 'center', marginBottom: 16 },
  difficultyContainer: { flexDirection: 'row', marginLeft: 8 },
  description: { fontSize: 14, color: '#666', lineHeight: 20, marginBottom: 16 },
  savedByContainer: { flexDirection: 'row', alignItems: 'center', marginTop: 16 },
  savedByAvatar: { marginRight: 8 },
  savedByText: { fontSize: 14, color: '#666' },
  carouselPrompts: {
    position: 'absolute',
    top: '50%',
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  carouselPrompt: {
    fontSize: 24,
    color: '#000',
  },
});