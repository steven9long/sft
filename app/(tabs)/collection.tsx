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
          uri: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Grosser_Panda.JPG",
        },
        {
          name: "Rhesus Macaque",
          scientificName: "Macaca mulatta",
          conservationStatus: "Least Concern",
          description:
            "Hong Kong's wild monkey population, around 2,000 in 30 troops, includes Rhesus Macaques, Long-tailed Macaques, and their hybrids. They inhabit various environments and primarily feed on plant materials. Human feeding has increased their population and led to fearless behaviors, causing them to snatch food from visitors' plastic bags.",
          reference:
            "Agriculture, Fisheries and Conservation Department. 'Wild Monkeys in Hong Kong.' Accessed December 14, 2024.",
          uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Davidraju_img15%28Macaca_mulatta%29_Rhesus_macaque.jpg/220px-Davidraju_img15%28Macaca_mulatta%29_Rhesus_macaque.jpg",
        },
        {
          name: "Hong Kong Oyster",
          scientificName: "Magallana hongkongensis",
          conservationStatus: "Not Evaluated",
          description:
            "Lau Fau Shan in Deep Bay, with over 700 years of history, is ideal for oyster farming. Oyster farmers use nearshore posts for baby oysters, transferring them to rafts for growth. The oysters are sold live, as golden dried oysters, dried oysters, or processed into oyster sauce.",
          reference:
            "Biodiversity Information Hub. 'Species Named After Hong Kong.' Accessed December 14, 2024.",
          uri: "https://bih.gov.hk/filemanager/fastfacts/en/upload/21/live_7-Hong-Kong-Oyster-1.jpg",
        },
        {
          name: "Great Blue Spotted Mudskipper",
          scientificName: "Boleophthalmus pectinirostris",
          conservationStatus: "N/A",
          description:
            "At low tide, the Great Blue Spotted Mudskipper searches for food on mudflats. Along the Mangrove Boardwalk in Wetland Park, you can find two species: the larger Great Blue Spotted Mudskipper with distinctive blue spots and the Shuttles Hoppfish (Periophthalmus modestus).",
          reference:
            "Hong Kong Wetland Park. 'Boleophthalmus pectinirostris.' Accessed December 14, 2024.",
          uri: "https://www.ecologyasia.com/images-gh/gt-blue-spot-mudskipper_0245a.jpg",
        },
        {
          name: "Chinese White Dolphin",
          scientificName: "Sousa chinensis",
          conservationStatus: "Vulnerable",
          description:
            "The Chinese white dolphin is beloved by Hong Kong people for its pink coloring and friendly nature. In Hong Kong waters, these dolphins prefer to stay close to the shore, especially on the western coast of the Pearl River Estuary.",
          reference:
            "WWF Hong Kong. 'Chinese White Dolphin.' Accessed December 14, 2024.",
          uri: "https://www.wildwondersofchina.com/img-get2/I0000ntmr24Rz0o4/fit=1000x750/MLU-20160629-095402-13US.jpg",
        },
        {
          name: "Eurasian Otter",
          scientificName: "Lutra lutra",
          conservationStatus: "Near Threatened",
          description:
            "Hong Kong is home to the Eurasian otter (Lutra lutra), one of 13 otter species worldwide. These otters inhabit streams, rivers, ponds, reservoirs, wetlands, irrigation channels, and coastal regions, and rest in dry habitats like earth tunnels, boulder piles, tree roots, and banks.",
          reference:
            "WWF Hong Kong. 'Mai Po Wetlands - Mammals.' Accessed December 14, 2024.",
          uri: "https://www.birdwords.co.uk/wp-content/uploads/2019/11/Eurasian-Otter-Lutra-lutra.jpg",
        },
        {
          name: "Hong Kong Cascade Frog",
          scientificName: "Amolops hongkongensis",
          conservationStatus: "Endangered",
          description:
            "The Hong Kong Cascade Frog, the only native frog named after Hong Kong, was discovered in Tai Mo Shan in 1950 and described as a new species in 1951. It is also found in southern Guangdong.",
          reference:
            "Biodiversity Information Hub. 'Species Named After Hong Kong.' Accessed December 14, 2024.",
          uri: "https://inaturalist-open-data.s3.amazonaws.com/photos/45578937/large.jpg",
        },
        {
          name: "Black-faced Spoonbill",
          scientificName: "Platalea minor",
          conservationStatus: "Endangered",
          description:
            "The Black-faced Spoonbill is a large white wading bird with a distinctive spoon-shaped beak and black facial skin. It migrates southward to wintering grounds and feeds on fish and shrimps in shallow coastal waters.",
          reference:
            "WWF Hong Kong. 'Chinese White Dolphin.' Accessed December 14, 2024.",
          uri: "https://www.wetlandpark.gov.hk/filemanager/photos/public/Ecological/5_Birds/09-Black-faced_Spoonbill.jpg",
        },
        {
          name: "Chinese Pangolin",
          scientificName: "Manis pentadactyla Linnaeus",
          conservationStatus: "Critically Endangered",
          description:
            "Among the eight pangolin species worldwide, Hong Kong hosts the Chinese Pangolin. This nocturnal species inhabits woodlands, digs burrows for daytime rest, and uses a long sticky tongue to feed on ants and termites. Rare and elusive, encountering one in the wild is a privilege.",
          reference:
            "Biodiversity Information Hub. 'Chinese Pangolin.' Accessed December 14, 2024.",
          uri: "https://taieol.tw/files/muse_taieol/muse_styles/w1024/mcode/13038682a86c78935d374791a10b10d5.jpg?itok=HQWhjGxJ",
        },
        {
          name: "Hong Kong Clubtail",
          scientificName: "Leptogomphus hongkongensis",
          conservationStatus: "Least Concern",
          description:
            "The Hong Kong Clubtail, one of 130 dragonfly species in the city, is hemimetabolous, transitioning from nymph to adult without a pupal phase. Nymphs are fierce freshwater predators, transforming into beautiful adult dragonflies during emergence. Named after Hong Kong, they highlight the city's rich biodiversity.",
          reference:
            "Biodiversity Information Hub. 'Species Named After Hong Kong.' Accessed December 14, 2024.",
          uri: "https://bih.gov.hk/Multimedia/multimedia-dataset/4/11537/11537_t.jpg",
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
      insects: [
        {
          name: "Common Birdwing",
          scientificName: "Troides helena",
          conservationStatus: "Least Concern",
          description:
            "Common Birdwing has a body that is tinted with red and golden colours, together with its golden black wings, making it a gorgeous dancer when in flight. It is one of the largest butterfly species in the territory. The species looks like a little bird because of its large wings. This is why its common name is called 'birdwing'.",
          reference: "https://bih.gov.hk/en/fast-facts/iconic-species/index-id-12.html",
          uri: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRtXUvMncEzcmpAHCOCkdL204R7lVn0SYnYdnZwgeyA_pe4XHlHQYI9u0g68uWWm59sRAgbQdk0yRawMAbjqxRZrQ",
        },
        {
          name: "Eastern Honey Bee",
          scientificName: "Apis cerana",
          conservationStatus: "N/A",
          description:
            "Eastern honey bees communicate to one another about good sources of nectar and pollen through the 'waggle dance'. A bee will perform this descriptive dance to other bees, after which they can interpret the dance and find their way to the food source. When they need to defend their nest from a wasp, they will surround the wasp and vibrate their muscles to generate heat, eventually killing the wasp via 'heat balling'.",
          reference: "https://pictureinsect.com/wiki/Apis_cerana.html",
          uri: "https://static.inaturalist.org/photos/2033079/medium.jpg",
        },
        {
          name: "Weaver Ant",
          scientificName: "Oecophylla smaragdina",
          conservationStatus: "N/A",
          description:
            "The weaver ant can be found in silk-woven nests in the foliage of Southeast Asia and Oceania. These ants have a painful bite and prey on other small insects. Larvae have many uses for local regions, including being a popular fishing bait and a good choice of bird food.",
          reference: "https://pictureinsect.com/wiki/Oecophylla_smaragdina.html",
          uri: "https://upload.wikimedia.org/wikipedia/commons/5/55/Red_Weaver_Ant%2C_Oecophylla_smaragdina.jpg",
        },
        {
          name: "Striped Tiger",
          scientificName: "Danaus genutia",
          conservationStatus: "N/A",
          description:
            "Native to a myriad of habitats across Asia and Australia, striped tiger displays a striking tawny coloration punctuated by black veins and bordered with a black margin sprinkled with white dots. As it matures from a persistent caterpillar with notable tentacles, this creature undergoes a metamorphosis into an adult with a wingspan that captures the fascination of onlookers. Possessing tarsi to taste the substrates it lands upon, striped tiger exhibits a unique sensory adaptation, allowing it to skillfully locate nourishment which predominantly consists of nectar from a diverse array of flowering plants.",
          reference: "https://pictureinsect.com/wiki/Danaus_genutia.html",
          uri: "https://inaturalist-open-data.s3.amazonaws.com/photos/219936/large.jpg",
        },
        {
          name: "Rustic",
          scientificName: "Cupha erymanthis",
          conservationStatus: "N/A",
          description:
            "With wings cloaked in a tapestry of warm oranges and browns, rustic flutters through its habitat, often found in proximity to its host plants. These winged creatures undergo a striking metamorphosis, emerging from chrysalises as distinctly patterned adults after spending an initial phase as voracious leaf-eaters. They contribute to pollination during their nectar-seeking flights, inadvertently transferring pollen as they thrive in a symbiotic relationship with their floral environment.",
          reference: "https://pictureinsect.com/wiki/Cupha_erymanthis.html",
          uri: "https://baliwildlife.com/wp-content/uploads/2021/09/IMG_0614.jpg",
        },
      ],
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