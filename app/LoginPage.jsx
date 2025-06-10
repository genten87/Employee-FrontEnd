import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import styles from '../styles/Main.styles'; // Unified styles
import { useRouter } from 'expo-router';

const SignIn = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    console.log('Signing in with:', email, password);
    router.push('/DashBoard'); // Navigate after successful sign-in
  };

  return (
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
        <View style={styles.container}>
          <Text style={styles.title}>WELCOME BACK!!</Text>

          <View style={styles.card}>
            <TextInput
              placeholder="e.g . example@email.com"
              value={email}
              onChangeText={setEmail}
              style={styles.input}
            />
            <TextInput
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              style={styles.input}
            />

            <Pressable
              onPress={handleSignIn}
              style={({ pressed }) => [
                styles.button,
                  pressed && { transform: [{ scale: 0.96 }], opacity: 0.8 }]}
              
            >
              <Text style={styles.buttonText}>Sign In</Text>
            </Pressable>

            <Pressable
              onPress={() => router.push('/SignupPage')}
              style={({ pressed }) => [
                  pressed && { transform: [{ scale: 0.96 }], opacity: 0.8 }]}
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
