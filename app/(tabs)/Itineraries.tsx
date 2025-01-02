import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import DiscoverItinerariesScreen from '@/components/Itineraries/discover';
import AddItinerariesScreen from '@/components/Itineraries/add';
import FavoriteItinerariesScreen from '@/components/Itineraries/favorite';

export default function ItinerariesScreen() {
  const [activeTab, setActiveTab] = useState('discover'); // Initial tab is 'discover'

  return (
    <View style={styles.container}>
      {/* Title */}
      <View style={styles.header}>
        <Text style={styles.title}>Itineraries</Text>
      </View>

      {/* Top navigation buttons */}
      <View style={styles.navBar}>
        {/* Discover Page Button */}
        <TouchableOpacity onPress={() => setActiveTab('discover')} style={styles.navButton}>
          <Ionicons
            name={activeTab === 'discover' ? 'person' : 'person-outline'}
            size={30}
            color={activeTab === 'discover' ? '#85A98F' : '#A1A1A1'}
          />
        </TouchableOpacity>

        {/* Add Page Button */}
        <TouchableOpacity onPress={() => setActiveTab('add')} style={styles.navButton}>
          <MaterialIcons
            name={activeTab === 'add' ? 'add-circle' : 'add-circle-outline'}
            size={30}
            color={activeTab === 'add' ? '#85A98F' : '#A1A1A1'}
          />
        </TouchableOpacity>

        {/* Favorite Page Button */}
        <TouchableOpacity onPress={() => setActiveTab('favorite')} style={styles.navButton}>
          <Ionicons
            name={activeTab === 'favorite' ? 'heart-sharp' : 'heart-outline'}
            size={30}
            color={activeTab === 'favorite' ? '#85A98F' : '#A1A1A1'}
          />
        </TouchableOpacity>
      </View>

      {/* Content for each tab */}
      <View style={styles.content}>
        {activeTab === 'discover' && <DiscoverItinerariesScreen />}
        {activeTab === 'add' && <AddItinerariesScreen />}
        {activeTab === 'favorite' && <FavoriteItinerariesScreen />}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddingTop: 50,
    paddingBottom: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#f9f9f9',
  },
  navButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
});