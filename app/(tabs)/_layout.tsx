import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Trang chủ',
          tabBarIcon: () => '🏠',
        }}
      />
      <Tabs.Screen
        name="habits"
        options={{
          title: 'Thói quen',
          tabBarIcon: () => '✅',
        }}
      />
      <Tabs.Screen
        name="stats"
        options={{
          title: 'Thống kê',
          tabBarIcon: () => '📊',
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Cá nhân',
          tabBarIcon: () => '👤',
        }}
      />
    </Tabs>
  );
}
