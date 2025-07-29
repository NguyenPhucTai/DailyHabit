import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { HabitCard } from '../../components';
import { Habit } from '../../models';
import { habitAPI } from '../../data';

export default function HomeScreen() {
  const [habits, setHabits] = useState<Habit[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadHabits();
  }, []);

  const loadHabits = async () => {
    try {
      setLoading(true);
      const habitsData = await habitAPI.getHabits();
      setHabits(habitsData);
    } catch (error) {
      console.error('Error loading habits:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleToggleHabit = async (habitId: string) => {
    try {
      const updatedHabit = await habitAPI.toggleHabitCompletion(habitId);
      if (updatedHabit) {
        setHabits(prevHabits => 
          prevHabits.map(habit => 
            habit.id === habitId ? updatedHabit : habit
          )
        );
      }
    } catch (error) {
      console.error('Error toggling habit:', error);
    }
  };

  const handleHabitPress = (habit: Habit) => {
    console.log('Habit pressed:', habit.name);
    // TODO: Navigate to habit details
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <Text style={styles.greeting}>Đang tải...</Text>
      </View>
    );
  }

  const completedToday = habits.filter(h => h.isCompletedToday).length;
  const totalHabits = habits.length;

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
        {habits.map((habit) => (
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
