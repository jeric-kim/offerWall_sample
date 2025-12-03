import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useApp } from '../hooks/useApp';
import { OfferWallProgress } from '../types';

function ProgressItem({ item }: { item: OfferWallProgress }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{item.title}</Text>
      <View style={styles.row}>
        <Text style={styles.badge}>{item.status}</Text>
        <Text style={styles.reward}>+{item.reward.toLocaleString()}P</Text>
      </View>
    </View>
  );
}

export default function ProgressScreen() {
  const { offerProgress } = useApp();

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>진행 현황</Text>
      <FlatList
        data={offerProgress}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ProgressItem item={item} />}
        contentContainerStyle={{ paddingBottom: 24 }}
      />
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
  title: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 8,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  badge: {
    backgroundColor: '#2563eb',
    color: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
    fontSize: 12,
    fontWeight: '700',
  },
  reward: {
    fontSize: 14,
    fontWeight: '700',
  },
});
