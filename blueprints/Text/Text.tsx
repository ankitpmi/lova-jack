import React from 'react';
import {
  // eslint-disable-next-line no-restricted-imports
  Text as RNText,
  StyleProp,
  TextProps as TextProperties,
  TextStyle,
} from 'react-native';

import { useColor } from '@src/context';
import { scaledSize } from '@src/utils';

export enum Fonts {
  Poppins = 'Poppins',
  NunitoSansRegular = 'NunitoSansRegular'
}


export const FontWeight = {
  xbold: {
    fontFamily: Fonts.Poppins
  },
  bold: {
    fontFamily: Fonts.Poppins
  },
  semibold: {
    fontFamily: Fonts.Poppins
  },
  regular: {
    fontFamily: Fonts.NunitoSansRegular
  },
}


export const FontVariant = {
  heading1: {
    fontSize: scaledSize(50),
    lineHeight: scaledSize(60),
  } as TextStyle,
  heading2: { fontSize: scaledSize(45), lineHeight: 54 } as TextStyle,
  heading3: { fontSize: scaledSize(36), lineHeight: scaledSize(42) } as TextStyle,
  heading4: { fontSize: scaledSize(22), lineHeight: scaledSize(32) } as TextStyle,
  body: { fontSize: scaledSize(18), lineHeight: 26 } as TextStyle,
  tag: { fontSize: scaledSize(16), lineHeight: scaledSize(24) } as TextStyle,
};


export type TextVariant = keyof typeof FontVariant;
export type TextWeight = keyof typeof FontWeight;

export interface TextProps extends TextProperties {
  style?: StyleProp<TextStyle>;
  weight?: TextWeight;
  variant?: TextVariant
  color?: string;
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify';
}

export const Text = ({ children, ...props }: TextProps) => {
  const {
    color,
    style: styleOverride,
    textAlign = 'auto',
    variant = 'tag',
    weight = 'regular',
    ...rest
  } = props;

  const { color: palette } = useColor();

  return (
    <RNText
      {...rest}
      style={[
        FontWeight[weight] as TextProps,
        FontVariant[variant] as TextProps,
        { color: color ? color : palette.textColor, textAlign: textAlign },
        styleOverride,
      ]}>
      {children}
    </RNText>
  );
};
