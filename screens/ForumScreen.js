import React, { useLayoutEffect, useState } from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { forumRecipient } from '../data/mockData';
import LoadingState from '../components/LoadingState';
import EmptyState from '../components/EmptyState';
import useMockLoad from '../hooks/useMockLoad';
import { COLORS } from '../theme/colors';

const ForumScreen = ({ navigation }) => {
  const { loading, data } = useMockLoad(forumRecipient);
  const recipient = data || '';
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  const onSubmit = () => {
    Alert.alert('Bilgi', 'Mesajınız gönderildi.');
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Yeni Konu',
      headerRight: () => (
        <TouchableOpacity style={styles.headerSendButton} onPress={onSubmit} activeOpacity={0.85}>
          <Ionicons name="paper-plane" size={14} color="#FFFFFF" />
          <Text style={styles.headerSendText}>Gönder</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  if (loading) {
    return <LoadingState />;
  }

  if (!recipient) {
    return <EmptyState />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.recipientText}>
        Kime: <Text style={styles.recipientStrong}>{recipient}</Text>
      </Text>

      <View style={styles.divider} />

      <TextInput
        style={styles.input}
        placeholder="Gönderinizin başlığını yazın"
        placeholderTextColor="#A0A0A0"
        value={title}
        onChangeText={setTitle}
      />

      <TextInput
        style={styles.messageInput}
        placeholder="Mesajınızı buraya yazınız"
        placeholderTextColor="#A0A0A0"
        value={message}
        onChangeText={setMessage}
        multiline
        textAlignVertical="top"
      />

      <TouchableOpacity style={styles.addImageButton} activeOpacity={0.85}>
        <Text style={styles.addImageText}>+  Resim Ekle</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F4',
    paddingTop: 14,
  },
  headerSendButton: {
    marginRight: 4,
    backgroundColor: COLORS.primary,
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 6,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerSendText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
    marginLeft: 6,
  },
  recipientText: {
    fontSize: 14,
    color: '#2D2D2D',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  recipientStrong: {
    fontWeight: '700',
    color: '#2C2C2C',
  },
  divider: {
    height: 1,
    backgroundColor: '#E3E3E3',
    marginBottom: 16,
  },
  input: {
    marginHorizontal: 8,
    borderWidth: 1,
    borderColor: '#BDBDBD',
    borderRadius: 4,
    minHeight: 58,
    paddingHorizontal: 12,
    fontSize: 16,
    color: '#2C2C2C',
    backgroundColor: '#FDFDFD',
    marginBottom: 16,
  },
  messageInput: {
    marginHorizontal: 8,
    borderWidth: 1,
    borderColor: '#BDBDBD',
    borderRadius: 4,
    paddingHorizontal: 12,
    paddingVertical: 12,
    fontSize: 16,
    color: '#2C2C2C',
    height: 170,
    backgroundColor: '#FDFDFD',
  },
  addImageButton: {
    marginTop: 16,
    marginLeft: 8,
    alignSelf: 'flex-start',
    borderRadius: 4,
    paddingHorizontal: 14,
    paddingVertical: 10,
    backgroundColor: COLORS.primary,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  addImageText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#FFFFFF',
  },
});

export default ForumScreen;
