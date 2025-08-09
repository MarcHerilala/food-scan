import React, { useEffect, useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Alert,
  TouchableOpacity,
  Dimensions,
  Platform,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../styles/colors';
import { typography } from '../styles/typography';
import { spacing } from '../styles/spacing';

const { width, height } = Dimensions.get('window');

const ScanScreen: React.FC = () => {
  const navigation = useNavigation();
  
  const [hasPermission, setHasPermission] = useState(false);
  const [isCapturing, setIsCapturing] = useState(false);

  useEffect(() => {
    // For now, simulate permission granted
    setHasPermission(true);
  }, []);

  const handleCapture = async () => {
    if (isCapturing) return;
    
    setIsCapturing(true);
    
    try {
      // Simulate capture delay
      setTimeout(() => {
        setIsCapturing(false);
        navigation.navigate('Result');
      }, 1000);
    } catch (error) {
      console.error('Capture error:', error);
      setIsCapturing(false);
    }
  };

  const handleBack = () => {
    navigation.goBack();
  };

  if (!hasPermission) {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor={colors.primary} />
        <View style={styles.permissionContainer}>
          <Icon name="camera-alt" size={64} color={colors.textSecondary} />
          <Text style={styles.permissionText}>
            Loading camera...
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      
      {/* Camera placeholder - replace with actual camera implementation */}
      <View style={styles.camera}>
        <View style={styles.cameraPlaceholder}>
          <Icon name="camera-alt" size={64} color={colors.textLight} />
          <Text style={styles.cameraPlaceholderText}>Camera View</Text>
        </View>
      </View>

      {/* Overlay */}
      <View style={styles.overlay}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={handleBack} style={styles.backButton}>
            <Icon name="arrow-back" size={24} color={colors.textLight} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Scan Dish</Text>
          <View style={styles.placeholder} />
        </View>

        {/* Scanning Frame */}
        <View style={styles.scanningArea}>
          <Animatable.View
            animation="pulse"
            iterationCount="infinite"
            duration={2000}
            style={styles.scanFrame}
          >
            <View style={[styles.corner, styles.topLeft]} />
            <View style={[styles.corner, styles.topRight]} />
            <View style={[styles.corner, styles.bottomLeft]} />
            <View style={[styles.corner, styles.bottomRight]} />
          </Animatable.View>
          
          <Text style={styles.instructionText}>
            Point your camera at a Malagasy dish
          </Text>
        </View>

        {/* Bottom Controls */}
        <View style={styles.bottomControls}>
          <View style={styles.captureContainer}>
            <TouchableOpacity
              onPress={handleCapture}
              style={[
                styles.captureButton,
                isCapturing && styles.captureButtonActive
              ]}
              disabled={isCapturing}
            >
              {isCapturing ? (
                <Animatable.View animation="rotate" iterationCount="infinite" duration={1000}>
                  <Icon name="camera-alt" size={32} color={colors.textLight} />
                </Animatable.View>
              ) : (
                <Icon name="camera-alt" size={32} color={colors.textLight} />
              )}
            </TouchableOpacity>
          </View>
          
          <Text style={styles.captureText}>
            {isCapturing ? 'Processing...' : 'Tap to capture'}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.text,
  },
  camera: {
    flex: 1,
  },
  cameraPlaceholder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.text,
  },
  cameraPlaceholderText: {
    ...typography.body,
    color: colors.textLight,
    marginTop: spacing.md,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'transparent',
  },
  permissionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  permissionText: {
    ...typography.body,
    marginTop: spacing.md,
    textAlign: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.xl,
    paddingBottom: spacing.md,
  },
  backButton: {
    padding: spacing.sm,
    borderRadius: 20,
    backgroundColor: colors.overlay,
  },
  headerTitle: {
    ...typography.h3,
    color: colors.textLight,
  },
  placeholder: {
    width: 40,
  },
  scanningArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scanFrame: {
    width: width * 0.7,
    height: width * 0.7,
    position: 'relative',
  },
  corner: {
    position: 'absolute',
    width: 30,
    height: 30,
    borderColor: colors.accent,
    borderWidth: 3,
  },
  topLeft: {
    top: 0,
    left: 0,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  topRight: {
    top: 0,
    right: 0,
    borderLeftWidth: 0,
    borderBottomWidth: 0,
  },
  bottomLeft: {
    bottom: 0,
    left: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
  },
  bottomRight: {
    bottom: 0,
    right: 0,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  instructionText: {
    ...typography.body,
    color: colors.textLight,
    textAlign: 'center',
    marginTop: spacing.xl,
    backgroundColor: colors.overlay,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: 20,
  },
  bottomControls: {
    alignItems: 'center',
    paddingBottom: spacing.xxxl,
  },
  captureContainer: {
    marginBottom: spacing.md,
  },
  captureButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
    shadowColor: colors.shadowDark,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  captureButtonActive: {
    backgroundColor: colors.accent,
  },
  captureText: {
    ...typography.bodySmall,
    color: colors.textLight,
    backgroundColor: colors.overlay,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    borderRadius: 15,
  },
});

export default ScanScreen;