import React, { useEffect, useLayoutEffect, useMemo, useState } from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { coursesData } from '../data/mockData';
import LoadingState from '../components/LoadingState';
import EmptyState from '../components/EmptyState';
import useMockLoad from '../hooks/useMockLoad';

const KurslarScreen = ({ navigation }) => {
  const { loading, data } = useMockLoad(coursesData);
  const lessons = data || [];
  const [selectedLessonId, setSelectedLessonId] = useState(null);

  useEffect(() => {
    if (lessons.length && !selectedLessonId) {
      setSelectedLessonId(lessons[0].id);
    }
  }, [lessons, selectedLessonId]);

  const selectedLesson = useMemo(() => {
    return lessons.find((item) => item.id === selectedLessonId) || lessons[0] || null;
  }, [lessons, selectedLessonId]);

  useLayoutEffect(() => {
    if (selectedLesson?.lesson) {
      navigation.setOptions({ title: selectedLesson.lesson });
    }
  }, [navigation, selectedLesson]);

  if (loading) {
    return <LoadingState />;
  }

  if (!lessons.length || !selectedLesson) {
    return <EmptyState />;
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: selectedLesson.heroImage }} style={styles.heroImage} resizeMode="cover" />

      <View style={styles.heroTitleWrap}>
        <Text style={styles.heroTitle}>{selectedLesson.title}</Text>
      </View>

      <View style={styles.categoryBar}>
        <Text style={styles.categoryText}>{selectedLesson.category}</Text>
      </View>

      <FlatList
        data={lessons}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        renderItem={({ item, index }) => {
          const isSelected = item.id === selectedLessonId;

          return (
            <TouchableOpacity
              activeOpacity={0.9}
              style={[styles.lessonRow, isSelected && styles.lessonRowSelected]}
              onPress={() => setSelectedLessonId(item.id)}
            >
              <Text style={styles.orderNo}>{index + 1}</Text>

              <View>
                <Text style={styles.lessonName}>{item.lesson}</Text>
                <Text style={styles.lessonMeta}>{item.type} - {item.duration}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  heroImage: {
    width: '100%',
    height: 230,
    backgroundColor: '#EAEAEA',
  },
  heroTitleWrap: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  heroTitle: {
    fontSize: 14,
    color: '#2D2D2D',
    fontWeight: '500',
  },
  categoryBar: {
    height: 38,
    justifyContent: 'center',
    paddingHorizontal: 10,
    backgroundColor: '#EEE4F1',
  },
  categoryText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  listContent: {
    paddingBottom: 24,
  },
  lessonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#EFEFEF',
    backgroundColor: '#FFFFFF',
  },
  lessonRowSelected: {
    backgroundColor: '#F6EFF8',
  },
  orderNo: {
    width: 24,
    fontSize: 16,
    color: '#2F2F2F',
    fontWeight: '500',
    marginRight: 10,
  },
  lessonName: {
    fontSize: 20,
    color: '#5B5B5B',
    marginBottom: 2,
  },
  lessonMeta: {
    fontSize: 16,
    color: '#7A7A7A',
  },
});

export default KurslarScreen;
