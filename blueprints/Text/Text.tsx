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


const BASE_TEXT: TextStyle = {
  fontSize: scaledSize(7),
};

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

export const presets = {
  default: BASE_TEXT,
  font400: {
    ...BASE_TEXT,
    //add your font normal for weight 400
    fontFamily: Fonts.Poppins,
  } as TextStyle,
  font500: {
    ...BASE_TEXT,
    //add your font medium for weight 500
    fontFamily: Fonts.Poppins,
  } as TextStyle,
  font600: {
    ...BASE_TEXT,
    //add your font semi-bold for weight 600
    fontFamily: Fonts.Poppins,
  } as TextStyle,
  font700: {
    ...BASE_TEXT,
    //add your font bold for weight 700
    fontFamily: Fonts.Poppins,
  } as TextStyle,
  h1: {
    ...BASE_TEXT,
    fontFamily: Fonts.Poppins,
    fontSize: scaledSize(24),
    fontWeight: '700',
  } as TextStyle,
  h2: {
    ...BASE_TEXT,
    fontFamily: Fonts.Poppins,
    fontSize: scaledSize(21),
    fontWeight: '700',
  } as TextStyle,
  h3: {
    ...BASE_TEXT,
    fontFamily: Fonts.Poppins,
    fontSize: scaledSize(18),
    fontWeight: '500',
  } as TextStyle,
  h4: {
    ...BASE_TEXT,
    fontFamily: Fonts.Poppins,
    fontSize: scaledSize(15),
    fontWeight: '500',
  } as TextStyle,
  h5: {
    ...BASE_TEXT,
    fontFamily: Fonts.Poppins,
    fontSize: scaledSize(12),
    fontWeight: '400',
  } as TextStyle,
  h6: {
    ...BASE_TEXT,
    fontFamily: Fonts.Poppins,
    fontSize: scaledSize(9),
    fontWeight: '400',
  } as TextStyle,
  small: {
    ...BASE_TEXT,
    fontFamily: Fonts.Poppins,
    fontSize: scaledSize(6),
    fontWeight: '300',
  } as TextStyle,
  title: {
    ...BASE_TEXT,
    fontFamily: Fonts.Poppins,
    fontSize: scaledSize(13),
    fontWeight: '700',
  } as TextStyle,
};

export type TextPresets = keyof typeof presets;
export type TextVariant = keyof typeof FontVariant;
export type TextWeight = keyof typeof FontWeight;

export interface TextProps extends TextProperties {
  style?: StyleProp<TextStyle>;
  preset?: TextPresets;
  weight?: TextWeight;
  variant?: TextVariant
  color?: string;
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify';
}

export const Text = ({ children, ...props }: TextProps) => {
  const {
    color,
    preset = 'default',
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
        presets[preset] as TextProps,
        FontWeight[weight] as TextProps,
        FontVariant[variant] as TextProps,
        { color: color ? color : palette.textColor, textAlign: textAlign },
        styleOverride,
      ]}>
      {children}
    </RNText>
  );
};
