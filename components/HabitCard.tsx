import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export interface Habit {
  id: string;
  name: string;
  description?: string;
  streak: number;
  isCompletedToday: boolean;
  color: string;
}

interface HabitCardProps {
  habit: Habit;
  onToggle: (habitId: string) => void;
  onPress?: (habit: Habit) => void;
  testID?: string;
}

export const HabitCard: React.FC<HabitCardProps> = ({
  habit,
  onToggle,
  onPress,
  testID,
}) => {
  const handleToggle = () => {
    onToggle(habit.id);
  };

  const handlePress = () => {
    onPress?.(habit);
  };

  return (
    <TouchableOpacity
      style={[styles.container, { borderLeftColor: habit.color }]}
      onPress={handlePress}
      testID={testID}
      accessibilityRole="button"
      accessibilityLabel={`Habit: ${habit.name}`}
    >
      <View style={styles.content}>
        <Text style={styles.name}>{habit.name}</Text>
        {habit.description && (
          <Text style={styles.description}>{habit.description}</Text>
        )}
        <Text style={styles.streak}>
          Streak: {habit.streak} ngày
        </Text>
      </View>
      
      <TouchableOpacity
        style={[
          styles.checkButton,
          habit.isCompletedToday && styles.checkButtonCompleted,
        ]}
        onPress={handleToggle}
        testID={`${testID}-toggle`}
        accessibilityRole="checkbox"
        accessibilityState={{ checked: habit.isCompletedToday }}
      >
        <Text style={[
          styles.checkText,
          habit.isCompletedToday && styles.checkTextCompleted,
        ]}>
          {habit.isCompletedToday ? '✓' : '○'}
        </Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    borderLeftWidth: 4,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  content: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  streak: {
    fontSize: 12,
    color: '#999',
    fontWeight: '500',
  },
  checkButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#E5E5EA',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F9F9F9',
  },
  checkButtonCompleted: {
    backgroundColor: '#34C759',
    borderColor: '#34C759',
  },
  checkText: {
    fontSize: 20,
    color: '#999',
  },
  checkTextCompleted: {
    color: 'white',
    fontWeight: 'bold',
  },
});
