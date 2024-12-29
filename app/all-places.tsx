import React from 'react';
import { StyleSheet, View, FlatList, Image, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const getRandomNumber = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

const placesData = [
  {
    id: '1',
    name: 'Butterfly Beach',
    location: 'Tuen Mun, Hong Kong',
    rating: parseFloat((Math.random() * (4.9 - 3.8) + 3.8).toFixed(1)),
    reviews: getRandomNumber(10, 100),
    visitors: getRandomNumber(10, 30) * 1000,
    image: { uri: 'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcRPJRXldwNs9_qd1rh1X0ymUHPkN36jnzHiC6ULHPI0ttUfUNT2VDDMo2qKfsaHltRoDADOuoVUPL6bnlqI235X00HOIPwaevU_rEdgGw' },
    type: 'Beach',
  },
  {
    id: '2',
    name: 'Hong Kong Park',
    location: 'Central, Hong Kong',
    rating: parseFloat((Math.random() * (4.9 - 3.8) + 3.8).toFixed(1)),
    reviews: getRandomNumber(10, 100),
    visitors: getRandomNumber(10, 30) * 1000,
    image: { uri: 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSvqz5henCBUkJfypycg9T4LuTE4BHv5FRUkUkkovk6nqRx6BkN5QAT_TKW5usvBt3Xp9UZ8XcsMf1Opz2U7Z1xb9Il2m9muKv2cRckWw' },
    type: 'Park',
  },
  {
    id: '3',
    name: 'Kowloon Walled City Park',
    location: 'Kowloon City, Hong Kong',
    rating: parseFloat((Math.random() * (4.9 - 3.8) + 3.8).toFixed(1)),
    reviews: getRandomNumber(10, 100),
    visitors: getRandomNumber(10, 30) * 1000,
    image: { uri: 'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcQ7E5codKZrewGa2Vw-s-hrW3kseaGhnYXuHbthYf5JFdD6FaklyR4e6V65Ehe2PPR0mQ-g51voeDefN5RrH6lVnW4ZwB2HmumgX_dDGg' },
    type: 'Park',
  },
  {
    id: '4',
    name: 'Tai Long Wan',
    location: 'Sai Kung, Hong Kong',
    rating: parseFloat((Math.random() * (4.9 - 3.8) + 3.8).toFixed(1)),
    reviews: getRandomNumber(10, 100),
    visitors: getRandomNumber(10, 30) * 1000,
    image: { uri: 'https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcRs5KPh5NcFZKjL7imoCVFGooxyXcVl_eIacMhmZ5quHoSuT_Ja37DJKU8s7BRrPraH6GZCf3d4ebBtIZRoVQbnQH_hfpi6MCi0c_Fn-g' },
    type: ['Mountain', 'Ocean'],
  },
  {
    id: '5',
    name: 'Victoria Peak',
    location: 'Hong Kong Island, Hong Kong',
    rating: parseFloat((Math.random() * (4.9 - 3.8) + 3.8).toFixed(1)),
    reviews: getRandomNumber(10, 100),
    visitors: getRandomNumber(10, 30) * 1000,
    image: { uri: 'https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcTT3m33ZWK8oL30U9kUlzAbrqreM9UStFMhoIGYhOXT-V-vBImTQj_or8xeJXBCud2UxKAUvQzR3DuZCOPRMtDRTe9qyZSBbTAlrEiXVPg' },
    type: 'Mountain',
  },
  {
    id: '6',
    name: "Dragon's Back",
    location: 'Shek O, Hong Kong',
    rating: parseFloat((Math.random() * (4.9 - 3.8) + 3.8).toFixed(1)),
    reviews: getRandomNumber(10, 100),
    visitors: getRandomNumber(10, 30) * 1000,
    image: { uri: 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcT-ZeMWlJeQk1yDAb0Nd1-I6KvhbpolGmkEHUoYZs1U9EX6XDLGTl6CEroddcJ-1PkpB-Jz91IeAssFPBU2YcB8wew4crprtFuInkbDSA' },
    type: 'Mountain',
  },
];

interface Place {
  id: string;
  name: string;
  location: string;
  rating: number;
  reviews: number;
  visitors: number;
  image: { uri: string };
  type: string | string[];
}

const PlaceCard = ({ item }: { item: Place }) => {
  const renderType = (type: string | string[]) => {
    if (Array.isArray(type)) {
      return type.map((t, index) => (
        <View key={index} style={[styles.typeTag, styles[`typeTag_${t}`]]}>
          <Text style={styles.typeText}>{t}</Text>
        </View>
      ));
    }
    return (
      <View style={[styles.typeTag, styles[`typeTag_${type}`]]}>
        <Text style={styles.typeText}>{type}</Text>
      </View>
    );
  };

  return (
    <TouchableOpacity style={styles.card}>
      <Image source={item.image} style={styles.placeImage} />
      <View style={styles.cardContent}>
        <View>
          <Text style={styles.placeName}>{item.name}</Text>
          <View style={styles.locationContainer}>
            <Ionicons name="location-outline" size={16} color="#666" />
            <Text style={styles.locationText}>{item.location}</Text>
          </View>
          <View style={styles.statsContainer}>
            <Ionicons name="star" size={16} color="#4CAF50" />
            <Text style={styles.rating}>{item.rating}</Text>
            <Text style={styles.reviewCount}>{item.reviews} Reviews</Text>
            <Text style={styles.visitors}>+ 🌳{item.visitors.toLocaleString()}</Text>
          </View>
        </View>
        <View style={styles.typeContainer}>{renderType(item.type)}</View>
      </View>
      <View style={styles.arrowContainer}>
        <Ionicons name="chevron-forward" size={24} color="#666" />
      </View>
    </TouchableOpacity>
  );
};

export default function AllPlacesScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>All Places</Text>
      </View>
      <FlatList
        data={placesData}
        renderItem={({ item }) => <PlaceCard item={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles: { [key: string]: any } = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  headerTitle: { fontSize: 20, fontWeight: 'bold', marginLeft: 16 },
  card: {
    flexDirection: 'row',
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    backgroundColor: '#fff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  placeImage: { width: 80, height: 80, borderRadius: 8 },
  cardContent: { flex: 1, marginLeft: 16, justifyContent: 'space-between' },
  placeName: { fontSize: 18, fontWeight: 'bold' },
  locationContainer: { flexDirection: 'row', alignItems: 'center', marginTop: 4 },
  locationText: { color: '#666', marginLeft: 4 },
  statsContainer: { flexDirection: 'row', alignItems: 'center', marginTop: 4 },
  rating: { marginLeft: 4, fontWeight: 'bold' },
  reviewCount: { color: '#666', marginLeft: 8 },
  visitors: { color: '#4CAF50', marginLeft: 8 },
  typeContainer: { flexDirection: 'row', marginTop: 8 },
  typeTag: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 16,
    marginRight: 8,
  },
  typeTag_Beach: { backgroundColor: '#E3F2FD' },
  typeTag_Park: { backgroundColor: '#E8F5E9' },
  typeTag_Mountain: { backgroundColor: '#EDE7F6' },
  typeTag_Ocean: { backgroundColor: '#E0F7FA' },
  typeText: { fontSize: 12, color: '#4CAF50' },
  arrowContainer: { justifyContent: 'center' },
});