
import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '../styles/colors';

const ButtonContainer = styled.TouchableOpacity`
  background-color: ${colors.primary};
  padding: 20px;
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const ButtonText = styled.Text`
  color: ${colors.white};
  font-size: 18px;
  font-weight: bold;
  margin-left: 10px;
`;

interface ScanButtonProps {
  onPress: () => void;
}

const ScanButton: React.FC<ScanButtonProps> = ({ onPress }) => {
  return (
    <ButtonContainer onPress={onPress}>
      <Icon name="camera-outline" size={24} color={colors.white} />
      <ButtonText>Scan Food</ButtonText>
    </ButtonContainer>
  );
};

export default ScanButton;
