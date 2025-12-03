import React, { createContext, useMemo, useState, useCallback } from 'react';
import * as LocalAuthentication from 'expo-local-authentication';
import * as WebBrowser from 'expo-web-browser';
import { AppState, OfferWallProgress, Points, User } from '../types';

export type AppContextValue = AppState & {
  signInWithGoogle: () => Promise<void>;
  registerBiometrics: () => Promise<void>;
  logout: () => void;
  deleteAccount: () => void;
  togglePush: () => void;
  toggleAdConsent: () => void;
  recordOfferStart: (offer: OfferWallProgress) => void;
  recordOfferComplete: (offerId: string, reward: number) => void;
  openTerms: () => Promise<void>;
};

export const AppContext = createContext<AppContextValue | undefined>(undefined);

const initialProgress: OfferWallProgress[] = [
  {
    id: 'offer-1',
    title: '설문 참여하고 500P 받기',
    status: '진행 중',
    reward: 500,
  },
  {
    id: 'offer-2',
    title: '게임 플레이 5분 완료',
    status: '완료',
    reward: 300,
  },
];

const initialState: AppState = {
  user: null,
  points: { available: 1200, used: 400 },
  offerProgress: initialProgress,
  biometricsRegistered: false,
  promptBiometrics: false,
  pushEnabled: true,
  adConsent: true,
};

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<AppState>(initialState);

  const signInWithGoogle = useCallback(async () => {
    const mockUser: User = {
      id: 'demo-user',
      displayName: '데모 유저',
      email: 'demo@example.com',
    };

    setState((prev) => ({
      ...prev,
      user: mockUser,
      promptBiometrics: true,
    }));
  }, []);

  const registerBiometrics = useCallback(async () => {
    const hasHardware = await LocalAuthentication.hasHardwareAsync();
    if (!hasHardware) {
      setState((prev) => ({ ...prev, promptBiometrics: false }));
      return;
    }

    await LocalAuthentication.authenticateAsync({
      promptMessage: '생체 인증을 등록해주세요',
    });

    setState((prev) => ({
      ...prev,
      biometricsRegistered: true,
      promptBiometrics: false,
    }));
  }, []);

  const logout = useCallback(() => {
    setState((prev) => ({
      ...initialState,
      pushEnabled: prev.pushEnabled,
      adConsent: prev.adConsent,
    }));
  }, []);

  const deleteAccount = useCallback(() => {
    setState(initialState);
  }, []);

  const togglePush = useCallback(() => {
    setState((prev) => ({ ...prev, pushEnabled: !prev.pushEnabled }));
  }, []);

  const toggleAdConsent = useCallback(() => {
    setState((prev) => ({ ...prev, adConsent: !prev.adConsent }));
  }, []);

  const recordOfferStart = useCallback((offer: OfferWallProgress) => {
    setState((prev) => ({
      ...prev,
      offerProgress: [...prev.offerProgress, offer],
    }));
  }, []);

  const recordOfferComplete = useCallback((offerId: string, reward: number) => {
    setState((prev) => ({
      ...prev,
      offerProgress: prev.offerProgress.map((offer) =>
        offer.id === offerId ? { ...offer, status: '완료' } : offer
      ),
      points: {
        ...prev.points,
        available: prev.points.available + reward,
      },
    }));
  }, []);

  const openTerms = useCallback(async () => {
    await WebBrowser.openBrowserAsync('https://example.com/terms');
  }, []);

  const value = useMemo<AppContextValue>(
    () => ({
      ...state,
      signInWithGoogle,
      registerBiometrics,
      logout,
      deleteAccount,
      togglePush,
      toggleAdConsent,
      recordOfferStart,
      recordOfferComplete,
      openTerms,
    }),
    [state, deleteAccount, logout, openTerms, recordOfferComplete, recordOfferStart, registerBiometrics, signInWithGoogle, toggleAdConsent, togglePush]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
