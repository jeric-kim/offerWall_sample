export type AuthProvider = 'google';

export type User = {
  id: string;
  displayName: string;
  email: string;
};

export type Points = {
  available: number;
  used: number;
};

export type OfferWallProgress = {
  id: string;
  title: string;
  status: '진행 중' | '완료';
  reward: number;
};

export type AppState = {
  user: User | null;
  points: Points;
  offerProgress: OfferWallProgress[];
  biometricsRegistered: boolean;
  promptBiometrics: boolean;
  pushEnabled: boolean;
  adConsent: boolean;
};
