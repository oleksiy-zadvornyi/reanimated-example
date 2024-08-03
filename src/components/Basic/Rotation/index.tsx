import React from 'react';
import {Button, View} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import {getStyle} from './style';

const Rotation = () => {
  const styles = getStyle();
  const rotation = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{rotate: `${rotation.value}deg`}],
    };
  });

  const rotate = () => {
    rotation.value = withTiming(rotation.value + 90, {duration: 500});
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, animatedStyle]} />
      <Button title="Rotate" onPress={rotate} />
    </View>
  );
};

export default Rotation;
