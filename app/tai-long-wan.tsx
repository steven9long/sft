import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { router } from 'expo-router';

const TaiLongWan = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.photosContainer}>
        <Image source={{ uri: 'https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcTT3m33ZWK8oL30U9kUlzAbrqreM9UStFMhoIGYhOXT-V-vBImTQj_or8xeJXBCud2UxKAUvQzR3DuZCOPRMtDRTe9qyZSBbTAlrEiXVPg' }} style={styles.photo} />
        <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcT-ZeMWlJeQk1yDAb0Nd1-I6KvhbpolGmkEHUoYZs1U9EX6XDLGTl6CEroddcJ-1PkpB-Jz91IeAssFPBU2YcB8wew4crprtFuInkbDSA' }} style={styles.photo} />
        <Image source={{ uri: 'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcQX8F2nqY62TY2kfslaRSKg5BfRltnETlMz0Kl1UOnjHQp-JXtc-YcDpz3-1dt1coKJ3rq0oS4VPjsjaPA1_cnYy1-_AGv_tMZ1mJ-jJg' }} style={styles.photo} />
        <Image source={{ uri: 'https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcT3cc7eEKwyh-fsFAk2EqzV--kuOGo7TfFR6EYeTDFd1bIaO39cMHXJWf7FtcjOJB4BMpDZAwNL-377zKZJvaMnVGOQg41HejNwVSHJgg' }} style={styles.photo} />
      </ScrollView>
      <Text style={styles.title}>Tai Long Wan</Text>
      <Text style={styles.subtitle}>Sai Kung, Hong Kong</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.difficulty}>Difficulty: </Text>
        <Ionicons name="star" size={16} color="#4CAF50" />
        <Ionicons name="star" size={16} color="#4CAF50" />
        <Text style={styles.points}>+ 🌳15,000</Text>
      </View>
      <Text style={styles.description}>
        With its white-sand beaches, crystal clear waters, and surrounding lush mountains, Tai Long Wan is nothing short of paradise in a city synonymous with tall skyscrapers.
      </Text>
      <TouchableOpacity onPress={() => Linking.openURL('https://droneandslr.com/travel-blog/hong-kong/tai-long-wan-sai-kung/')}>
        <Text style={styles.link}>https://droneandslr.com/travel-blog/hong-kong/tai-long-wan-sai-kung/</Text>
      </TouchableOpacity>
      <View style={styles.ratingContainer}>
        <Text style={styles.rating}>4.0</Text>
        <TouchableOpacity>
          <Text style={styles.readReviews}>Read Reviews</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.duration}>30 min</Text>
      <TouchableOpacity style={styles.directionsButton} onPress={() => router.push('/Directions')}>
        <Text style={styles.directionsText}>Get Directions</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    marginBottom: 16,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  difficulty: {
    fontSize: 16,
    color: '#4CAF50',
    marginRight: 8,
  },
  points: {
    fontSize: 16,
    color: '#4CAF50',
    marginLeft: 8,
  },
  description: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginBottom: 16,
  },
  link: {
    fontSize: 14,
    color: '#1E90FF',
    marginBottom: 16,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  rating: {
    fontSize: 16,
    color: '#4CAF50',
    marginRight: 8,
  },
  readReviews: {
    fontSize: 14,
    color: '#1E90FF',
  },
  duration: {
    fontSize: 14,
    color: '#666',
    marginBottom: 16,
  },
  photosTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  photosContainer: {
    marginBottom: 16,
  },
  photo: {
    width: 300,
    height: 200,
    borderRadius: 12,
    marginRight: 8,
  },
  directionsButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  directionsText: {
    fontSize: 16,
    color: '#fff',
  },
});

export default TaiLongWan;
