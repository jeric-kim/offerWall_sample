import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Points } from '../types';

export default function PointHeader({ points }: { points: Points }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>적립 포인트</Text>
      <View style={styles.row}>
        <View style={styles.statBox}>
          <Text style={styles.label}>사용 가능</Text>
          <Text style={styles.value}>{points.available.toLocaleString()} P</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.label}>사용됨</Text>
          <Text style={styles.value}>{points.used.toLocaleString()} P</Text>
        </View>
      </View>
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
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 12,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statBox: {
    flex: 1,
  },
  label: {
    fontSize: 12,
    color: '#6b7280',
    marginBottom: 4,
  },
  value: {
    fontSize: 18,
    fontWeight: '700',
  },
});
