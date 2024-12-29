import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
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
  post: {
    backgroundColor: '#e5ffe5',
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
  },
  postText: {
    fontSize: 16,
    color: '#2a5d2a',
  },
  eventInvite: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 15,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  inviteHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  inviteText: {
    fontSize: 16,
    color: '#333',
    flex: 1,
  },
  eventCard: {
    flexDirection: 'row',
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
  },
  eventDateContainer: {
    backgroundColor: '#d0e8d0',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    marginRight: 10,
  },
  eventDate: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2a5d2a',
  },
  eventDay: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2a5d2a',
  },
  eventDetails: {
    flex: 1,
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  eventSubtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  tagContainer: {
    flexDirection: 'row',
  },
  tag: {
    backgroundColor: '#d0e8d0',
    color: '#2a5d2a',
    fontSize: 12,
    padding: 5,
    borderRadius: 5,
    marginRight: 5,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  acceptButton: {
    backgroundColor: '#2a5d2a',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },eventTags: {
    fontSize: 14,
    color: '#666',
  },
  declineButton: {
    backgroundColor: '#d32a2a',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  favoriteIcon: {
    position: 'absolute',
    right: 15,
    bottom: 15,
    backgroundColor: '#fff',
    borderRadius: 25,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  blogPost: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  blogText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  stats: {
    fontSize: 14,
    color: '#666',
  },
});

export default Forum;