import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../theme/colors';

const NotificationItem = ({ item }) => {
  return (
    <View style={styles.row}>
      <View style={styles.mediaWrap}>
        {item.thumbnail ? (
          <Image source={{ uri: item.thumbnail }} style={styles.thumbnail} resizeMode="cover" />
        ) : (
          <Ionicons name={item.icon || 'mail-outline'} size={18} color={COLORS.primary} />
        )}
      </View>

      <View style={styles.content}>
        <Text style={styles.message}>{item.text}</Text>
        <Text style={styles.date}>{item.datetime}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    backgroundColor: COLORS.surface,
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E8E8E8',
  },
  mediaWrap: {
    width: 34,
    height: 34,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#E8E8E8',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 2,
    marginRight: 10,
    backgroundColor: '#FFFDFE',
    overflow: 'hidden',
  },
  thumbnail: {
    width: '100%',
    height: '100%',
  },
  content: {
    flex: 1,
  },
  message: {
    fontSize: 15,
    color: '#2E2E2E',
    lineHeight: 21,
  },
  date: {
    marginTop: 8,
    fontSize: 12,
    color: '#8B8B8B',
    textAlign: 'right',
  },
});

export default NotificationItem;
