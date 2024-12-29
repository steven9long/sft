import React from 'react';
import { ScrollView, StyleSheet, Dimensions, Image, Text, TouchableOpacity, View } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';

const { width } = Dimensions.get('window');

const data = [
  {
    title: 'Immaculate Conception Chapel',
    description:
      'The Immaculate Conception Chapel (聖母無原罪小堂) in Tai Long Village, originally founded in 1867 and named Holy Family Chapel, is one of the historic churches of Sai Kung Peninsula.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Chapel_of_the_Immaculate_Conception_%28Hong_Kong%29_01.jpg/220px-Chapel_of_the_Immaculate_Conception_%28Hong_Kong%29_01.jpg',
  },
  {
    title: 'Tai Long Village',
    description:
      'The village of Tai Long (大浪) is located north of the bay. It is a recognized village under the New Territories Small House Policy. The village only has a small population of elderly residents and some organic farms.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFrCPyf4DCdQBgAeiCxQu_DygZoPh-FhItOQ&s',
  },
  {
    title: 'Tai Long Wan Hoi Fung Store',
    description:
      'Tai Long Wan Hoi Fung Store is a charming local shop nestled in the heart of Tai Long Wan, known for its unique selection of goods and warm atmosphere.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCxKV19bumuZvUxnLWqrl00tYBXnxQJpPCWg&s',
  },
  {
    title: 'Tai Chau & Tsim Chau',
    description:
      'Tai Chau and Tsim Chau are two picturesque islands located off the coast of Hong Kong, renowned for their pristine beaches, crystal-clear waters, and tranquil surroundings.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtBXeAobJmpweaKT2b-vGRGz6jpw6Ds4ISbA&s',
  },
];

const App: React.FC = () => {
  const [selectedMarker, setSelectedMarker] = React.useState<number | null>(null);
  const mapRef = React.useRef<MapView>(null);

  const routeCoordinates = [
    { latitude: 22.42107860309786, longitude: 114.38603013107799 }, // starting point, nothing shown
    { latitude: 22.417463882954955, longitude: 114.37167096516453 }, // Immaculate Conception Chapel
    { latitude: 22.416624543376543, longitude: 114.37191766364154 }, // Tai Long Village
    { latitude: 22.41128506061735, longitude: 114.37588894197913 }, // Tai Long Wan Hoi Fung Store
    { latitude: 22.40969192093629, longitude: 114.37583089274229 }, // Tai Chau & Tsim Chau
  ];

  const handleMarkerPress = (index: number) => {
    setSelectedMarker(index);
    mapRef.current?.animateToRegion({
      latitude: routeCoordinates[index].latitude,
      longitude: routeCoordinates[index].longitude,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    });
  };

  const renderCard = ({ item, index }: { item: typeof data[0]; index: number }) => (
    <TouchableOpacity
      key={index}
      style={[styles.card, selectedMarker === index + 1 ? styles.selectedCard : styles.unselectedCard]}
      onPress={() => handleMarkerPress(index + 1)}
    >
      <Image source={{ uri: item.image }} style={styles.image} />
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      {/* Map */}
      <View style={styles.mapContainer}>
        <MapView
          ref={mapRef}
          style={styles.map}
          initialRegion={{
            latitude: 22.416624543376543,
            longitude: 114.37583089274229,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
        >
          {/* Markers */}
          {routeCoordinates.map((coordinate, index) => (
            <Marker
              key={index}
              coordinate={coordinate}
              onPress={() => index !== 0 && handleMarkerPress(index)}
            />
          ))}

          {/* Polyline for Route */}
          <Polyline
            coordinates={routeCoordinates}
            strokeColor="#FF0000" // Red
            strokeWidth={4}
          />
        </MapView>
      </View>

      {/* Scrollable Cards */}
      <ScrollView horizontal style={styles.scrollContainer}>
        {data.map((item, index) => renderCard({ item, index }))}
      </ScrollView>

      {/* Selected Marker Info */}
      {selectedMarker !== null && selectedMarker > 0 && (
        <View style={styles.card}>
          <Text style={styles.title}>{data[selectedMarker - 1].title}</Text>
          <Text style={styles.description}>{data[selectedMarker - 1].description}</Text>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mapContainer: {
    height: 300,
    marginBottom: 20,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  scrollContainer: {
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    marginHorizontal: 10,
  },
  selectedCard: {
    width: width * 0.8,
  },
  unselectedCard: {
    width: width * 0.2,
  },
  image: {
    width: '100%',
    height: 180,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    color: '#555',
    marginTop: 5,
  },
});

export default App;