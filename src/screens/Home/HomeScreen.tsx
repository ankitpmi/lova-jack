import React from 'react';
import { View } from 'react-native';

import { Button, Text } from '@app/blueprints';

import useHome from './useHome';

const HomeScreen = () => {
  const { styles, navigateToSetting, label } = useHome();

  return (
    <View style={styles.container}>
      <Text variant='body' weight='bold'>{label}</Text>
      <Text variant='body' weight='regular'>{label}</Text>
      <Button onPress={navigateToSetting} title='Go to setting' titleStyle={styles.btnText} buttonContainerStyle={styles.btn} />
    </View>
  );
};

export default React.memo(HomeScreen);
