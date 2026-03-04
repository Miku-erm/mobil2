import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { notificationsData } from '../data/mockData';
import LoadingState from '../components/LoadingState';
import EmptyState from '../components/EmptyState';
import NotificationItem from '../components/NotificationItem';
import useMockLoad from '../hooks/useMockLoad';
import { COLORS } from '../theme/colors';

const BildirimScreen = () => {
  const { loading, data } = useMockLoad(notificationsData);
  const items = data || [];

  if (loading) {
    return <LoadingState />;
  }

  if (!items.length) {
    return <EmptyState />;
  }

  return (
    <FlatList
      data={items}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.listContent}
      renderItem={({ item }) => <NotificationItem item={item} />}
    />
  );
};

const styles = StyleSheet.create({
  listContent: {
    backgroundColor: COLORS.surface,
  },
});

export default BildirimScreen;
