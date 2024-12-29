import React, { useState } from "react";
import {
  View,
  Text,
  Switch,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { MasonryFlashList } from "@shopify/flash-list"; // Updated import
import { Ionicons } from "@expo/vector-icons";
import PopUpSpecie from "../../components/PopUpSpecie";

const { width } = Dimensions.get("window");

export default function Collection() {
  const data = {
    animals: [
      {
        name: "Giant Panda",
        scientificName: "Ailuropoda melanoleuca",
        description:
          "The giant panda is a bear native to south-central China. It is known for its striking black-and-white coat and reliance on bamboo for food.",
        reference: "(WWF. 'Giant Panda.' Accessed December 14, 2024.)",
        uri: "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcTT3m33ZWK8oL30U9kUlzAbrqreM9UStFMhoIGYhOXT-V-vBImTQj_or8xeJXBCud2UxKAUvQzR3DuZCOPRMtDRTe9qyZSBbTAlrEiXVPg",
      },
      {
        name: "Bottlenose Dolphin",
        scientificName: "Tursiops truncatus",
        description:
          "Bottlenose dolphins are highly intelligent marine mammals known for their playful behavior and use of echolocation.",
        reference:
          "(National Geographic. 'Bottlenose Dolphin.' Accessed December 14, 2024.)",
          uri: "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcTT3m33ZWK8oL30U9kUlzAbrqreM9UStFMhoIGYhOXT-V-vBImTQj_or8xeJXBCud2UxKAUvQzR3DuZCOPRMtDRTe9qyZSBbTAlrEiXVPg",
      },
    ],
    plants: [
        {
          name: "Hong Kong Orchid Tree",
          scientificName: "Bauhinia blakeana",
          description:
            "The Hong Kong Orchid Tree, first discovered in the 1880s in Pok Fu Lam, is known for its large, attractive flowers and is the city flower of Hong Kong. It is infertile and propagated through grafting. Named after Sir Henry Arthur Blake, it is a hybrid between Bauhinia purpurea and Bauhinia variegata.",
          reference:
            "(Greening, Landscape & Tree Management Section of the Development Bureau. 'Hong Kong Orchid Tree.' Accessed December 14, 2024.)",
          uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bauhinia_blakeana_%28Key_West%29.jpg/1024px-Bauhinia_blakeana_%28Key_West%29.jpg",
        },
        {
          name: "Hong Kong Primrose",
          scientificName: "Lysimachia alpestris Champ",
          description:
            "Discovered in Hong Kong in 1850s on the top of Victoria Peak. Perennial herb, leaves tufted, stiffly hairy on both sides. Yellow flowers appear in April. Only found in Hong Kong and Guangdong.",
          reference:
            "Hong Kong Herbarium. 'Hong Kong Plants - Special Topics.' Accessed December 14, 2024. https://www.herbarium.gov.hk/en/special-topics/hong-kong-plants/hong-kong-plants-detail/index-id-11.html.",
          uri: "https://inaturalist-open-data.s3.amazonaws.com/photos/45578937/large.jpg",
        },
        {
          name: "Shiuying Bamboo",
          scientificName: "Arundinaria shiuyingiana Chia et But",
          description:
            "Named after Dr. Shiu-ying Hu for her contribution to the understanding of Hong Kong flora in 1983. A small bamboo species with 4-6 m in height and 1-2 cm in diameter. This species has not been recorded in anywhere else in the world so far.",
          reference:
            "Hong Kong Herbarium. 'Hong Kong Plants - Special Topics.' Accessed December 14, 2024. https://www.herbarium.gov.hk/en/special-topics/hong-kong-plants/hong-kong-plants-detail/index-id-16.html.",
          uri: "https://www.wikiwand.com/zh/articles/%E7%A7%80%E8%8B%B1%E7%AB%B9#/media/File:Arundinaria_shiuyingiana_1.jpg",
        },
        {
          name: "Hong Kong Azalea",
          scientificName: "Rhododendron hongkongense Hutch",
          description:
            "This species was first discovered on Hong Kong Island between 1847 and 1850 and recognised as a new species in 1851. It was revised to be named after Hong Kong in 1930. White to light red flowers appear in April, much more elegant than the lovely or Purple Azalea commonly cultivated in parks. However, it can only be found in Ma On Shan and a few other locations.",
          reference:
            "Hong Kong Herbarium. 'Hong Kong Plants - Special Topics.' Accessed December 14, 2024. https://www.herbarium.gov.hk/en/special-topics/hong-kong-plants/hong-kong-plants-detail/index-id-7.html.",
          uri: "https://inaturalist-open-data.s3.amazonaws.com/photos/45578937/large.jpg",
        },
        {
          name: "Hong Kong Rose",
          scientificName: "Rhodoleia championii Hook",
          description:
            "Discovered in a woodland behind the little Hong Kong (now Aberdeen) in 1849. A medium-sized evergreen tree, attractive rose or claret-coloured flowers appear in late winter to early spring. Natural population only found in Aberdeen, but propagated in various country parks. A handsome tree with potential for ornamental planting.",
          reference:
            "Hong Kong Herbarium. 'Hong Kong Plants - Special Topics.' Accessed December 14, 2024. https://www.herbarium.gov.hk/en/special-topics/hong-kong-plants/hong-kong-plants-detail/index-id-12.html.",
          uri: "https://syhuherbarium.sls.cuhk.edu.hk/collections/wp-content/uploads/sites/2/IMG_7562_v1024-1024x768.jpg",
        },
        {
          name: "Dunn’s Star Anise",
          scientificName: "Illicium dunnianum Tutcher",
          description:
            "First discovered in 1903 and named after Mr. Dunn, the then Superintendent of the Botanical and Afforestation Department. The distribution of this species is restricted to the stream courses at northeastern New Territories. It is of the same genus with the spice Star Anise, the fruit can be used as spice.",
          reference:
            "Hong Kong Herbarium. 'Hong Kong Plants - Special Topics.' Accessed December 14, 2024. https://www.herbarium.gov.hk/en/special-topics/hong-kong-plants/hong-kong-plants-detail/index-id-17.html.",
          uri: "https://www.herbarium.gov.hk/filemanager/en/content_36/22.jpg",
        },
        {
          name: "Hong Kong Balsam",
          scientificName: "Impatiens hongkongensis Gery-Wilson",
          description:
            "Discovered at Tai Po in 1925, described as a new species in 1978 and is endemic to Hong Kong so far as it is known. A perennial herb with attractive yellow flowers. Growing in damp spots in semi-shaded positions, along stream beds and in ravines.",
          reference:
            "Hong Kong Herbarium. 'Hong Kong Plants - Special Topics.' Accessed December 14, 2024. https://www.herbarium.gov.hk/en/special-topics/hong-kong-plants/hong-kong-plants-detail/index-id-8.html.",
          uri: "https://www.herbarium.gov.hk/filemanager/en/content_36/12.jpg",
        },
        {
          name: "Hong Kong Iris",
          scientificName: "Iris speculatrix Hance",
          description:
            "Discovered on Hong Kong Island by Hance in 1875. A perennial herb of Iridaceae, violet flowers appear in April and May. The cultivated hybrid of Iris has commonly been used as cut flowers.",
          reference:
            "Hong Kong Herbarium. 'Hong Kong Plants - Special Topics.' Accessed December 14, 2024. https://www.herbarium.gov.hk/en/special-topics/hong-kong-plants/hong-kong-plants-detail/index-id-13.html.",
          uri: "https://www.herbarium.gov.hk/filemanager/en/content_136/89.jpg",
        },
      ],
    insects: [{
        name: "Hong Kong Orchid Tree",
        scientificName: "Bauhinia blakeana",
        description:
          "The Hong Kong Orchid Tree, first discovered in the 1880s in Pok Fu Lam, is known for its large, attractive flowers and is the city flower of Hong Kong. It is infertile and propagated through grafting. Named after Sir Henry Arthur Blake, it is a hybrid between Bauhinia purpurea and Bauhinia variegata.",
        reference:
          "(Greening, Landscape & Tree Management Section of the Development Bureau. 'Hong Kong Orchid Tree.' Accessed December 14, 2024.)",
          uri: "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcTT3m33ZWK8oL30U9kUlzAbrqreM9UStFMhoIGYhOXT-V-vBImTQj_or8xeJXBCud2UxKAUvQzR3DuZCOPRMtDRTe9qyZSBbTAlrEiXVPg",
      },],
  };

  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handlePress = (item: any) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

const renderCarousel = (title: string, items: { name: string; uri: string }[], index: number) => {
    console.log("items", items);
    return (
        <View style={styles.carouselContainer}>
            <Text style={styles.carouselTitle}>{title}</Text>
            <MasonryFlashList
                data={items}
                numColumns={3}
                renderItem={({ item }) => (
                  <TouchableOpacity onPress={() => handlePress(item)}>
                    <DynamicImage uri={item.uri} />
                  </TouchableOpacity>
                )}
                estimatedItemSize={200}
                contentContainerStyle={{ paddingHorizontal: 16, backgroundColor: "lightgray", paddingVertical: 5 }}
            />
        </View>
    );
};

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.header}>
          <Text style={styles.headerHighlight}>20</Text> newly species so far!
        </Text>
        <View style={styles.uploadContainer}>
          <Text style={styles.uploadText}>UPLOAD TO DATABASE</Text>
          <Switch />
        </View>

        <Carousel
          data={[
            { title: "Animals", items: data.animals },
            { title: "Plants", items: data.plants },
            { title: "Insects", items: data.insects },
          ]}
          renderItem={({ item, index }) => renderCarousel(item.title, item.items, index)}
          width={width}
        />

        <View style={styles.fabContainer}>
          <TouchableOpacity style={styles.fabButton}>
            <Ionicons name="map" size={28} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.fabButton}>
            <Ionicons name="camera" size={28} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
      <PopUpSpecie
        visible={modalVisible}
        item={selectedItem}
        onClose={() => setModalVisible(false)}
      />
    </>
  );
}
const DynamicImage = ({ uri }: { uri: string }) => {
    const [imageDimensions, setImageDimensions] = React.useState<{ width: number; height: number } | null>(null);
  
    React.useEffect(() => {
      // Fetch the actual dimensions of the image
      Image.getSize(uri, (width, height) => {
        setImageDimensions({ width, height });
      });
    }, [uri]);
    if (!imageDimensions) return null;
  

    return (
      <Image
        source={{ uri }}
        style={{
          height: imageDimensions.height/4,
          width: "93%", // Ensures the image takes full column width
    borderRadius: 8,
    marginBottom: 8,
    resizeMode: "cover",

        }}
      />
    );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
  },
  header: {
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    marginTop: 16,
  },
  headerHighlight: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#4CAF50",
  },
  uploadContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
  },
  uploadText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#4CAF50",
    marginRight: 8,
  },
  carouselContainer: {
    marginVertical: 16,
    height: 2000, // Added height for the carousel container
  },
  carouselTitle: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 8,
  },
  image: {
    width: "93%", // Ensures the image takes full column width
    aspectRatio: 0.75, // Adjust this for desired height-to-width ratio
    borderRadius: 8,
    marginBottom: 8,
    resizeMode: "cover",
    height: 200, 
//the height change dynimically based on the aspect ratio

  },
  fabContainer: {
    position: "absolute",
    bottom: 16,
    right: 16,
  },
  fabButton: {
    backgroundColor: "#4CAF50",
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
});