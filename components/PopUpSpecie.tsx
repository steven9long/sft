import React from "react";
import {
  Modal,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
} from "react-native";

export default function PopUpSpecie({
  visible,
  item,
  onClose,
}: {
  visible: boolean;
  item: {
    name: string;
    scientificName: string;
    description: string;
    uri: string;
  } | null;
  onClose: () => void;
}) {
  if (!item) return null;

  return (
    <Modal visible={visible} transparent animationType="fade">
      <SafeAreaView style={styles.safeArea}>
        <ImageBackground
          source={{ uri: item.uri }}
          style={styles.imageBackground}
        >
          {/* Back Button */}
          <TouchableOpacity onPress={onClose} style={styles.backButton}>
            <Text style={styles.backButtonText}>←</Text>
          </TouchableOpacity>

          {/* Text Content */}
          <View style={styles.textContainer}>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.subtitle}>{item.scientificName}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.7)", // Modal background
  },
  imageBackground: {
    flex: 1,
    justifyContent: "flex-end",
  },
  backButton: {
    position: "absolute",
    top: 20,
    left: 20,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
  },
  backButtonText: {
    fontSize: 20,
    color: "#000",
  },
  textContainer: {
    padding: 20,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 18,
    fontStyle: "italic",
    color: "#d1d1d1",
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    color: "#f5f5f5",
  },
});