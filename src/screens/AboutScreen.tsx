import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import Card from '../components/Card';
import { colors } from '../styles/colors';
import { typography } from '../styles/typography';
import { spacing } from '../styles/spacing';

const AboutScreen: React.FC = () => {
  const navigation = useNavigation();

  const cuisineFeatures = [
    {
      icon: 'eco',
      title: 'Natural Ingredients',
      description: 'Fresh herbs, spices, and locally sourced ingredients from the island',
    },
    {
      icon: 'group',
      title: 'Family Traditions',
      description: 'Recipes passed down through generations, preserving cultural heritage',
    },
    {
      icon: 'public',
      title: 'Cultural Fusion',
      description: 'Influences from African, Asian, and French culinary traditions',
    },
    {
      icon: 'restaurant',
      title: 'Unique Flavors',
      description: 'Distinctive taste profiles found nowhere else in the world',
    },
  ];

  const popularDishes = [
    { name: 'Romazava', description: 'National meat and vegetable stew' },
    { name: 'Ravitoto', description: 'Cassava leaves with pork or beef' },
    { name: 'Vary amin\'anana', description: 'Rice with leafy greens' },
    { name: 'Mofo gasy', description: 'Traditional Malagasy bread' },
  ];

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.primary} />
      
      {/* Header */}
      <LinearGradient colors={colors.gradient.primary} style={styles.header}>
        <TouchableOpacity onPress={handleBack} style={styles.backButton}>
          <Icon name="arrow-back" size={24} color={colors.textLight} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Malagasy Cuisine</Text>
        <View style={styles.placeholder} />
      </LinearGradient>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          {/* Introduction */}
          <Animatable.View animation="fadeInUp" duration={800} delay={200}>
            <Card style={styles.introCard}>
              <View style={styles.introHeader}>
                <Icon name="restaurant-menu" size={48} color={colors.primary} />
                <Text style={styles.introTitle}>Discover Madagascar's Rich Culinary Heritage</Text>
              </View>
              <Text style={styles.introText}>
                Malagasy cuisine reflects the island's unique position in the Indian Ocean, 
                blending African, Asian, and French influences into a distinctive culinary tradition 
                that has evolved over centuries.
              </Text>
            </Card>
          </Animatable.View>

          {/* Features */}
          <Animatable.View animation="fadeInUp" duration={800} delay={400}>
            <Text style={styles.sectionTitle}>What Makes It Special</Text>
            <View style={styles.featuresGrid}>
              {cuisineFeatures.map((feature, index) => (
                <Card key={index} style={styles.featureCard}>
                  <Icon name={feature.icon} size={32} color={colors.primary} />
                  <Text style={styles.featureTitle}>{feature.title}</Text>
                  <Text style={styles.featureDescription}>{feature.description}</Text>
                </Card>
              ))}
            </View>
          </Animatable.View>

          {/* Popular Dishes */}
          <Animatable.View animation="fadeInUp" duration={800} delay={600}>
            <Text style={styles.sectionTitle}>Popular Traditional Dishes</Text>
            <Card style={styles.dishesCard}>
              {popularDishes.map((dish, index) => (
                <View key={index} style={styles.dishItem}>
                  <View style={styles.dishInfo}>
                    <Text style={styles.dishName}>{dish.name}</Text>
                    <Text style={styles.dishDescription}>{dish.description}</Text>
                  </View>
                  <Icon name="arrow-forward-ios" size={16} color={colors.textSecondary} />
                </View>
              ))}
            </Card>
          </Animatable.View>

          {/* Cultural Context */}
          <Animatable.View animation="fadeInUp" duration={800} delay={800}>
            <Card style={styles.contextCard}>
              <Text style={styles.contextTitle}>Cultural Significance</Text>
              <Text style={styles.contextText}>
                Food in Madagascar is more than sustenance—it's a celebration of community, 
                family bonds, and cultural identity. Traditional cooking methods and recipes 
                are treasured knowledge passed from generation to generation.
              </Text>
              <View style={styles.contextStats}>
                <View style={styles.statItem}>
                  <Text style={styles.statNumber}>18</Text>
                  <Text style={styles.statLabel}>Ethnic Groups</Text>
                </View>
                <View style={styles.statItem}>
                  <Text style={styles.statNumber}>1000+</Text>
                  <Text style={styles.statLabel}>Traditional Recipes</Text>
                </View>
                <View style={styles.statItem}>
                  <Text style={styles.statNumber}>500+</Text>
                  <Text style={styles.statLabel}>Years of Tradition</Text>
                </View>
              </View>
            </Card>
          </Animatable.View>

          {/* App Info */}
          <Animatable.View animation="fadeInUp" duration={800} delay={1000}>
            <Card style={styles.appInfoCard}>
              <Icon name="camera-alt" size={32} color={colors.accent} />
              <Text style={styles.appInfoTitle}>About This App</Text>
              <Text style={styles.appInfoText}>
                Sakafo Malagasy uses advanced image recognition to help you identify 
                traditional Malagasy dishes and learn about their cultural significance, 
                ingredients, and preparation methods.
              </Text>
            </Card>
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
  },
  backButton: {
    padding: spacing.sm,
  },
  headerTitle: {
    ...typography.h3,
    color: colors.textLight,
  },
  placeholder: {
    width: 40,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: spacing.lg,
  },
  introCard: {
    marginBottom: spacing.xl,
  },
  introHeader: {
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  introTitle: {
    ...typography.h2,
    textAlign: 'center',
    marginTop: spacing.md,
  },
  introText: {
    ...typography.body,
    lineHeight: 24,
    textAlign: 'center',
  },
  sectionTitle: {
    ...typography.h2,
    marginBottom: spacing.lg,
  },
  featuresGrid: {
    gap: spacing.md,
    marginBottom: spacing.xl,
  },
  featureCard: {
    alignItems: 'center',
    padding: spacing.lg,
  },
  featureTitle: {
    ...typography.h3,
    marginTop: spacing.md,
    marginBottom: spacing.sm,
    textAlign: 'center',
  },
  featureDescription: {
    ...typography.bodySmall,
    textAlign: 'center',
    lineHeight: 20,
  },
  dishesCard: {
    marginBottom: spacing.xl,
  },
  dishItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.background,
  },
  dishInfo: {
    flex: 1,
  },
  dishName: {
    ...typography.h3,
    marginBottom: spacing.xs,
  },
  dishDescription: {
    ...typography.bodySmall,
  },
  contextCard: {
    marginBottom: spacing.xl,
  },
  contextTitle: {
    ...typography.h2,
    marginBottom: spacing.md,
  },
  contextText: {
    ...typography.body,
    lineHeight: 24,
    marginBottom: spacing.lg,
  },
  contextStats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    ...typography.h2,
    color: colors.primary,
  },
  statLabel: {
    ...typography.bodySmall,
    marginTop: spacing.xs,
  },
  appInfoCard: {
    alignItems: 'center',
    marginBottom: spacing.xl,
  },
  appInfoTitle: {
    ...typography.h3,
    marginTop: spacing.md,
    marginBottom: spacing.md,
  },
  appInfoText: {
    ...typography.body,
    textAlign: 'center',
    lineHeight: 24,
  },
});

export default AboutScreen;