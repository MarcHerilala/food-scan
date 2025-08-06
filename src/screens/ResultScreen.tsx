import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import Card from '../components/Card';
import GradientButton from '../components/GradientButton';
import { colors } from '../styles/colors';
import { typography } from '../styles/typography';
import { spacing } from '../styles/spacing';

const { width } = Dimensions.get('window');

const ResultScreen: React.FC = () => {
  const navigation = useNavigation();

  const dishData = {
    name: 'Romazava',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
    description: 'Romazava is the national dish of Madagascar, a traditional meat and vegetable stew that embodies the essence of Malagasy cuisine.',
    culturalSignificance: 'This beloved dish represents the heart of Malagasy family gatherings and is often prepared for special occasions and Sunday meals.',
    ingredients: [
      'Zebu beef or pork',
      'Anamalao (leafy greens)',
      'Tomatoes',
      'Onions',
      'Ginger',
      'Garlic'
    ],
    nutritionalInfo: {
      calories: 320,
      protein: '28g',
      carbs: '12g',
      fat: '18g'
    },
    region: 'Central Highlands',
    difficulty: 'Medium'
  };

  const handleBack = () => {
    navigation.goBack();
  };

  const handleScanAnother = () => {
    navigation.navigate('Scan');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.primary} />
      
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header Image */}
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: dishData.image }}
            style={styles.dishImage}
            resizeMode="cover"
          />
          <LinearGradient
            colors={['transparent', colors.overlay]}
            style={styles.imageOverlay}
          />
          
          {/* Back Button */}
          <TouchableOpacity onPress={handleBack} style={styles.backButton}>
            <Icon name="arrow-back" size={24} color={colors.textLight} />
          </TouchableOpacity>

          {/* Success Badge */}
          <Animatable.View
            animation="bounceIn"
            duration={1000}
            style={styles.successBadge}
          >
            <Icon name="check-circle" size={24} color={colors.success} />
            <Text style={styles.successText}>Dish Recognized!</Text>
          </Animatable.View>
        </View>

        {/* Content */}
        <View style={styles.content}>
          {/* Dish Name */}
          <Animatable.View animation="fadeInUp" duration={800} delay={200}>
            <Text style={styles.dishName}>{dishData.name}</Text>
            <View style={styles.regionContainer}>
              <Icon name="place" size={16} color={colors.textSecondary} />
              <Text style={styles.regionText}>{dishData.region}</Text>
            </View>
          </Animatable.View>

          {/* Description Card */}
          <Animatable.View animation="fadeInUp" duration={800} delay={400}>
            <Card style={styles.descriptionCard}>
              <Text style={styles.sectionTitle}>About This Dish</Text>
              <Text style={styles.description}>{dishData.description}</Text>
              <Text style={styles.culturalText}>{dishData.culturalSignificance}</Text>
            </Card>
          </Animatable.View>

          {/* Ingredients Card */}
          <Animatable.View animation="fadeInUp" duration={800} delay={600}>
            <Card style={styles.ingredientsCard}>
              <Text style={styles.sectionTitle}>Traditional Ingredients</Text>
              <View style={styles.ingredientsList}>
                {dishData.ingredients.map((ingredient, index) => (
                  <View key={index} style={styles.ingredientItem}>
                    <Icon name="fiber-manual-record" size={8} color={colors.primary} />
                    <Text style={styles.ingredientText}>{ingredient}</Text>
                  </View>
                ))}
              </View>
            </Card>
          </Animatable.View>

          {/* Info Cards Row */}
          <Animatable.View animation="fadeInUp" duration={800} delay={800}>
            <View style={styles.infoRow}>
              <Card style={styles.infoCard}>
                <Icon name="restaurant" size={24} color={colors.accent} />
                <Text style={styles.infoLabel}>Difficulty</Text>
                <Text style={styles.infoValue}>{dishData.difficulty}</Text>
              </Card>
              
              <Card style={styles.infoCard}>
                <Icon name="local-fire-department" size={24} color={colors.secondary} />
                <Text style={styles.infoLabel}>Calories</Text>
                <Text style={styles.infoValue}>{dishData.nutritionalInfo.calories}</Text>
              </Card>
            </View>
          </Animatable.View>

          {/* Nutrition Card */}
          <Animatable.View animation="fadeInUp" duration={800} delay={1000}>
            <Card style={styles.nutritionCard}>
              <Text style={styles.sectionTitle}>Nutritional Information</Text>
              <View style={styles.nutritionGrid}>
                <View style={styles.nutritionItem}>
                  <Text style={styles.nutritionValue}>{dishData.nutritionalInfo.protein}</Text>
                  <Text style={styles.nutritionLabel}>Protein</Text>
                </View>
                <View style={styles.nutritionItem}>
                  <Text style={styles.nutritionValue}>{dishData.nutritionalInfo.carbs}</Text>
                  <Text style={styles.nutritionLabel}>Carbs</Text>
                </View>
                <View style={styles.nutritionItem}>
                  <Text style={styles.nutritionValue}>{dishData.nutritionalInfo.fat}</Text>
                  <Text style={styles.nutritionLabel}>Fat</Text>
                </View>
              </View>
            </Card>
          </Animatable.View>

          {/* Action Buttons */}
          <Animatable.View animation="fadeInUp" duration={800} delay={1200}>
            <View style={styles.actionButtons}>
              <GradientButton
                title="Scan Another Dish"
                iconName="camera-alt"
                onPress={handleScanAnother}
                style={styles.scanButton}
              />
            </View>
          </Animatable.View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollView: {
    flex: 1,
  },
  imageContainer: {
    position: 'relative',
    height: 300,
  },
  dishImage: {
    width: '100%',
    height: '100%',
  },
  imageOverlay: {
    ...StyleSheet.absoluteFillObject,
  },
  backButton: {
    position: 'absolute',
    top: spacing.xl,
    left: spacing.lg,
    padding: spacing.sm,
    borderRadius: 20,
    backgroundColor: colors.overlay,
  },
  successBadge: {
    position: 'absolute',
    top: spacing.xl,
    right: spacing.lg,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: 20,
    elevation: 4,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  successText: {
    ...typography.bodySmall,
    color: colors.success,
    marginLeft: spacing.xs,
    fontWeight: '600',
  },
  content: {
    padding: spacing.lg,
    marginTop: -spacing.lg,
  },
  dishName: {
    ...typography.h1,
    textAlign: 'center',
    marginBottom: spacing.sm,
  },
  regionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.xl,
  },
  regionText: {
    ...typography.bodySmall,
    marginLeft: spacing.xs,
  },
  descriptionCard: {
    marginBottom: spacing.lg,
  },
  sectionTitle: {
    ...typography.h3,
    marginBottom: spacing.md,
  },
  description: {
    ...typography.body,
    marginBottom: spacing.md,
    lineHeight: 24,
  },
  culturalText: {
    ...typography.bodySmall,
    fontStyle: 'italic',
    color: colors.textSecondary,
    lineHeight: 20,
  },
  ingredientsCard: {
    marginBottom: spacing.lg,
  },
  ingredientsList: {
    gap: spacing.sm,
  },
  ingredientItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ingredientText: {
    ...typography.body,
    marginLeft: spacing.sm,
  },
  infoRow: {
    flexDirection: 'row',
    gap: spacing.md,
    marginBottom: spacing.lg,
  },
  infoCard: {
    flex: 1,
    alignItems: 'center',
    padding: spacing.lg,
  },
  infoLabel: {
    ...typography.bodySmall,
    marginTop: spacing.sm,
  },
  infoValue: {
    ...typography.h3,
    marginTop: spacing.xs,
  },
  nutritionCard: {
    marginBottom: spacing.xl,
  },
  nutritionGrid: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  nutritionItem: {
    alignItems: 'center',
  },
  nutritionValue: {
    ...typography.h3,
    color: colors.primary,
  },
  nutritionLabel: {
    ...typography.bodySmall,
    marginTop: spacing.xs,
  },
  actionButtons: {
    marginBottom: spacing.xl,
  },
  scanButton: {
    marginBottom: spacing.md,
  },
});

export default ResultScreen;