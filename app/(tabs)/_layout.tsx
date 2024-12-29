import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, View, StyleSheet } from 'react-native';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { Colors } from '@/constants/Colors';

export default function TabLayout() {
  return (
    <View style={{ flex: 1 }}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: '#4CAF50', // Green when active
          tabBarInactiveTintColor: '#A1A1A1', // Gray when inactive
          headerShown: false,
          tabBarStyle: styles.tabBar,
        }}
      >
        {/* Home Tab */}
        <Tabs.Screen
          name="index"
          options={{
            title: '',
            tabBarIcon: ({ color }) => (
              <IconSymbol size={28} name="house.fill" color={color} />
            ),
          }}
        />
        {/* Itineraries Tab */}
        <Tabs.Screen
          name="Itineraries"
          options={{
            title: '',
            tabBarIcon: ({ color }) => (
              <IconSymbol size={28} name="location.fill" color={color} />
            ),
          }}
        />
        {/* Forum Tab */}
        <Tabs.Screen
          name="forum"
          options={{
            title: '',
            tabBarIcon: ({ color }) => (
              <IconSymbol size={28} name="text.bubble.fill" color={color} />
            ),
          }}
        />
        {/* Collection Tab */}
        <Tabs.Screen
          name="collection"
          options={{
            title: '',
            tabBarIcon: ({ color }) => (
              <IconSymbol size={28} name="bookmark.fill" color={color} />
            ),
          }}/>
          </Tabs>
    </View>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    backgroundColor: '#FFFFFF', // White background
    height: 80,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    shadowColor: '#000000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: -2 },
    shadowRadius: 10,
    elevation: 4, // For Android shadow
    paddingHorizontal: 15,
  },
});