import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { HabitCard, type Habit } from '../../components';

const mockHabits: Habit[] = [
  {
    id: '1',
    name: 'Đọc sách',
    description: 'Đọc ít nhất 30 phút mỗi ngày',
    streak: 5,
    isCompletedToday: false,
    color: '#FF6B6B',
  },
  {
    id: '2',
    name: 'Tập thể dục',
    description: 'Tập gym hoặc chạy bộ',
    streak: 12,
    isCompletedToday: true,
    color: '#4ECDC4',
  },
  {
    id: '3',
    name: 'Uống nước',
    description: 'Uống ít nhất 2L nước mỗi ngày',
    streak: 3,
    isCompletedToday: true,
    color: '#45B7D1',
  },
];

export default function HomeScreen() {
  const handleToggleHabit = (habitId: string) => {
    console.log('Toggle habit:', habitId);
    // TODO: Implement habit toggle logic
  };

  const handleHabitPress = (habit: Habit) => {
    console.log('Habit pressed:', habit.name);
    // TODO: Navigate to habit details
  };

  const completedToday = mockHabits.filter(h => h.isCompletedToday).length;
  const totalHabits = mockHabits.length;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Chào buổi sáng! 👋</Text>
        <Text style={styles.date}>
          {new Date().toLocaleDateString('vi-VN', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}
        </Text>
      </View>

      <View style={styles.progress}>
        <Text style={styles.progressTitle}>Tiến trình hôm nay</Text>
        <Text style={styles.progressText}>
          {completedToday}/{totalHabits} thói quen đã hoàn thành
        </Text>
        <View style={styles.progressBar}>
          <View 
            style={[
              styles.progressFill, 
              { width: `${(completedToday / totalHabits) * 100}%` }
            ]} 
          />
        </View>
      </View>

      <View style={styles.habits}>
        <Text style={styles.sectionTitle}>Thói quen của bạn</Text>
        {mockHabits.map((habit) => (
          <HabitCard
            key={habit.id}
            habit={habit}
            onToggle={handleToggleHabit}
            onPress={handleHabitPress}
            testID={`habit-${habit.id}`}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  header: {
    padding: 20,
    backgroundColor: 'white',
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  date: {
    fontSize: 16,
    color: '#666',
  },
  progress: {
    margin: 16,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  progressTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  progressText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 12,
  },
  progressBar: {
    height: 8,
    backgroundColor: '#E5E5EA',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#34C759',
    borderRadius: 4,
  },
  habits: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginHorizontal: 16,
    marginBottom: 8,
  },
});
