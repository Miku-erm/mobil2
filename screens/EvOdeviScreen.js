import React, { useLayoutEffect, useMemo } from 'react';
import { FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { postsData } from '../data/mockData';
import { PRIMARY_COLOR, ROUTES } from '../navigation/routes';
import LoadingState from '../components/LoadingState';
import EmptyState from '../components/EmptyState';
import PostCard from '../components/PostCard';
import useMockLoad from '../hooks/useMockLoad';
import { COLORS } from '../theme/colors';

const EvOdeviScreen = ({ route, navigation }) => {
  const { loading, data, setData } = useMockLoad(postsData);
  const allPosts = data || [];
  const routeKey = route?.params?.routeKey;
  const isShortInfo = routeKey === ROUTES.KISA_BILGILER;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity style={styles.headerIconButton} activeOpacity={0.8}>
          <Ionicons name="add-circle" size={24} color={PRIMARY_COLOR} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const posts = useMemo(() => {
    if (isShortInfo) {
      return allPosts.filter((post) => post.category === 'short-info');
    }
    return allPosts.filter((post) => post.category !== 'short-info');
  }, [allPosts, isShortInfo]);

  const onLikePress = (postId) => {
    setData((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId ? { ...post, likes: post.likes + 1 } : post,
      ),
    );
  };

  if (loading) {
    return <LoadingState />;
  }

  if (!posts.length) {
    return <EmptyState />;
  }

  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.listContent}
      renderItem={({ item }) => (
        <PostCard
          post={item}
          onLikePress={onLikePress}
          likeLabel={isShortInfo ? 'Beğen' : 'Beğendin'}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  listContent: {
    padding: 8,
    paddingBottom: 24,
    backgroundColor: '#F0F0F0',
  },
  headerIconButton: {
    marginRight: 4,
  },
});

export default EvOdeviScreen;
