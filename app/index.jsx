// Home.jsx
import React from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../styles/Main.styles'; // Importing the merged style file

const Home = () => {
  const router = useRouter();

  // 📌 Placeholder: Add API call here to preload or check login status
  /*
  useEffect(() => {
    fetch('https://your-api.com/preload')
      .then(res => res.json())
      .then(data => {
        console.log('Preloaded data', data);
      })
      .catch(error => console.error(error));
  }, []);
  */

  // Navigate to LoginPage when button is pressed
  const handlePress = () => {
    router.push('/LoginPage');
  };

  return (
    <SafeAreaView style={styles.container}>
      
      {/* Logo or Intro Image */}
      <View style={styles.containerz}>
        <Image
          source={require('../assets/PWD.png')} // App Logo or Branding
          style={styles.card1}
          resizeMode="cover"
        />
      </View>

      {/* Welcome Message and Continue Button */}
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

// ✅ Disable header for this screen
export const options = {
  headerShown: false,
};
