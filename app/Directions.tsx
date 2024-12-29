import React from 'react';
import { View, StyleSheet, Dimensions, Image, Text } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import Carousel from 'react-native-reanimated-carousel';
import TAnimationStyle from 'react-native-reanimated-carousel';
import { interpolate, Extrapolation } from 'react-native-reanimated';

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

const itemSize = width ;
const centerOffset = width / 2 - itemSize / 2;
const sideItemCount = 3;
const sideItemWidth = (width - itemSize) / sideItemCount;

const animationStyle = React.useCallback(
  (value: number) => {
    "worklet";

    const itemOffsetInput = new Array(sideItemCount * 2 + 1)
      .fill(null)
      .map((_, index) => index - sideItemCount);

    const itemOffset = interpolate(
      value,
      itemOffsetInput,
      itemOffsetInput.map((item) => {
        if (item < 0) {
          return (-itemSize + sideItemWidth) * Math.abs(item);
        }

        if (item > 0) {
          return (itemSize - sideItemWidth) * (Math.abs(item) - 1);
        }

        return 0;
      }) as number[]
    );

    const translate =
      interpolate(value, [-1, 0, 1], [-itemSize, 0, itemSize]) + centerOffset - itemOffset;

    const width = interpolate(
      value,
      [-1, 0, 1],
      [sideItemWidth, itemSize, sideItemWidth],
      Extrapolation.CLAMP
    );

    return {
      transform: [
        {
          translateX: translate,
        },
      ],
      width,
      overflow: 'hidden' as 'hidden',
    };
  },
  [centerOffset, itemSize, sideItemWidth, sideItemCount]
);

const App: React.FC = () => {
  const routeCoordinates = [
    { latitude: 22.42107860309786, longitude: 114.38603013107799 },
    { latitude: 22.417463882954955, longitude: 114.37167096516453 },
    { latitude: 22.416624543376543, longitude: 114.37191766364154 },
    { latitude: 22.41128506061735, longitude: 114.37588894197913 },
    { latitude: 22.40969192093629, longitude: 114.37583089274229 },
  ];

  const renderCarouselItem = ({ item }: { item: typeof data[0] }) => (
    <View style={[styles.card, { width: "100%" }]}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Map */}
      <View style={styles.mapContainer}>
        <MapView
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
            <Marker key={index} coordinate={coordinate} />
          ))}

          {/* Polyline for Route */}
          <Polyline
            coordinates={routeCoordinates}
            strokeColor="#FF0000" // Red
            strokeWidth={4}
          />
        </MapView>
      </View>

      {/* Carousel */}
      <Carousel
        width={itemSize}
        height={300}
        style={{
          width: width,
          height: 300,
          backgroundColor: "white",
        }}
        loop
        windowSize={Math.round(data.length / 2)}
        scrollAnimationDuration={1500}
        autoPlay
        autoPlayInterval={5000}
        data={data}
        renderItem={renderCarouselItem}
        customAnimation={animationStyle}
      />
    </View>
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
  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    marginHorizontal: 20,
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