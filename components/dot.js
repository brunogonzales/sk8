import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

export default function Dot({ activeDotIndex, index }) {
  const rDotStyle = useAnimatedStyle(() => {
    const isActive = activeDotIndex.value === index;
    return {
      backgroundColor: withTiming(isActive ? 'black' : 'white', {
        duration: 150,
      }),
    };
  });

  return <Animated.View style={[styles.dot, rDotStyle]} />;
}

const styles = StyleSheet.create({
  dot: {
    height: 20,
    width: 20,
    backgroundColor: 'black',
    margin: 1,
    marginHorizontal: 5,
    borderRadius: 10,
    borderWidth: 1,
  },
});
