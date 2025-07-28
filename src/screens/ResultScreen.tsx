
import React from 'react';
import styled from 'styled-components/native';
import NutritionCard from '../components/NutritionCard';
import { colors } from '../styles/colors';
import { typography } from '../styles/typography';

const Container = styled.View`
  flex: 1;
  background-color: ${colors.background};
`;

const FoodImage = styled.Image`
  width: 100%;
  height: 300px;
`;

const FoodName = styled.Text`
  ${typography.h2};
  text-align: center;
  margin: 20px 0;
`;

const ResultScreen: React.FC = () => {
  return (
    <Container>
      <FoodImage source={require('../assets/images/food.jpg')} />
      <FoodName>Delicious Burger</FoodName>
      <NutritionCard calories={500} fat={25} carbs={40} protein={30} />
    </Container>
  );
};

export default ResultScreen;
