import React from 'react';
import { View, Text, StyleSheet, Pressable, Alert } from 'react-native';
import PointHeader from '../components/PointHeader';
import { useApp } from '../hooks/useApp';

export default function MyScreen() {
  const { user, points } = useApp();

  const handleExchange = () => {
    Alert.alert('포인트 교환소', '오픈 예정입니다.');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>마이</Text>
      <View style={styles.card}>
        <Text style={styles.label}>로그인 계정</Text>
        <Text style={styles.value}>{user?.email ?? '-'}</Text>
      </View>
      <PointHeader points={points} />

      <View style={[styles.card, { marginTop: 16 }]}>    
        <Text style={styles.label}>포인트 교환소</Text>
        <Pressable style={styles.exchangeButton} onPress={handleExchange}>
          <Text style={styles.exchangeText}>오픈 예정</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pageTitle: {
    fontSize: 20,
    fontWeight: '800',
    marginTop: 16,
    marginHorizontal: 16,
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginHorizontal: 16,
    marginTop: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  label: {
    fontSize: 13,
    color: '#6b7280',
    marginBottom: 8,
  },
  value: {
    fontSize: 16,
    fontWeight: '700',
  },
  exchangeButton: {
    backgroundColor: '#f59e0b',
    paddingVertical: 12,
    borderRadius: 10,
    marginTop: 12,
  },
  exchangeText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '700',
    textAlign: 'center',
  },
});
