import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Image,
  Pressable,
  Alert,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import styles from '../styles/Main.styles';
import { useRouter } from 'expo-router';

const EmployeeInfoForm = () => {
  const router = useRouter();

  const [skills, setSkills] = useState([]);
  const [profileImage, setProfileImage] = useState(null);
  const [pwdFront, setPwdFront] = useState(null);
  const [pwdBack, setPwdBack] = useState(null);

  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    contactNumber: '',
    email: '',
    education: '',
    experience: '',
    bio: '',
    expectedSalaryMin: '',
    expectedSalaryMax: '',
    disabilityType: '',
  });

  const handleChange = (key, value) => setFormData({ ...formData, [key]: value });

  const handleSkillSubmit = (e) => {
    const newSkill = e.nativeEvent.text.trim();
    if (newSkill !== '' && !skills.includes(newSkill)) {
      setSkills([...skills, newSkill]);
    }
  };

  const removeSkill = (index) => setSkills(skills.filter((_, i) => i !== index));

  const pickImage = async (setImage) => {
    Alert.alert(
      'Select Image Source',
      'Choose where to get the image from:',
      [
        {
          text: 'Camera',
          onPress: async () => {
            const cameraPerm = await ImagePicker.requestCameraPermissionsAsync();
            if (!cameraPerm.granted) {
              alert('Camera permission is required.');
              return;
            }
            const result = await ImagePicker.launchCameraAsync({
              allowsEditing: true,
              quality: 1,
            });
            if (!result.canceled && result.assets?.length > 0) {
              setImage(result.assets[0].uri);
            }
          },
        },
        {
          text: 'Gallery',
          onPress: async () => {
            const result = await ImagePicker.launchImageLibraryAsync({
              mediaTypes: ImagePicker.MediaTypeOptions.Images,
              allowsEditing: true,
              quality: 1,
            });
            if (!result.canceled && result.assets?.length > 0) {
              setImage(result.assets[0].uri);
            }
          },
        },
        { text: 'Cancel', style: 'cancel' },
      ]
    );
  };

  const handleSubmit = () => {
    const data = {
      ...formData,
      skills,
      images: {
        profileImage,
        pwdFront,
        pwdBack,
      },
    };

    setFormData({
      fullName: '',
      address: '',
      contactNumber: '',
      email: '',
      education: '',
      experience: '',
      bio: '',
      expectedSalaryMin: '',
      expectedSalaryMax: '',
      disabilityType: '',
    });
    setSkills([]);
    setProfileImage(null);
    setPwdFront(null);
    setPwdBack(null);

    router.push('/LoginPage');
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 40 }} keyboardShouldPersistTaps="handled">
        <View style={styles.container}>
          <View style={styles.card}>
            <Text style={styles.title}>More Information</Text>

            <Text style={styles.label}>Full Name</Text>
            <TextInput
              placeholder="Enter full name"
              value={formData.fullName}
              onChangeText={(text) => handleChange('fullName', text)}
              style={styles.input}
            />

            <Text style={styles.label}>Profile Image</Text>
            <TouchableOpacity onPress={() => pickImage(setProfileImage)} style={styles.button}>
              <Text style={styles.buttonText}>Upload or Take a Photo</Text>
            </TouchableOpacity>
            {profileImage && (
              <Image source={{ uri: profileImage }} style={{ width: 100, height: 100, marginTop: 10, borderRadius: 10 }} />
            )}

            {[
              { label: 'Address', key: 'address' },
              { label: 'Contact Number', key: 'contactNumber' },
              { label: 'Email Address', key: 'email' },
              { label: 'Educational Background', key: 'education' },
              { label: 'Work Experience', key: 'experience' },
            ].map((input) => (
              <View key={input.key}>
                <Text style={styles.label}>{input.label}</Text>
                <TextInput
                  placeholder={`Enter ${input.label.toLowerCase()}`}
                  value={formData[input.key]}
                  onChangeText={(text) => handleChange(input.key, text)}
                  style={styles.input}
                />
              </View>
            ))}

            <Text style={styles.label}>Short Bio</Text>
            <TextInput
              placeholder="Tell us about yourself"
              value={formData.bio}
              onChangeText={(text) => handleChange('bio', text)}
              multiline
              numberOfLines={4}
              style={[styles.input, { height: 100, textAlignVertical: 'top' }]}
            />

            <Text style={styles.label}>PWD ID (Front)</Text>
            <TouchableOpacity onPress={() => pickImage(setPwdFront)} style={styles.button}>
              <Text style={styles.buttonText}>Upload or Take a Photo</Text>
            </TouchableOpacity>
            {pwdFront && (
              <Image source={{ uri: pwdFront }} style={{ width: 100, height: 100, marginTop: 10, borderRadius: 10 }} />
            )}

            <Text style={styles.label}>PWD ID (Back)</Text>
            <TouchableOpacity onPress={() => pickImage(setPwdBack)} style={styles.button}>
              <Text style={styles.buttonText}>Upload or Take a Photo</Text>
            </TouchableOpacity>
            {pwdBack && (
              <Image source={{ uri: pwdBack }} style={{ width: 100, height: 100, marginTop: 10, borderRadius: 10 }} />
            )}

            <Text style={styles.label}>Type of Disability</Text>
            <TextInput
              placeholder="e.g., Visual, Hearing, Physical"
              value={formData.disabilityType}
              onChangeText={(text) => handleChange('disabilityType', text)}
              style={styles.input}
            />

            <Text style={[styles.label, { marginTop: 20 }]}>Skills</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'flex-end', marginBottom: 10 }}>
              {skills.map((skill, i) => (
                <View
                  key={i}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    margin: 4,
                    backgroundColor: '#f0f0f0',
                    paddingHorizontal: 10,
                    paddingVertical: 6,
                    borderRadius: 20,
                  }}
                >
                  <Text>{skill}</Text>
                  <TouchableOpacity onPress={() => removeSkill(i)}>
                    <Text style={{ color: 'red', marginLeft: 6 }}>×</Text>
                  </TouchableOpacity>
                </View>
              ))}
            </View>
            <TextInput
              placeholder="Add a skill and press enter"
              onSubmitEditing={handleSkillSubmit}
              style={[styles.input, { width: '100%' }]}
            />

            <Pressable style={({ pressed }) => [pressed && { transform: [{ scale: 0.96 }], opacity: 0.8 }]}>
              <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                <Text style={styles.buttonText}>REGISTER</Text>
              </TouchableOpacity>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default EmployeeInfoForm;
