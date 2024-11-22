import React from 'react';

import { IndicatorView } from '@app/blueprints';
import { NavigationContainer } from '@react-navigation/native';

import { LocalizationProvider, ThemeProvider } from './context';
import { AppNavigation, navigationRef } from './navigation/AppNavigation';
import { loader } from './utils';

export const MainApp = () => {
  return (
    <ThemeProvider>
      <LocalizationProvider>
        <NavigationContainer ref={navigationRef}>
          {/**
             * PersistGate delays the rendering of the app's UI until the persisted state has been retrieved
             * and saved to redux.
             * The `loading` prop can be `null` or any react instance to show during loading (e.g. a splash screen),
             * for example `loading={<SplashScreen />}`.
             * @see https://github.com/rt2zz/redux-persist/blob/master/docs/PersistGate.md
             */}
          <AppNavigation />
          <IndicatorView isLoading={false} ref={loader} />
        </NavigationContainer>
      </LocalizationProvider>
    </ThemeProvider>
  );
};
