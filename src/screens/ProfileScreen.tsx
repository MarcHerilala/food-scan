
import React from 'react';
import styled from 'styled-components/native';
import { colors } from '../styles/colors';
import { typography } from '../styles/typography';

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${colors.background};
`;

const ScreenText = styled.Text`
  ${typography.h2};
`;

const ProfileScreen: React.FC = () => {
  return (
    <Container>
      <ScreenText>Profile</ScreenText>
    </Container>
  );
};

export default ProfileScreen;
