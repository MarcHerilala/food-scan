import { TextStyle } from 'react-native';
import { colors } from './colors';

export const typography = {
  h1: {
    fontSize: 32,
    fontWeight: '700',
    color: colors.text,
    fontFamily: 'PlayfairDisplay-Bold',
    lineHeight: 40,
  } as TextStyle,
  h2: {
    fontSize: 24,
    fontWeight: '600',
    color: colors.text,
    fontFamily: 'PlayfairDisplay-SemiBold',
    lineHeight: 32,
  } as TextStyle,
  h3: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.text,
    fontFamily: 'Poppins-SemiBold',
    lineHeight: 28,
  } as TextStyle,
  body: {
    fontSize: 16,
    fontWeight: '400',
    color: colors.text,
    fontFamily: 'Poppins-Regular',
    lineHeight: 24,
  } as TextStyle,
  bodySmall: {
    fontSize: 14,
    fontWeight: '400',
    color: colors.textSecondary,
    fontFamily: 'Poppins-Regular',
    lineHeight: 20,
  } as TextStyle,
  button: {
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Poppins-SemiBold',
    lineHeight: 24,
  } as TextStyle,
  caption: {
    fontSize: 12,
    fontWeight: '400',
    color: colors.textSecondary,
    fontFamily: 'Poppins-Regular',
    lineHeight: 16,
  } as TextStyle,
};