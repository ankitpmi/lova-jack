import React from 'react';
import { View } from 'react-native';

import { AnimatedTouchableOpacity, Button, Text } from '@app/blueprints';

import { BaseLayout } from '@src/components';
import { contents } from '@src/context';
import { ContentLanguage } from '@src/i18n';

import useSetting from './useSetting';

const SettingScreen = () => {
  const {
    appTheme,
    handleChangeLanguage,
    handleChangeTheme,
    goBackHandler,
    language,
    languages,
    styles,
    themes,
  } = useSetting();

  return (
    <BaseLayout>
      <View style={styles.header}>
        <Text>{contents('setting.settingScreen')}</Text>
      </View>
      <View style={styles.content}>
        <Text textAlign="center">
          {contents('setting.theme')}
        </Text>
        {themes.map(m => {
          return (
            <AnimatedTouchableOpacity
              containerStyle={styles.themes}
              onPress={handleChangeTheme(m.toLowerCase())}
              key={`${m}`}>
              <Text>{m}</Text>
              <AnimatedTouchableOpacity
                onPress={handleChangeTheme(m.toLowerCase())}
                containerStyle={styles.radio}>
                {appTheme === m.toLowerCase() ? (
                  <View style={styles.selectedRadio} />
                ) : null}
              </AnimatedTouchableOpacity>
            </AnimatedTouchableOpacity>
          );
        })}

        <Text textAlign="center">
          {contents('setting.languages')}
        </Text>
        {languages.map(m => {
          return (
            <AnimatedTouchableOpacity
              onPress={handleChangeLanguage(m)}
              containerStyle={styles.themes}
              key={`${m}`}>
              <Text>{m}</Text>
              <AnimatedTouchableOpacity
                onPress={handleChangeLanguage(m)}
                containerStyle={styles.radio}>
                {ContentLanguage[m as keyof typeof ContentLanguage] ===
                  language ? (
                  <View style={styles.selectedRadio} />
                ) : null}
              </AnimatedTouchableOpacity>
            </AnimatedTouchableOpacity>
          );
        })}
        <Button
          title="Go back"
          buttonContainerStyle={styles.btn}
          titleStyle={styles.btnText}
          onPress={goBackHandler}
        />
      </View>
    </BaseLayout>
  );
};

export default React.memo(SettingScreen);
