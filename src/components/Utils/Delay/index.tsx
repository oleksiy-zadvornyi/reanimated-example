import React from 'react';
import {Button, View} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';

import {getStyle} from './style';

const Delay = () => {
  const styles = getStyle();
  const opacity = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  const toggleAnimation = () => {
    opacity.value = withDelay(
      500,
      withTiming(opacity.value === 1 ? 0 : 1, {duration: 1000}),
    );
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, animatedStyle]} />
      <Button title="Toggle Animation" onPress={toggleAnimation} />
    </View>
  );
};

export default Delay;
