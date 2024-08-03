import React from 'react';
import {Button, View} from 'react-native';
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import {getStyle} from './style';

const Interpolation = () => {
  const styles = getStyle();
  // Создаем анимируемую переменную для прогресса анимации
  const progress = useSharedValue(0);

  // Определяем анимированный стиль для изменения масштаба и цвета
  const animatedStyle = useAnimatedStyle(() => {
    // Масштаб изменяется в зависимости от значения progress
    const scale = withTiming(progress.value === 1 ? 1.5 : 1, {duration: 1000});

    // Плавная интерполяция цвета
    const backgroundColor = interpolateColor(
      progress.value,
      [0, 1],
      ['#0000FF', '#FF0000'],
    );

    return {
      transform: [{scale}],
      backgroundColor,
    };
  });

  // Функция для переключения состояния анимации
  const toggleAnimation = () => {
    // Переключаем значение progress между 0 и 1
    progress.value = withTiming(progress.value === 0 ? 1 : 0, {duration: 1000});
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, animatedStyle]} />
      <Button title="Toggle Animation" onPress={toggleAnimation} />
    </View>
  );
};

export default Interpolation;
