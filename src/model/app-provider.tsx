import React, { useState } from 'react';
import { AppContext } from './app-context';

export const AppProvider: React.FC = (props) => {
  const [locale, setLocale] = useState('es');

  return (
    <AppContext.Provider
      value={{
        locale,
        setLocale,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
