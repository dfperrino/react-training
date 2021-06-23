import { createContext } from 'react';

export interface IAppContext {
  locale: string;
  setLocale: (locale: string) => void;
}

export const AppContext = createContext<IAppContext>({
  locale: 'es',
  setLocale: (locale: string) => {},
});
