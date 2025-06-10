// app/_layout.jsx
import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="LoginPage" />
      <Stack.Screen name="SignupPage" />
      <Stack.Screen name="DashBoard" />
      <Stack.Screen name="MoreInfo" />
    </Stack>
  );
}
