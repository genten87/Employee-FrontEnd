import React from 'react';
import { View, Text, Image, TouchableOpacity, Pressable } from 'react-native';
import styles from '../styles/DashBoard.style';
import { useRouter } from 'expo-router';

const skills = ['React', 'Node', 'UI/UX', 'SQL', 'AWS'];

const DashBoard = () => {
  const router = useRouter(); // ✅ Initialize router here

  return (
    <View style={styles.container}>
      {/* Centered Card Wrapper */}
      <View style={styles.cardWrapper}>
        <View style={styles.card}>
          <Image
            source={require('../assets/PWD.png')}
            style={styles.companyImage}
          />

          <Text style={styles.companyName}>Company Name</Text>
          <Text style={styles.skillsLabel}>Skills Needed</Text>

          {/* Skill Circles */}
          <View style={styles.skillContainer}>
            {skills.map((skill, index) => (
              <TouchableOpacity key={index} style={styles.skillTag}>
                <Text style={styles.skillText}>{skill}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <Text style={styles.basicInfoLabel}>Basic Information</Text>
          <Text style={styles.infoText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nec metus ut purus...
          </Text>
        </View>
      </View>

      {/* Swipe Buttons */}
      <View style={styles.buttonRow}>
        <TouchableOpacity style={[styles.circleButton, styles.rejectButton]}>
          <Text style={styles.buttonText}>✘</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.circleButton, styles.acceptButton]}>
          <Text style={styles.buttonText}>❤</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Navigation */}
      <View style={styles.navBar}>
        <Pressable
          onPress={() => router.push('/Fav')}
          style={({ pressed }) => [
            styles.navItem,
            pressed && { transform: [{ scale: 0.96 }], opacity: 0.8 },
          ]}
        >
          <Text>★</Text>
        </Pressable>
        <Pressable onPress={() => router.push('/Chats')}
          style={({ pressed }) => [
            styles.navItem,
            pressed && { transform: [{ scale: 0.96 }], opacity: 0.8 },
          ]}> 
          <Text>👥</Text>
          </Pressable>
        


        <TouchableOpacity style={styles.navItem}><Text>🏠</Text></TouchableOpacity>
        <TouchableOpacity style={styles.navItem}><Text>≡</Text></TouchableOpacity>
      </View>
    </View>
  );
};

export default DashBoard;
