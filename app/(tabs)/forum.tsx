import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // For the search icon
import { Ionicons } from '@expo/vector-icons'; // For the chat bubble icon
import { MaterialCommunityIcons } from '@expo/vector-icons'; // For the bell icon
import BlogInvite from '../../components/BlogInvite';
import BlogPost from '../../components/BlogPost';
import EventCard from '../../components/EventCard';

const Forum = () => {
  const [view, setView] = useState('Blog'); // State to toggle between Blog and Events

  const events = [
    { date: 'FEB 7', title: 'Handmade soap workshop', tags: ['Workshop', 'Organic'], organization: 'Eco Club' },
    { date: 'FEB 16', title: 'Beach Clean-up: Come help our planet Earth!', tags: ['Volunteer'], organization: 'Green Warriors' },
    { date: 'FEB 23', title: 'Farmers Market', tags: ['Organic'], organization: 'Local Farmers' },
    { date: 'FEB 25', title: 'Tree Planting with us!', tags: ['Volunteer', 'Organic'], organization: 'Tree Lovers' },
  ];

  const renderBlog = () => (
    <ScrollView style={styles.contentContainer}>
      <Text style={styles.heading}>Blog</Text>
      <BlogInvite />
      <BlogPost />
    </ScrollView>
  );

  const renderEvents = () => (
    <ScrollView style={styles.contentContainer}>
      <Text style={styles.heading}>Events</Text>
      {events.map((event, index) => (
        <EventCard key={index} date={event.date} title={event.title} tags={event.tags} organization={event.organization} />
      ))}
    </ScrollView>
  );

  return (
    <View style={styles.container}>
      {/* Top Bar with Search and Icons */}
      <View style={styles.topBar}>
        <FontAwesome name="search" size={24} color="#ADBC9F" style={styles.icon} />
        <TextInput
          placeholder="Search"
          placeholderTextColor="#ADBC9F"
          style={styles.searchInput}
        />
        <Ionicons name="chatbubble-ellipses" size={24} color="#ADBC9F" style={styles.icon} />
        <MaterialCommunityIcons name="bell-badge" size={24} color="#ADBC9F" style={styles.icon} />
      </View>

      {/* Header for toggling between Blog and Events */}
      <View style={styles.header}>
        <TouchableOpacity
          style={[styles.tab, view === 'Blog' && styles.activeTab]}
          onPress={() => setView('Blog')}
        >
          <Text style={[styles.tabText, view === 'Blog' && styles.activeTabText]}>BLOG</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, view === 'Events' && styles.activeTab]}
          onPress={() => setView('Events')}
        >
          <Text style={[styles.tabText, view === 'Events' && styles.activeTabText]}>EVENTS</Text>
        </TouchableOpacity>
      </View>

      {/* Render content based on the selected view */}
      {view === 'Blog' ? renderBlog() : renderEvents()}
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  topBar: {
    paddingTop: 50,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  searchInput: {
    flex: 1,
    height: 40,
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    color: '#333',
  },
  icon: {
    marginHorizontal: 5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  tab: {
    padding: 10,
    borderRadius: 5,
  },
  activeTab: {
    backgroundColor: '#d0e8d0',
  },
  tabText: {
    fontSize: 16,
    color: '#666',
  },
  activeTabText: {
    color: '#2a5d2a',
    fontWeight: 'bold',
  },
  contentContainer: {
    padding: 15,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
});

export default Forum;