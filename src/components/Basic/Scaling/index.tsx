import React from 'react';
import {Button, View} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import {getStyle} from './style';

const Scaling = () => {
  const styles = getStyle();
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: scale.value}],
    };
  });

  const scaleUp = () => {
    scale.value = withTiming(2, {duration: 500});
  };

  const scaleDown = () => {
    scale.value = withTiming(1, {duration: 500});
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, animatedStyle]} />
      <View>
        <Button title="Scale Up" onPress={scaleUp} />
        <Button title="Scale Down" onPress={scaleDown} />
      </View>
    </View>
  );
};

export default Scaling;
