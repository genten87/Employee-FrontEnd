// LoginPage.jsx
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import styles from '../styles/Main.styles'; // Using unified styles
import { useRouter } from 'expo-router';

const SignIn = () => {
  const router = useRouter();

  // Form states
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Handle sign-in logic
  const handleSignIn = () => {
    console.log('Signing in with:', email, password);

    // 📌 Placeholder for API call to authenticate user
    /*
    fetch('https://your-api.com/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          router.push('/DashBoard');
        } else {
          alert('Login failed');
        }
      })
      .catch(error => console.error(error));
    */

    // Temporary navigation to Dashboard (simulate login success)
    router.push('/DashBoard');
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.container}>
          {/* Header Title */}
          <Text style={styles.title}>WELCOME BACK!!</Text>

          {/* Card Container for Form */}
          <View style={styles.card}>
            {/* Email Input */}
            <TextInput
              placeholder="e.g . example@email.com"
              value={email}
              onChangeText={setEmail}
              style={styles.input}
              keyboardType="email-address"
              autoCapitalize="none"
            />

            {/* Password Input */}
            <TextInput
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              style={styles.input}
            />

            {/* Sign In Button */}
            <Pressable
              onPress={handleSignIn}
              style={({ pressed }) => [
                styles.button,
                pressed && { transform: [{ scale: 0.96 }], opacity: 0.8 },
              ]}
            >
              <Text style={styles.buttonText}>Sign In</Text>
            </Pressable>

            {/* Link to Sign Up */}
            <Pressable
              onPress={() => router.push('/SignupPage')}
              style={({ pressed }) => [
                pressed && { transform: [{ scale: 0.96 }], opacity: 0.8 },
              ]}
            >
              <Text style={{ marginTop: 10, color: '#888' }}>
                Don't have an account? Sign Up
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignIn;
