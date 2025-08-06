import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { colors } from '../styles/colors';
import { spacing } from '../styles/spacing';

interface CardProps {
  children: React.ReactNode;
  style?: ViewStyle;
  padding?: number;
}

const Card: React.FC<CardProps> = ({ 
  children, 
  style, 
  padding = spacing.md 
}) => {
  return (
    <View style={[styles.container, { padding }, style]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.surface,
    borderRadius: 16,
    elevation: 4,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
});

export default Card;