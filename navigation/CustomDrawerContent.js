import React from 'react';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { drawerMenuItems, userProfile } from '../data/mockData';
import { PRIMARY_COLOR } from './routes';
import { COLORS } from '../theme/colors';

const CustomDrawerContent = ({ navigation, state }) => {
  return (
    <DrawerContentScrollView
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.profileWrapper}>
        <View style={styles.avatarRing}>
          <Image source={{ uri: userProfile.avatar }} style={styles.avatarImage} resizeMode="cover" />
        </View>
        <Text style={styles.profileName}>{userProfile.name}</Text>
      </View>

      <View style={styles.menuContainer}>
        {drawerMenuItems.map((item) => {
          const isFocused = state.routeNames[state.index] === item.key;

          return (
            <TouchableOpacity
              key={item.key}
              style={styles.menuItem}
              onPress={() => navigation.navigate(item.key)}
              activeOpacity={0.82}
            >
              <View style={[styles.menuIconWrap, isFocused && styles.menuIconWrapFocused]}>
                <Ionicons
                  name={item.icon}
                  size={18}
                  color={PRIMARY_COLOR}
                />
              </View>

              <Text style={[styles.menuLabel, isFocused && styles.menuLabelFocused]}>
                {item.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
    backgroundColor: COLORS.surface,
  },
  profileWrapper: {
    alignItems: 'center',
    paddingTop: 18,
    paddingBottom: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#E4E4E4',
  },
  avatarRing: {
    width: 88,
    height: 88,
    borderRadius: 44,
    borderWidth: 3,
    borderColor: PRIMARY_COLOR,
    backgroundColor: '#F3E7FA',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    marginBottom: 8,
  },
  avatarImage: {
    width: '100%',
    height: '100%',
  },
  profileName: {
    fontSize: 18,
    fontWeight: '500',
    color: '#3A2552',
  },
  menuContainer: {
    paddingTop: 4,
  },
  menuItem: {
    paddingHorizontal: 8,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E4E4E4',
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuIconWrap: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#B88DCC',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
    backgroundColor: '#FFFFFF',
  },
  menuIconWrapFocused: {
    backgroundColor: '#F8F0FC',
  },
  menuLabel: {
    fontSize: 15,
    color: '#212121',
    fontWeight: '500',
  },
  menuLabelFocused: {
    color: PRIMARY_COLOR,
    fontWeight: '700',
  },
});

export default CustomDrawerContent;
