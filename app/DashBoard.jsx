import React, { useRef, useState, useCallback, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, Pressable, Animated, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import { PanGestureHandler } from 'react-native-gesture-handler';
import styles from '../styles/DashBoard.style';

const SCREEN_WIDTH = Dimensions.get('window').width;

// Sample static data (can be replaced by API response later)
const companyList = [
  {
    id: 1,
    name: 'ABC Tech Solutions',
    image: require('../assets/PWD.png'),
    skills: ['React', 'Node', 'SQL', 'AWS'],
    info: 'We are hiring full-stack developers with cloud experience.',
  },
  {
    id: 2,
    name: 'UXSoft Inc.',
    image: require('../assets/PWD.png'),
    skills: ['UI/UX', 'Figma', 'Accessibility'],
    info: 'Looking for designers passionate about inclusive design.',
  },
  // More sample entries...
];

const DashBoard = () => {
  const router = useRouter();
  const [index, setIndex] = useState(0);
  const translateX = useRef(new Animated.Value(0)).current;

  // Placeholder for dynamic data fetching in the future
  /*
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://your-api-url.com/jobs');
        const data = await response.json();
        // Replace companyList with dynamic data (you'll need to store it in state)
        console.log(data);
      } catch (error) {
        console.error('API fetch error:', error);
      }
    };

    fetchData();
  }, []);
  */

  const currentCard = companyList[index % companyList.length];

  const rotate = translateX.interpolate({
    inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
    outputRange: ['-15deg', '0deg', '15deg'],
    extrapolate: 'clamp',
  });

  const resetPosition = () => {
    Animated.spring(translateX, {
      toValue: 0,
      useNativeDriver: true,
    }).start();
  };

  const onGestureEvent = useCallback(
    Animated.event([{ nativeEvent: { translationX: translateX } }], {
      useNativeDriver: true,
    }),
    []
  );

  const onHandlerStateChange = useCallback(({ nativeEvent }) => {
    const swipeThreshold = 120;

    if (nativeEvent.state === 5) {
      if (nativeEvent.translationX > swipeThreshold) {
        Animated.timing(translateX, {
          toValue: SCREEN_WIDTH,
          duration: 200,
          useNativeDriver: true,
        }).start(() => {
          console.log('Liked'); //When swipe right (Like, This shows)
          translateX.setValue(0);
          setIndex(prev => prev + 1);
        });
      } else if (nativeEvent.translationX < -swipeThreshold) {
        Animated.timing(translateX, {
          toValue: -SCREEN_WIDTH,
          duration: 200,
          useNativeDriver: true,
        }).start(() => {
          console.log('Disliked'); //When swipe right (Like, This shows)
          translateX.setValue(0);
          setIndex(prev => prev + 1);
        });
      } else {
        resetPosition();
      }
    }
  }, []);

  return (
    <View style={styles.container}>
      {/* Swipeable Card */}
      <PanGestureHandler onGestureEvent={onGestureEvent} onHandlerStateChange={onHandlerStateChange}>
        <Animated.View style={[styles.cardWrapper, { transform: [{ translateX }, { rotate }] }]}>
          <View style={styles.card}>
            <Image source={currentCard.image} style={styles.companyImage} />
            <Text style={styles.companyName}>{currentCard.name}</Text>
            <Text style={styles.skillsLabel}>Skills Needed</Text>
            <View style={styles.skillContainer}>
              {currentCard.skills.map((skill, i) => (
                <TouchableOpacity key={i} style={styles.skillTag}>
                  <Text style={styles.skillText}>{skill}</Text>
                </TouchableOpacity>
              ))}
            </View>
            <Text style={styles.basicInfoLabel}>Basic Information</Text>
            <Text style={styles.infoText}>{currentCard.info}</Text>
          </View>
        </Animated.View>
      </PanGestureHandler>

      {/* Swipe Buttons */}
      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={[styles.circleButton, styles.rejectButton]}
          onPress={() => {
            Animated.timing(translateX, {
              toValue: -SCREEN_WIDTH,
              duration: 200,
              useNativeDriver: true,
            }).start(() => {
              translateX.setValue(0);
              setIndex(prev => prev + 1);
            });
          }}
        >
          <Text style={styles.buttonText}>✘</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.circleButton, styles.acceptButton]}
          onPress={() => {
            Animated.timing(translateX, {
              toValue: SCREEN_WIDTH,
              duration: 200,
              useNativeDriver: true,
            }).start(() => {
              translateX.setValue(0);
              setIndex(prev => prev + 1);
            });
          }}
        >
          <Text style={styles.buttonText}>❤</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Navigation */}
      <View style={styles.navBar}>
        <Pressable onPress={() => router.push('/Fav')} style={({ pressed }) => [styles.navItem, pressed && { transform: [{ scale: 0.96 }], opacity: 0.8 }]}>
          <Text>★</Text>
        </Pressable>
        <Pressable onPress={() => router.push('/inbox')} style={({ pressed }) => [styles.navItem, pressed && { transform: [{ scale: 0.96 }], opacity: 0.8 }]}>
          <Text>👥</Text>
        </Pressable>
        <TouchableOpacity style={styles.navItem}><Text>🏠</Text></TouchableOpacity>
        <TouchableOpacity style={styles.navItem}><Text>≡</Text></TouchableOpacity>
      </View>
    </View>
  );
};

export default DashBoard;
