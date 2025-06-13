// app/_layout.jsx
import React from 'react';
import { Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="LoginPage" />
          <Stack.Screen name="SignupPage" />
          <Stack.Screen name="DashBoard" />
          <Stack.Screen name="MoreInfo" />
          <Stack.Screen name="inbox" />
        </Stack>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
