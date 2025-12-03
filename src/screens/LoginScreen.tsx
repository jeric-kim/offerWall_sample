import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Pressable, Alert } from 'react-native';
import { useApp } from '../hooks/useApp';

export default function LoginScreen() {
  const {
    signInWithGoogle,
    registerBiometrics,
    promptBiometrics,
    biometricsRegistered,
  } = useApp();

  useEffect(() => {
    if (promptBiometrics && !biometricsRegistered) {
      Alert.alert(
        '생체 인증 등록',
        '기기 변경 또는 로그아웃 시 생체 인증을 다시 등록해야 합니다.',
        [
          { text: '다음에', style: 'cancel' },
          { text: '등록하기', onPress: () => registerBiometrics() },
        ]
      );
    }
  }, [promptBiometrics, biometricsRegistered, registerBiometrics]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>간편 적립 서비스</Text>
      <Text style={styles.subtitle}>구글 로그인 후 포인트를 모아보세요.</Text>

      <Pressable style={styles.button} onPress={signInWithGoogle}>
        <Text style={styles.buttonText}>구글로 로그인</Text>
      </Pressable>

      <View style={styles.infoBox}>
        <Text style={styles.infoTitle}>생체 인증 안내</Text>
        <Text style={styles.infoText}>
          최초 로그인 시 등록하면 이후 생체 인증으로 빠르게 로그인할 수 있습니다. 기기 변경이나 수동 로그아웃 시 다시 등록이 필요합니다.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f7f8fa',
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#4b5563',
    marginBottom: 32,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#4285f4',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 12,
    marginBottom: 16,
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  infoBox: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    width: '100%',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 8,
  },
  infoText: {
    fontSize: 14,
    color: '#4b5563',
    lineHeight: 20,
  },
});
