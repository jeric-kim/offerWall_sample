import React from 'react';
import { View, Text, StyleSheet, Switch, Pressable, Alert } from 'react-native';
import { useApp } from '../hooks/useApp';

export default function MoreScreen() {
  const { pushEnabled, adConsent, togglePush, toggleAdConsent, openTerms, logout, deleteAccount } = useApp();

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>설정</Text>

      <View style={styles.card}>
        <View style={styles.row}>
          <Text style={styles.label}>푸시 알림</Text>
          <Switch value={pushEnabled} onValueChange={togglePush} />
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>광고 알림 동의</Text>
          <Switch value={adConsent} onValueChange={toggleAdConsent} />
        </View>
      </View>

      <Pressable style={styles.card} onPress={openTerms}>
        <Text style={styles.link}>약관 보기</Text>
      </Pressable>

      <Pressable style={styles.card} onPress={logout}>
        <Text style={styles.link}>로그아웃</Text>
      </Pressable>

      <Pressable
        style={[styles.card, styles.danger]}
        onPress={() => Alert.alert('회원 탈퇴', '정말 탈퇴하시겠습니까?', [
          { text: '취소', style: 'cancel' },
          { text: '탈퇴', style: 'destructive', onPress: deleteAccount },
        ])}
      >
        <Text style={[styles.link, styles.dangerText]}>회원 탈퇴</Text>
      </Pressable>
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
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  label: {
    fontSize: 15,
    fontWeight: '600',
  },
  link: {
    fontSize: 15,
    fontWeight: '700',
    color: '#111827',
  },
  danger: {
    borderWidth: 1,
    borderColor: '#ef4444',
  },
  dangerText: {
    color: '#ef4444',
  },
});
