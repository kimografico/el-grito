import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { messages } from './index';

export type Locale = 'es' | 'en';

interface LocaleContextValue {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (key: string) => unknown;
  ts: (key: string) => string;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

function getNestedValue(obj: Record<string, unknown>, path: string): unknown {
  const keys = path.split('.');
  let current: unknown = obj;
  for (const key of keys) {
    if (current === null || current === undefined) return path;
    if (Array.isArray(current)) {
      const index = Number(key);
      current = current[index];
    } else {
      current = (current as Record<string, unknown>)[key];
    }
  }
  return current ?? path;
}

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    const saved = localStorage.getItem('locale');
    return (saved === 'es' || saved === 'en') ? saved : 'es';
  });

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    localStorage.setItem('locale', l);
    document.documentElement.lang = l;
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const t = useCallback((key: string): unknown => {
    return getNestedValue(messages[locale] as Record<string, unknown>, key);
  }, [locale]);

  const ts = useCallback((key: string): string => {
    const val = getNestedValue(messages[locale] as Record<string, unknown>, key);
    return typeof val === 'string' ? val : String(val);
  }, [locale]);

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t, ts }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useTranslation() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error('useTranslation must be used within LocaleProvider');
  return ctx;
}
