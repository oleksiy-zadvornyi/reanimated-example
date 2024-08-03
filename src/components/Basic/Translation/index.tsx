import React from 'react';
import {Button, View} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import {getStyle} from './style';

const Translation = () => {
  const styles = getStyle();
  const translateX = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: translateX.value}],
    };
  });

  const moveRight = () => {
    translateX.value = withTiming(100, {duration: 500});
  };

  const moveLeft = () => {
    translateX.value = withTiming(0, {duration: 500});
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, animatedStyle]} />
      <View>
        <Button title="Move Right" onPress={moveRight} />
        <Button title="Move Left" onPress={moveLeft} />
      </View>
    </View>
  );
};

export default Translation;
