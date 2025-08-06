import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Image,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import GradientButton from '../components/GradientButton';
import Card from '../components/Card';
import { colors } from '../styles/colors';
import { typography } from '../styles/typography';
import { spacing } from '../styles/spacing';

const HomeScreen: React.FC = () => {
  const navigation = useNavigation();

  const handleScanPress = () => {
    navigation.navigate('Scan');
  };

  const handleAboutPress = () => {
    navigation.navigate('About');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.primary} />
      <LinearGradient
        colors={colors.gradient.primary}
        style={styles.background}
      >
        <View style={styles.content}>
          {/* Header */}
          <Animatable.View 
            animation="fadeInDown" 
            duration={1000}
            style={styles.header}
          >
            <Icon name="restaurant" size={48} color={colors.textLight} />
            <Text style={styles.title}>Sakafo Malagasy</Text>
            <Text style={styles.subtitle}>Discover Traditional Dishes</Text>
          </Animatable.View>

          {/* Main Content */}
          <Animatable.View 
            animation="fadeInUp" 
            duration={1000}
            delay={300}
            style={styles.mainContent}
          >
            <Card style={styles.welcomeCard}>
              <View style={styles.cardContent}>
                <Icon 
                  name="camera-alt" 
                  size={64} 
                  color={colors.primary} 
                  style={styles.cameraIcon}
                />
                <Text style={styles.welcomeTitle}>
                  Welcome to Malagasy Cuisine
                </Text>
                <Text style={styles.welcomeText}>
                  Point your camera at any traditional Malagasy dish and discover 
                  its rich history, ingredients, and cultural significance.
                </Text>
              </View>
            </Card>

            {/* Action Buttons */}
            <View style={styles.buttonContainer}>
              <GradientButton
                title="Scan Malagasy Dish"
                iconName="camera-alt"
                onPress={handleScanPress}
                style={styles.scanButton}
              />
              
              <GradientButton
                title="Learn About Cuisine"
                iconName="info"
                onPress={handleAboutPress}
                gradientColors={colors.gradient.warm}
                style={styles.aboutButton}
              />
            </View>

            {/* Cultural Elements */}
            <Animatable.View 
              animation="fadeIn" 
              duration={1000}
              delay={800}
              style={styles.culturalElements}
            >
              <View style={styles.culturalItem}>
                <Icon name="eco" size={24} color={colors.accent} />
                <Text style={styles.culturalText}>Traditional</Text>
              </View>
              <View style={styles.culturalItem}>
                <Icon name="local-dining" size={24} color={colors.accent} />
                <Text style={styles.culturalText}>Authentic</Text>
              </View>
              <View style={styles.culturalItem}>
                <Icon name="favorite" size={24} color={colors.accent} />
                <Text style={styles.culturalText}>Cultural</Text>
              </View>
            </Animatable.View>
          </Animatable.View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: spacing.lg,
  },
  header: {
    alignItems: 'center',
    paddingTop: spacing.xl,
    paddingBottom: spacing.lg,
  },
  title: {
    ...typography.h1,
    color: colors.textLight,
    marginTop: spacing.md,
    textAlign: 'center',
  },
  subtitle: {
    ...typography.body,
    color: colors.textLight,
    opacity: 0.9,
    marginTop: spacing.xs,
    textAlign: 'center',
  },
  mainContent: {
    flex: 1,
    justifyContent: 'center',
  },
  welcomeCard: {
    marginBottom: spacing.xl,
  },
  cardContent: {
    alignItems: 'center',
  },
  cameraIcon: {
    marginBottom: spacing.md,
  },
  welcomeTitle: {
    ...typography.h2,
    textAlign: 'center',
    marginBottom: spacing.md,
  },
  welcomeText: {
    ...typography.body,
    textAlign: 'center',
    lineHeight: 24,
  },
  buttonContainer: {
    gap: spacing.md,
  },
  scanButton: {
    marginBottom: spacing.sm,
  },
  aboutButton: {
    marginBottom: spacing.xl,
  },
  culturalElements: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: spacing.lg,
  },
  culturalItem: {
    alignItems: 'center',
  },
  culturalText: {
    ...typography.bodySmall,
    color: colors.textLight,
    marginTop: spacing.xs,
    opacity: 0.9,
  },
});

export default HomeScreen;