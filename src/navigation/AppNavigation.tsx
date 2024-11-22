import React from 'react';

import { NavigationContainerRef } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';

import {
  NetworkLoggerScreen,
  SettingScreen,
  HomeScreen
} from '@src/screens';

import { NavStackParams, Screen } from './appNavigation.type';

export const navigationRef =
  React.createRef<NavigationContainerRef<NavStackParams>>();

const Stack = createNativeStackNavigator<NavStackParams>();

const screenOptions: NativeStackNavigationOptions = {
  animation: 'slide_from_right',
  headerShown: false,
};

export const AppNavigation = () => {

  return (
    <>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name={Screen.HOME} component={HomeScreen} />
        <Stack.Screen name={Screen.SETTING} component={SettingScreen} />
        {__DEV__ && (
          <Stack.Screen
            name={Screen.NETWORK_CHECK}
            component={NetworkLoggerScreen}
          />
        )}
      </Stack.Navigator>
    </>
  );
};
