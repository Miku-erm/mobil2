import React, { useMemo } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { genericInfoData } from '../data/mockData';
import LoadingState from '../components/LoadingState';
import EmptyState from '../components/EmptyState';
import useMockLoad from '../hooks/useMockLoad';
import { COLORS } from '../theme/colors';

const InfoScreen = ({ route }) => {
  const infoKey = route?.params?.infoKey;
  const { loading, data } = useMockLoad(genericInfoData[infoKey] || null);
  const payload = data;

  const fallbackTitle = useMemo(() => route?.params?.title || 'Bilgilendirme', [route?.params?.title]);

  if (loading) {
    return <LoadingState />;
  }

  if (!payload) {
    return <EmptyState />;
  }

  const stats = payload.stats || [];
  const sections = payload.sections || [];
  const bullets = payload.bullets || [];
  const actions = payload.actions || [];

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <View style={styles.heroCard}>
        <Text style={styles.title}>{payload.title || fallbackTitle}</Text>
        {!!payload.subtitle && <Text style={styles.subtitle}>{payload.subtitle}</Text>}
        {!!payload.description && <Text style={styles.description}>{payload.description}</Text>}
      </View>

      {!!stats.length && (
        <View style={styles.statsRow}>
          {stats.map((item, index) => (
            <View key={`${item.label}-${index}`} style={styles.statCard}>
              <Text style={styles.statValue}>{item.value}</Text>
              <Text style={styles.statLabel}>{item.label}</Text>
            </View>
          ))}
        </View>
      )}

      {!!sections.length && (
        <View style={styles.block}>
          {sections.map((item, index) => (
            <View key={`${item.title}-${index}`} style={styles.sectionCard}>
              <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>{item.title}</Text>
                {!!item.badge && <Text style={styles.sectionBadge}>{item.badge}</Text>}
              </View>
              <Text style={styles.sectionText}>{item.text}</Text>
            </View>
          ))}
        </View>
      )}

      {!!bullets.length && (
        <View style={styles.blockCard}>
          <Text style={styles.blockTitle}>Öne Çıkanlar</Text>
          {bullets.map((item, index) => (
            <View key={`${item}-${index}`} style={styles.bulletRow}>
              <Ionicons name="checkmark-circle" size={18} color={COLORS.primary} />
              <Text style={styles.bulletText}>{item}</Text>
            </View>
          ))}
        </View>
      )}

      {!!actions.length && (
        <View style={styles.actionWrap}>
          {actions.map((item, index) => (
            <TouchableOpacity key={`${item}-${index}`} style={styles.actionChip} activeOpacity={0.85}>
              <Text style={styles.actionChipText}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}

      {!!payload.footer && (
        <View style={styles.footerCard}>
          <Text style={styles.footerText}>{payload.footer}</Text>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F8',
  },
  contentContainer: {
    padding: 14,
    paddingBottom: 26,
  },
  heroCard: {
    backgroundColor: COLORS.background,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#ECE0F4',
    padding: 18,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.07,
    shadowRadius: 8,
    elevation: 2,
    marginBottom: 12,
  },
  title: {
    fontSize: 24,
    color: COLORS.primary,
    fontWeight: '800',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 15,
    color: '#5E5E5E',
    fontWeight: '600',
    marginBottom: 10,
  },
  description: {
    fontSize: 15,
    color: COLORS.text,
    lineHeight: 22,
  },
  statsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  statCard: {
    width: '31.5%',
    backgroundColor: COLORS.surface,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#EEE3F6',
    paddingVertical: 12,
    paddingHorizontal: 10,
    alignItems: 'center',
    marginBottom: 8,
  },
  statValue: {
    fontSize: 16,
    fontWeight: '800',
    color: COLORS.primary,
    marginBottom: 2,
  },
  statLabel: {
    fontSize: 12,
    color: '#666666',
    textAlign: 'center',
  },
  block: {
    marginBottom: 12,
  },
  sectionCard: {
    backgroundColor: COLORS.surface,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#EDEDED',
    padding: 14,
    marginBottom: 8,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 16,
    color: '#232323',
    fontWeight: '700',
    flex: 1,
    paddingRight: 10,
  },
  sectionBadge: {
    fontSize: 11,
    color: COLORS.primary,
    backgroundColor: '#F2E8F9',
    borderWidth: 1,
    borderColor: '#E6D4F3',
    borderRadius: 999,
    paddingVertical: 4,
    paddingHorizontal: 8,
    overflow: 'hidden',
  },
  sectionText: {
    fontSize: 14,
    color: '#474747',
    lineHeight: 21,
  },
  blockCard: {
    backgroundColor: COLORS.surface,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#EEE3F6',
    padding: 14,
    marginBottom: 12,
  },
  blockTitle: {
    fontSize: 16,
    color: '#262626',
    fontWeight: '700',
    marginBottom: 10,
  },
  bulletRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  bulletText: {
    flex: 1,
    marginLeft: 8,
    color: '#444444',
    fontSize: 14,
    lineHeight: 20,
  },
  actionWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 12,
  },
  actionChip: {
    backgroundColor: '#EFE3F8',
    borderColor: '#E3CFF3',
    borderWidth: 1,
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginRight: 8,
    marginBottom: 8,
  },
  actionChipText: {
    fontSize: 13,
    color: COLORS.primary,
    fontWeight: '700',
  },
  footerCard: {
    borderWidth: 1,
    borderColor: '#E8DAF3',
    backgroundColor: '#FCF9FE',
    borderRadius: 14,
    padding: 14,
  },
  footerText: {
    fontSize: 13,
    color: '#5A5A5A',
    lineHeight: 20,
  },
});

export default InfoScreen;
