import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { FontAwesome, FontAwesome6, Ionicons, MaterialCommunityIcons, Octicons } from '@expo/vector-icons';
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
        <Ionicons name="star" size={16} color="#85A98F" />
        <Ionicons name="star" size={16} color="#85A98F" />
        <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 'auto' }}>
          <FontAwesome name="tree" size={20} color="#85A98F" />
          <Text style={styles.points}>+ 15,000</Text>
        </View>
      </View>
      <Text style={styles.description}>
        With its white-sand beaches, crystal clear waters, and surrounding lush mountains, Tai Long Wan is nothing short of paradise in a city synonymous with tall skyscrapers.
      </Text>
      <TouchableOpacity onPress={() => Linking.openURL('https://droneandslr.com/travel-blog/hong-kong/tai-long-wan-sai-kung/')}>
        <Text style={styles.link}>https://droneandslr.com/travel-blog/hong-kong/tai-long-wan-sai-kung/</Text>
      </TouchableOpacity>
      {/* Rating and Info */}
      <View style={styles.infoRow}>
        <View style={styles.ratingContainer}>
          <Ionicons name="star" size={16} color="#85A98F" />
          <Text style={styles.rating}>4.0</Text>
        </View>
        <TouchableOpacity style={styles.reviewButton}>
          <Octicons name="comment-discussion" size={16} color="#85A98F" />
          <Text style={styles.reviewText}>Read Reviews</Text>
        </TouchableOpacity>
        <View style={styles.routeContainer}>
          <FontAwesome6 name="route" size={16} color="#85A98F" />
          <Text style={styles.duration}>30 min</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.directionsButton} onPress={() => router.push('/Directions')}>
        <MaterialCommunityIcons name="directions-fork" size={16} color="#fff" style={{ marginRight: 8 }} />
        <Text style={styles.directionsText}>Get Directions</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    fontSize: 16,
    color: '#85A98F',
    marginLeft: 4,
  },
  reviewButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#D3F1DF',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 16,
  },
  reviewText: {
    fontSize: 14,
    color: '#85A98F',
    marginLeft: 4,
  },
  routeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  duration: {
    fontSize: 14,
    color: '#666',
    marginLeft: 4,
  },
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
    color: '#85A98F',
    marginRight: 8,
  },
  points: {
    fontSize: 16,
    color: '#85A98F',
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
  readReviews: {
    fontSize: 14,
    color: '#1E90FF',
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
    backgroundColor: '#85A98F',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  directionsText: {
    fontSize: 16,
    color: '#fff',
  },
});

export default TaiLongWan;
