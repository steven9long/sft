// components/BlogPost.tsx
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

interface BlogPostData {
  id: string;
  text: string;
  imageUrl?: string;
  profileImageUrl: string;
  stats?: string;
  bgColor: string;
  textColor: string;
}

const blogPosts: BlogPostData[] = [
  {
    id: '1',
    text: 'Amanda has found a near threatened species at Tai Long Wan!',
    imageUrl: 'https://static.inaturalist.org/photos/2033092/large.jpg',
    profileImageUrl: 'https://static.inaturalist.org/photos/2033092/large.jpg',
    stats: '651,324 Views | 36,654 Likes | 56 comments',
    bgColor: '#FFFFFF',
    textColor: '#5A6C57',
  },
  {
    id: '2',
    text: 'john20p has reduced over 2kg CO2 over 2 weeks!',
    profileImageUrl: 'https://via.placeholder.com/56', // Replace with actual image URL
    bgColor: '#5A6C57',
    textColor: '#FFFFFF',
  },
];

const BlogPost: React.FC = () => {
  const [likedPosts, setLikedPosts] = useState<Record<string, boolean>>({});

  const toggleLike = (id: string) => {
    setLikedPosts((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const renderPost = ({ item }: { item: BlogPostData }) => (
    <View style={[styles.blogPost, { backgroundColor: item.bgColor }]}>
      <View style={styles.postHeader}>
        <Image source={{ uri: item.profileImageUrl }} style={styles.profileImage} />
        <Text style={[styles.blogText, { color: item.textColor }]}>{item.text}</Text>
      </View>
      {item.imageUrl && <Image source={{ uri: item.imageUrl }} style={styles.postImage} />}
      {item.stats && <Text style={styles.stats}>{item.stats}</Text>}
      <TouchableOpacity
        style={styles.likeButton}
        onPress={() => toggleLike(item.id)}
      >
        <AntDesign
          name={likedPosts[item.id] ? 'heart' : 'hearto'}
          size={24}
          color={likedPosts[item.id] ? '#FF6F61' : '#757575'}
        />
      </TouchableOpacity>
    </View>
  );

  return (
    <FlatList
      data={blogPosts}
      keyExtractor={(item) => item.id}
      renderItem={renderPost}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  blogPost: {
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    position: 'relative',
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  profileImage: {
    width: 56,
    height: 56,
    borderRadius: 28,
    marginRight: 12,
  },
  blogText: {
    fontSize: 16,
    fontWeight: '600',
    flex: 1,
  },
  postImage: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    marginBottom: 8,
  },
  stats: {
    fontSize: 14,
    color: '#757575',
    marginTop: 8,
  },
  likeButton: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
});

export default BlogPost;