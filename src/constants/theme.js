import {Dimensions} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
const {width, height} = Dimensions.get('window');

export const COLORS = {
  // base colors
  primary: '#fff',
  secondary: '#F5F8FA',
  icon: '#BCC8D4',
  background: '#1976D2',
  place_holder: '#252525',

  dark_gray: '#111',
  gray: '#aaa',
  light_gray: '#ddd',

  danger: '#dc3545',
  info: '#17a2b8',
  warning: '#ffc107',
  button: '#cd9937',
  button_light: '#EBCD73',
  black: '#000',
  white: '#fff',
};

export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 12,
  padding: 24,
  padding2: 36,

  // font sizes
  largeTitle: 50,
  h1: 24,
  h2: 16,
  h3: 14,
  h4: 12,
  h5: 10,
  text1: 24,
  text2: 16,
  text3: 14,
  text4: 12,
  text5: 10,

  // app dimensions
  width,
  height,
};

export const FONTS = {
  largeTitle: {
    fontFamily: 'PoppinsBold',
    fontSize: SIZES.largeTitle,
    lineHeight: 55,
  },
  h1: {
    fontFamily: 'PoppinsBold',
    fontSize: SIZES.h1,
    lineHeight: 24 + 5,
    color: COLORS.primary,
  },
  h2: {
    fontFamily: 'PoppinsBold',
    fontSize: SIZES.h2,
    lineHeight: 16 + 5,
    color: COLORS.primary,
  },
  h3: {
    fontFamily: 'PoppinsBold',
    fontSize: SIZES.h3,
    lineHeight: 14 + 5,
    color: COLORS.primary,
  },
  h4: {
    fontFamily: 'PoppinsBold',
    fontSize: SIZES.h4,
    lineHeight: 12 + 5,
    color: COLORS.primary,
  },
  h5: {
    fontFamily: 'PoppinsBold',
    fontSize: SIZES.h5,
    lineHeight: 10 + 5,
    color: COLORS.primary,
  },
  text1: {
    fontFamily: 'PoppinsMedium',
    fontSize: SIZES.text1,
    lineHeight: 24 + 5,
    color: COLORS.primary,
  },
  text2: {
    fontFamily: 'PoppinsMedium',
    fontSize: SIZES.text2,
    lineHeight: 16 + 5,
    color: COLORS.primary,
  },
  text3: {
    fontFamily: 'PoppinsMedium',
    fontSize: SIZES.text3,
    lineHeight: 14 + 5,
    color: COLORS.primary,
  },
  text4: {
    fontFamily: 'PoppinsMedium',
    fontSize: SIZES.text4,
    lineHeight: 12 + 5,
    color: COLORS.primary,
  },
  text5: {
    fontFamily: 'PoppinsMedium',
    fontSize: SIZES.text5,
    lineHeight: 10 + 5,
    color: COLORS.primary,
  },
};

const appTheme = {COLORS, SIZES, FONTS};

export default appTheme;
