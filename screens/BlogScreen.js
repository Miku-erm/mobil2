import React, { useLayoutEffect } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { articleData } from '../data/mockData';
import LoadingState from '../components/LoadingState';
import EmptyState from '../components/EmptyState';
import useMockLoad from '../hooks/useMockLoad';

const BlogScreen = ({ navigation }) => {
  const { loading, data } = useMockLoad(articleData);
  const article = data;

  useLayoutEffect(() => {
    navigation.setOptions({ title: 'Fiziksel Aktivite Doğurganlığımı...' });
  }, [navigation]);

  if (loading) {
    return <LoadingState />;
  }

  if (!article) {
    return <EmptyState />;
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Image source={{ uri: article.banner }} style={styles.banner} resizeMode="cover" />

      <Text style={styles.title}>{article.title}</Text>

      {article.paragraphs.map((paragraph, index) => (
        <Text key={`paragraph-${index}`} style={styles.paragraph}>
          {paragraph}
        </Text>
      ))}

      <View style={styles.highlightWrap}>
        {article.highlights.map((item, index) => (
          <View key={`highlight-${index}`} style={styles.highlightItem}>
            <Text style={styles.highlightText}>{item}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    paddingBottom: 30,
  },
  banner: {
    width: '100%',
    height: 210,
    backgroundColor: '#ECECEC',
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: '#242424',
    lineHeight: 22,
    marginTop: 10,
    marginBottom: 8,
    paddingHorizontal: 10,
  },
  paragraph: {
    paddingHorizontal: 10,
    fontSize: 17,
    color: '#303030',
    lineHeight: 26,
    marginBottom: 10,
  },
  highlightWrap: {
    marginTop: 6,
    paddingHorizontal: 10,
  },
  highlightItem: {
    borderWidth: 1,
    borderColor: '#E8D8EE',
    borderRadius: 22,
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignSelf: 'flex-start',
    backgroundColor: '#FFFDFE',
    marginBottom: 8,
  },
  highlightText: {
    fontSize: 16,
    color: '#6A1B9A',
    fontWeight: '600',
  },
});

export default BlogScreen;

