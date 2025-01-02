import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { router } from 'expo-router';

const KowloonPark = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.photosContainer}>
        <Image source={{ uri: 'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcRPJRXldwNs9_qd1rh1X0ymUHPkN36jnzHiC6ULHPI0ttUfUNT2VDDMo2qKfsaHltRoDADOuoVUPL6bnlqI235X00HOIPwaevU_rEdgGw' }} style={styles.photo} />
        <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSvqz5henCBUkJfypycg9T4LuTE4BHv5FRUkUkkovk6nqRx6BkN5QAT_TKW5usvBt3Xp9UZ8XcsMf1Opz2U7Z1xb9Il2m9muKv2cRckWw' }} style={styles.photo} />
        <Image source={{ uri: 'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcQ7E5codKZrewGa2Vw-s-hrW3kseaGhnYXuHbthYf5JFdD6FaklyR4e6V65Ehe2PPR0mQ-g51voeDefN5RrH6lVnW4ZwB2HmumgX_dDGg' }} style={styles.photo} />
        <Image source={{ uri: 'https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcRs5KPh5NcFZKjL7imoCVFGooxyXcVl_eIacMhmZ5quHoSuT_Ja37DJKU8s7BRrPraH6GZCf3d4ebBtIZRoVQbnQH_hfpi6MCi0c_Fn-g' }} style={styles.photo} />
      </ScrollView>
      <Text style={styles.title}>Kowloon Park</Text>
      <Text style={styles.subtitle}>Tsim Sha Tsui, Hong Kong</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.difficulty}>Difficulty: </Text>
        <Ionicons name="star" size={16} color="#85A98F" />
        <FontAwesome name="tree" size={20} color="#85A98F" />
        <Text style={styles.points}>+ 15,000</Text>
      </View>
      <Text style={styles.description}>
        In the 1830s, some westerners found that Victoria Harbour was an ideal anchorage place for vessels. At that time, the site of the later Kowloon Park was an important military base over-looking the Harbour. In 1861, the British occupied Kowloon peninsula and named the base as Whitfield Barracks.
      </Text>
      <TouchableOpacity onPress={() => Linking.openURL('https://www.lcsd.gov.hk/en/parks/kp/historical.html')}>
        <Text style={styles.link}>https://www.lcsd.gov.hk/en/parks/kp/historical.html</Text>
      </TouchableOpacity>
      <View style={styles.ratingContainer}>
        <Text style={styles.rating}>4.0</Text>
        <TouchableOpacity>
          <Text style={styles.readReviews}>Read Reviews</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.duration}>30 min</Text>
      <TouchableOpacity style={styles.directionsButton} onPress={() => router.push('/Directions')}>
              <MaterialCommunityIcons name="directions-fork" size={16} color="#fff" style={{ marginRight: 8 }} />
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
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  rating: {
    fontSize: 16,
    color: '#85A98F',
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

export default KowloonPark;
