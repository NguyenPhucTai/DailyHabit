import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { Button } from '../components';

export default function WelcomeScreen() {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push('/login');
  };

  const handleSkip = () => {
    // TODO: Navigate to main app (tabs)
    router.replace('/(tabs)');
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.illustration}>
          <Text style={styles.emoji}>🎯</Text>
        </View>
        
        <Text style={styles.title}>Chào mừng đến với DailyHabit!</Text>
        <Text style={styles.subtitle}>
          Xây dựng thói quen tốt, từng ngày một. 
          Theo dõi tiến trình và duy trì streak của bạn!
        </Text>

        <View style={styles.features}>
          <View style={styles.feature}>
            <Text style={styles.featureIcon}>✅</Text>
            <Text style={styles.featureText}>Tạo thói quen dễ dàng</Text>
          </View>
          <View style={styles.feature}>
            <Text style={styles.featureIcon}>🔥</Text>
            <Text style={styles.featureText}>Theo dõi streak hàng ngày</Text>
          </View>
          <View style={styles.feature}>
            <Text style={styles.featureIcon}>📊</Text>
            <Text style={styles.featureText}>Xem thống kê tiến trình</Text>
          </View>
        </View>
      </View>

      <View style={styles.actions}>
        <Button
          title="Bắt đầu"
          onPress={handleGetStarted}
          variant="primary"
          testID="get-started-button"
        />
        <Button
          title="Bỏ qua"
          onPress={handleSkip}
          variant="secondary"
          testID="skip-button"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
    paddingHorizontal: 20,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  illustration: {
    marginBottom: 40,
  },
  emoji: {
    fontSize: 80,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 40,
  },
  features: {
    width: '100%',
    maxWidth: 300,
  },
  feature: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  featureIcon: {
    fontSize: 20,
    marginRight: 12,
  },
  featureText: {
    fontSize: 16,
    color: '#555',
  },
  actions: {
    paddingBottom: 40,
    gap: 12,
  },
});
