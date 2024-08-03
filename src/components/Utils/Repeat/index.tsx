import React from 'react';
import {Button, View} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

import {getStyle} from './style';

const Repeat = () => {
  const styles = getStyle();
  const translateY = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: translateY.value}],
    };
  });

  const startAnimation = () => {
    translateY.value = withRepeat(withTiming(-100, {duration: 500}), -1, true);
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, animatedStyle]} />
      <Button title="Start Animation" onPress={startAnimation} />
    </View>
  );
};

export default Repeat;
