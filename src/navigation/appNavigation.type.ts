import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { NewsResult } from '@src/services';

export enum Screen {
  NETWORK_CHECK = 'NETWORK_CHECK',
  SETTING = 'SETTING',
  HOME = 'HOME'
}

export type NavStackParams = {
  [Screen.NETWORK_CHECK]: undefined;
  [Screen.SETTING]: undefined;
  [Screen.HOME]: undefined;
};

export type NewsDetailParams = {
  item: NewsResult;
};

export type AppNavigationProp = NativeStackNavigationProp<NavStackParams>;
