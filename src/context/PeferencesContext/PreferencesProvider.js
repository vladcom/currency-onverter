import { PreferencesContext } from './preferencesContext';
import React from 'react';

const PreferencesProvider = ({ children }) => {
  const a = 1;

  const values = {
    a
  };
  
  if (children instanceof Function) {
    return children;
  }

  return (
    <PreferencesContext.Provider value={values}>
      {children}
    </PreferencesContext.Provider>
  );
}

export default PreferencesProvider;
