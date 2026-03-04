import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../theme/colors';

const PostCard = ({ post, onLikePress, likeLabel = 'Beğendin' }) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <View style={styles.authorInfo}>
          <Image source={{ uri: post.avatar }} style={styles.avatar} />
          <View>
            <Text style={styles.author}>{post.author}</Text>
            <Text style={styles.date}>{post.timestamp}</Text>
          </View>
        </View>
        <TouchableOpacity activeOpacity={0.8}>
          <Ionicons name="ellipsis-horizontal" size={18} color={COLORS.primary} />
        </TouchableOpacity>
      </View>

      <Text style={styles.postTitle}>{post.title}</Text>
      <Text style={styles.description}>{post.description}</Text>

      <Image source={{ uri: post.image }} style={styles.cover} resizeMode="cover" />

      <Text style={styles.metrics}>
        {post.likes} Beğeni - {post.comments} Yorum - {post.views} Görüntüleme
      </Text>

      <View style={styles.actions}>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => onLikePress(post.id)}
          activeOpacity={0.85}
        >
          <Ionicons name="heart-outline" size={20} color="#E74C3C" />
          <Text style={styles.actionText}>{likeLabel}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.actionButton, styles.actionButtonRight]} activeOpacity={0.85}>
          <Ionicons name="chatbubble-outline" size={20} color="#2E9A41" />
          <Text style={styles.actionText}>Yorum Ekle</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.surface,
    borderRadius: 6,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    overflow: 'hidden',
  },
  cardHeader: {
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  authorInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 38,
    height: 38,
    borderRadius: 19,
    borderWidth: 1,
    borderColor: COLORS.borderPurple,
    marginRight: 8,
  },
  author: {
    fontSize: 14,
    color: '#1F1F1F',
    fontWeight: '700',
  },
  date: {
    fontSize: 13,
    color: '#666666',
    marginTop: 1,
  },
  postTitle: {
    paddingHorizontal: 10,
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '600',
    color: '#2A2A2A',
    marginBottom: 4,
  },
  description: {
    paddingHorizontal: 10,
    fontSize: 13,
    lineHeight: 19,
    color: '#3F3F3F',
    marginBottom: 10,
  },
  cover: {
    width: '100%',
    height: 210,
    backgroundColor: '#EFEFEF',
  },
  metrics: {
    fontSize: 14,
    color: '#4C4C4C',
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  actions: {
    flexDirection: 'row',
    paddingHorizontal: 6,
    paddingBottom: 8,
  },
  actionButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#DEDEDE',
    borderRadius: 5,
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  actionButtonRight: {
    marginLeft: 8,
  },
  actionText: {
    marginLeft: 6,
    fontSize: 16,
    color: '#2D2D2D',
    fontWeight: '500',
  },
});

export default PostCard;
