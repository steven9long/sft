import React from 'react';
import { StyleSheet, FlatList, SafeAreaView } from 'react-native';
import { PlaceCard } from '@/app/all-places';

const places = [
  {
    id: '1',
    name: "Kowloon Park",
    location: "Tsim Sha Tsui, Hong Kong",
    rating: 4.6,
    reviews: 274,
    visitors: 14000,
    image: { uri: "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcRPJRXldwNs9_qd1rh1X0ymUHPkN36jnzHiC6ULHPI0ttUfUNT2VDDMo2qKfsaHltRoDADOuoVUPL6bnlqI235X00HOIPwaevU_rEdgGw" },
    type: "",
  },
  {
    id: '2',
    name: "Plan 2",
    location: "Sai Kung, Hong Kong",
    rating: 4.8,
    reviews: 36,
    visitors: 12000,
    image: { uri: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcT-ZeMWlJeQk1yDAb0Nd1-I6KvhbpolGmkEHUoYZs1U9EX6XDLGTl6CEroddcJ-1PkpB-Jz91IeAssFPBU2YcB8wew4crprtFuInkbDSA" },
    type: "",
  },
];

const FavoriteItinerariesScreen = () => {
  

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={places}
        renderItem={({ item }) => <PlaceCard item={item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  listContainer: {
  },
  card: {
    width: '100%', // Adjust the width to take full space
    marginBottom: 16,
  },
});

export default FavoriteItinerariesScreen;
