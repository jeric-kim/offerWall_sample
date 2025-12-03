import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Banner() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>스폰서 배너</Text>
      <Text style={styles.subtitle}>여기에 광고 또는 프로모션 이미지가 들어갑니다.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2563eb',
    padding: 16,
    borderRadius: 12,
    marginHorizontal: 16,
    marginTop: 16,
  },
  title: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 4,
  },
  subtitle: {
    color: '#e5e7eb',
    fontSize: 12,
  },
});
