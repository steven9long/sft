// components/BlogPost.tsx
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

interface BlogPostData {
  id: string;
  text: string;
  imageUrl: string;
  stats: string;
}

const blogPosts: BlogPostData[] = [
  {
    id: '1',
    text: 'Amanda has found a near threatened species at Tai Long Wan!',
    imageUrl: 'https://static.inaturalist.org/photos/2033092/large.jpg',
    stats: '651,324 Views | 36,654 Likes | 56 comments',
  },
  {
    id: '2',
    text: 'john20p has reduced over 2kg CO2 over 2 weeks!',
    imageUrl: '',
    stats: '523,102 Views | 24,103 Likes | 34 comments',
  },
];

const BlogPost: React.FC = () => {
  const [likedPosts, setLikedPosts] = useState<Record<string, boolean>>({});

  const toggleLike = (id: string) => {
    setLikedPosts((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const renderPost = ({ item }: { item: BlogPostData }) => (
    <View style={styles.blogPost}>
      <Text style={styles.blogText}>{item.text}</Text>
      {item.imageUrl ? <Image source={{ uri: item.imageUrl }} style={styles.image} /> : null}
      <Text style={styles.stats}>{item.stats}</Text>
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
    backgroundColor: '#FFFFFF',
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
  blogText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 8,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    marginBottom: 8,
  },
  stats: {
    fontSize: 14,
    color: '#757575',
    marginBottom: 8,
  },
  likeButton: {
    position: 'absolute',
    top: 16,
    right: 16,
  },
});

export default BlogPost;