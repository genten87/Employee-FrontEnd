import React from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../styles/Main.styles'; // Assuming merged style file

const Home = () => {
  const router = useRouter();

  const handlePress = () => {
    router.push('/LoginPage');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerz}>
        <Image
          source={require('../assets/PWD.png')}
          style={styles.card1}
          resizeMode="cover"
        />
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Welcome to Pwd-E-JOB Recruitment App</Text>
        <View>
          <Pressable
            onPress={handlePress}
            style={({ pressed }) => [
              styles.button,
              pressed && { transform: [{ scale: 0.96 }], opacity: 0.8 },
            ]}
          >
            <Text style={styles.buttonText}>Continue?</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

// ✅ Hide the header
export const options = {
  headerShown: false,
};
