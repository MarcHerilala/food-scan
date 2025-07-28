
import React from 'react';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import ScanButton from '../components/ScanButton';
import { colors } from '../styles/colors';
import { typography } from '../styles/typography';

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${colors.background};
`;

const Header = styled.Text`
  ${typography.h1};
  margin-bottom: 40px;
`;

const HomeScreen: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Header>FoodScan</Header>
      <ScanButton onPress={() => navigation.navigate('Result')} />
    </Container>
  );
};

export default HomeScreen;
