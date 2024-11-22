import React from 'react';

import { useFonts } from 'expo-font';

import { MainApp } from './src/MainApp';

const App = () => {
  const [fontsLoaded] = useFonts({
    Poppins: require('./src/assets/fonts/Poppins.ttf'),
    NunitoSansRegular: require('./src/assets/fonts/NunitoSansRegular.ttf')
  });

  if (!fontsLoaded) {
    return null;
  }

  return <MainApp />;
};

export default App;
