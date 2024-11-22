import { StyleSheet } from 'react-native';

import { Palette, scaleHeight, scaleWidth } from '@src/utils';

export const HomeStyles = ({backgroundColor}: Palette) =>
  StyleSheet.create({
    container: {
      alignItems: 'center',
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: scaleWidth(20)
    },
    btnText: {
      color: backgroundColor,
    },
    btn: {
      marginTop: scaleHeight(20)
    }
  });
