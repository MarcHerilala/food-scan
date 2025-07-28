
import React from 'react';
import styled from 'styled-components/native';
import { colors } from '../styles/colors';

const CardContainer = styled.View`
  background-color: ${colors.white};
  padding: 20px;
  border-radius: 10px;
  margin: 10px;
  shadow-color: #000;
  shadow-offset: { width: 0, height: 2 };
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;
  elevation: 5;
`;

const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const NutritionRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 5px;
`;

const NutritionLabel = styled.Text`
  font-size: 16px;
  color: ${colors.text};
`;

const NutritionValue = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${colors.primary};
`;

interface NutritionCardProps {
  calories: number;
  fat: number;
  carbs: number;
  protein: number;
}

const NutritionCard: React.FC<NutritionCardProps> = ({ calories, fat, carbs, protein }) => {
  return (
    <CardContainer>
      <Title>Nutritional Values</Title>
      <NutritionRow>
        <NutritionLabel>Calories</NutritionLabel>
        <NutritionValue>{calories} kcal</NutritionValue>
      </NutritionRow>
      <NutritionRow>
        <NutritionLabel>Fat</NutritionLabel>
        <NutritionValue>{fat} g</NutritionValue>
      </NutritionRow>
      <NutritionRow>
        <NutritionLabel>Carbs</NutritionLabel>
        <NutritionValue>{carbs} g</NutritionValue>
      </NutritionRow>
      <NutritionRow>
        <NutritionLabel>Protein</NutritionLabel>
        <NutritionValue>{protein} g</NutritionValue>
      </NutritionRow>
    </CardContainer>
  );
};

export default NutritionCard;
