import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

export default function OfferWall() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>애드몹 오퍼월</Text>
      <Text style={styles.subtitle}>연동 영역입니다. SDK 연동 후 실제 오퍼월을 출력하세요.</Text>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>오퍼월 열기</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginHorizontal: 16,
    marginTop: 16,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 13,
    color: '#6b7280',
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#10b981',
    paddingVertical: 12,
    borderRadius: 12,
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '700',
    textAlign: 'center',
  },
});
