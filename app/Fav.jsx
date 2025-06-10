import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Pressable } from 'react-native';
import styles from '../styles/Fav.styles';
import { useRouter } from 'expo-router';

const favoriteJobs = [
  {
    id: 1,
    company: 'Tech Corp',
    image: require('../assets/PWD.png'),
    skills: ['React', 'Node.js'],
    info: 'Frontend Developer role available for immediate hire.',
  },
  {
    id: 2,
    company: 'Cloudify',
    image: require('../assets/PWD.png'),
    skills: ['AWS', 'SQL'],
    info: 'Looking for a Cloud Engineer with SQL experience.',
  },
];

const Fav = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <Pressable
        onPress={() => router.push('/DashBoard')}
        style={({ pressed }) => [
          styles.backButton,
          pressed && { opacity: 0.7, transform: [{ scale: 0.96 }] },
        ]}
      >
        <Text style={styles.backText}>← Back</Text>
      </Pressable>

      <Text style={styles.header}>LIKED JOBS</Text>
      <ScrollView contentContainerStyle={styles.list}>
        {favoriteJobs.map((job) => (
          <View key={job.id} style={styles.card}>
            <Image source={job.image} style={styles.image} />
            <Text style={styles.companyName}>{job.company}</Text>
            <View style={styles.skillContainer}>
              {job.skills.map((skill, index) => (
                <View key={index} style={styles.skillTag}>
                  <Text style={styles.skillText}>{skill}</Text>
                </View>
              ))}
            </View>
            <Text style={styles.infoText}>{job.info}</Text>
            <TouchableOpacity style={styles.removeButton}>
              <Text style={styles.removeButtonText}>Remove from Favorites</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Fav;
