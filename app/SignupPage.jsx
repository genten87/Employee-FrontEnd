import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import styles from '../styles/Main.styles'; // Using the unified styles file
import { useRouter } from 'expo-router';

const SignUp = () => {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    if (!name || !email || !password) {
      alert('Please fill all fields');
      return;
    }
    console.log('Registering:', name, email, password);
    router.push({
      pathname: '/MoreInfo',
      params: { name, email, password },
    });
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
        
        <Text style={styles.title}>Sign Up</Text>

        <View style={styles.card}>
          <TextInput
            placeholder="Full Name"
            value={name}
            onChangeText={setName}
            style={styles.input}
            autoCapitalize="words"
          />
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            style={styles.input}
          />

          <Pressable
            onPress={() => router.push('/MoreInfo')}
            style={({ pressed }) => [
              styles.button,
              pressed && { transform: [{ scale: 0.96 }], opacity: 0.8 },
            ]}
          >
            <Text style={styles.buttonText}>Sign Up</Text>
          </Pressable>

          <Pressable
            onPress={() => router.push('/LoginPage')}
            style={({ pressed }) => [
              pressed && { transform: [{ scale: 0.96 }], opacity: 0.8 },
            ]}
          >
            <Text style={{ marginTop: 10, color: '#888' }}>
              Already have an account? Sign In
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignUp;
