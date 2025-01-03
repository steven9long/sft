import React from 'react';
import { View, Text, Modal, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

interface PointsPopupProps {
  visible: boolean;
  onClose: () => void;
}

const PointsPopup: React.FC<PointsPopupProps> = ({ visible, onClose }) => {
  return (
    <Modal
      transparent={true}
      visible={visible}
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.popupContainer}>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <FontAwesome name="close" size={24} color="#000" />
          </TouchableOpacity>

          <Text style={styles.title}>
            What Is <Text style={styles.highlightedText}>Green Credit</Text>?
          </Text>

          <View style={styles.iconContainer}>
            <FontAwesome name="tree" size={40} color="#85A98F" />
          </View>

          <Text style={styles.description}>
            <Text style={styles.highlightedDescription}>Green credit</Text> is a special in-game currency that rewards players for participating in green tourism activities. By engaging in eco-friendly practices that <Text style={styles.greenText}>reduce carbon emissions</Text>, users earn Green credits. For every kilometer traveled on foot or by bike, <Text style={styles.greenText}>106.4g of CO2 is reduced</Text>. Each gram of CO2 reduced will be converted to 1 green credit point. These credits can be used to <Text style={styles.greenText}>unlock rewards</Text> within the app.
          </Text>

          <View style={styles.divider} />

          <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
            <Text style={styles.cancelButtonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  popupContainer: {
    width: '85%',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    top: 15,
    right: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  highlightedText: {
    color: '#85A98F',
  },
  iconContainer: {
    marginVertical: 10,
  },
  description: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 20,
  },
  highlightedDescription: {
    fontWeight: 'bold',
    color: '#000',
  },
  greenText: {
    color: '#85A98F',
    fontWeight: 'bold',
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 20,
  },
  cancelButton: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 40,
  },
  cancelButtonText: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
  },
});

export default PointsPopup;