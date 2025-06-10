import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import React, { useState, useRef } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams, router } from 'expo-router';
import styles from '../styles/Chats.styles';

const ChatBubble = ({ message, time, isUser }) => (
  <View
    style={[
      styles.chatRow,
      isUser ? styles.chatUserRight : styles.chatUserLeft,
    ]}
  >
    <View
      style={[
        styles.chatBubble,
        isUser ? styles.userBubble : styles.employerBubble,
      ]}
    >
      <Text style={styles.chatText}>{message}</Text>
      <Text style={styles.chatTime}>{time}</Text>
    </View>
  </View>
);

const Chat = () => {
  const params = useLocalSearchParams();
  const [message, setMessage] = useState('');
  const scrollViewRef = useRef(null);

  const chatHistory = [
    { message: 'Hi, I saw your job posting for a UI Designer', time: '10:00 AM', isUser: true },
    { message: 'Hello! Yes, are you interested in the position?', time: '10:02 AM', isUser: false },
    { message: 'Yes, I have 3 years of experience in UI/UX design', time: '10:03 AM', isUser: true },
    { message: 'Great! Could you share your portfolio?', time: '10:05 AM', isUser: false },
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}
      >
        
          <View style={styles.scrollView}>
            <View style={styles.headerBar}>
              <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                <Text style={styles.backText}>← Back</Text>
              </TouchableOpacity>
            </View>

            <ScrollView
              ref={scrollViewRef}
              contentContainerStyle={{ paddingBottom: 12 }}
              keyboardShouldPersistTaps="handled"
              style={[styles.chatScroll, { flex: 1 }]}
              onContentSizeChange={() => scrollViewRef.current?.scrollToEnd({ animated: true })}
            >
              {chatHistory.map((chat, index) => (
                <ChatBubble key={index} {...chat} />
              ))}
            </ScrollView>

            <View style={styles.inputSection}>
              <View style={styles.inputWrapper}>
                <TextInput
                  value={message}
                  onChangeText={setMessage}
                  placeholder="Type a message..."
                  placeholderTextColor="Black"
                  style={styles.input}
                  multiline
                  onFocus={() => {
                    setTimeout(() => {
                      scrollViewRef.current?.scrollToEnd({ animated: true });
                    }, 100);
                  }}
                />
                <TouchableOpacity
                  onPress={() => {
                    if (message.trim()) {
                      console.log('Sending message:', message);
                      setMessage('');
                      setTimeout(() => {
                        scrollViewRef.current?.scrollToEnd({ animated: true });
                      }, 100);
                    }
                  }}
                  style={styles.sendButton}
                >
                  <Text style={styles.sendText}>Send</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Chat;
