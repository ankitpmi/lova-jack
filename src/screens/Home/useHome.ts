import { useAppContext } from '@src/context';

import { HomeStyles } from './Home.style';
import { useCallback } from 'react';
import { Screen } from '@src/navigation/appNavigation.type';
import { useGlobalStore } from '@src/store';

const useHome = () => {
  const { color, navigation } = useAppContext();
  const { label} = useGlobalStore()

  const navigateToSetting = useCallback(
    () => {
     navigation.navigate(Screen.SETTING) 
    },
    [],
  )
  

  return {
    navigation,
    styles: HomeStyles(color),
    navigateToSetting,
    label
  };
};

export default useHome;
