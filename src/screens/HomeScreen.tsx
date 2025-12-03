import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import PointHeader from '../components/PointHeader';
import Banner from '../components/Banner';
import OfferWall from '../components/OfferWall';
import { useApp } from '../hooks/useApp';

export default function HomeScreen() {
  const { points } = useApp();

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 32 }}>
      <Text style={styles.pageTitle}>홈</Text>
      <PointHeader points={points} />
      <Banner />
      <OfferWall />
    </ScrollView>
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
});
