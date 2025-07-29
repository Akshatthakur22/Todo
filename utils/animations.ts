import { Animated, Easing } from "react-native";

export const createFadeInAnimation = (
  value: Animated.Value,
  duration = 300
) => {
  return Animated.timing(value, {
    toValue: 1,
    duration,
    easing: Easing.out(Easing.cubic),
    useNativeDriver: true,
  });
};

export const createFadeOutAnimation = (
  value: Animated.Value,
  duration = 300
) => {
  return Animated.timing(value, {
    toValue: 0,
    duration,
    easing: Easing.in(Easing.cubic),
    useNativeDriver: true,
  });
};

export const createScaleAnimation = (
  value: Animated.Value,
  toValue = 1,
  duration = 200
) => {
  return Animated.spring(value, {
    toValue,
    friction: 8,
    tension: 100,
    useNativeDriver: true,
  });
};

export const createSlideAnimation = (
  value: Animated.Value,
  toValue = 0,
  duration = 300
) => {
  return Animated.timing(value, {
    toValue,
    duration,
    easing: Easing.out(Easing.cubic),
    useNativeDriver: true,
  });
};
