import { useContext } from 'react';
import { AppContext, AppContextValue } from '../providers/AppProvider';

export function useApp(): AppContextValue {
  const ctx = useContext(AppContext);
  if (!ctx) {
    throw new Error('AppContext.Provider 안에서 사용해야 합니다');
  }
  return ctx;
}
