import React from 'react';
import {Button, View} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

import {getStyle} from './style';

const SpringAnimation = () => {
  const styles = getStyle();
  // Создаем анимируемую переменную для оси Y
  const translateY = useSharedValue(0);

  // Определяем анимированный стиль
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: translateY.value}],
    };
  });

  // Функция для поднятия элемента с пружинной анимацией
  const springUp = () => {
    translateY.value = withSpring(-100);
  };

  // Функция для опускания элемента с пружинной анимацией
  const springDown = () => {
    translateY.value = withSpring(0);
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, animatedStyle]} />
      <View>
        <Button title="Spring Up" onPress={springUp} />
        <Button title="Spring Down" onPress={springDown} />
      </View>
    </View>
  );
};

export default SpringAnimation;
