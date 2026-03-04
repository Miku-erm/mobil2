import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../theme/colors';

const LoadingState = ({ message = 'Yükleniyor...', color = COLORS.primary }) => {
  return (
    <View style={styles.centered}>
      <ActivityIndicator size="large" color={color} />
      <Text style={styles.loadingText}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.background,
    paddingHorizontal: 20,
  },
  loadingText: {
    marginTop: 10,
    color: COLORS.text,
  },
});

export default LoadingState;

