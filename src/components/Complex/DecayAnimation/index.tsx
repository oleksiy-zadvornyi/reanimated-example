import React from 'react';
import {Button, View} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDecay,
  withSpring,
} from 'react-native-reanimated';

import {getStyle} from './style';

const DecayAnimation = () => {
  const styles = getStyle();
  // Создаем анимируемую переменную для оси X
  const translateX = useSharedValue(0);

  // Определяем анимированный стиль
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: translateX.value}],
    };
  });

  // Функция для запуска анимации затухания
  const startDecay = () => {
    // Начальное значение и скорость затухания
    translateX.value = withDecay({
      velocity: 1500, // начальная скорость
      deceleration: 0.998, // параметр замедления, можно настроить
    });
  };

  // Функция для возврата элемента в начальную позицию
  const resetPosition = () => {
    translateX.value = withSpring(0);
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, animatedStyle]} />
      <View>
        <Button title="Start Decay" onPress={startDecay} />
        <Button title="Reset Position" onPress={resetPosition} />
      </View>
    </View>
  );
};

export default DecayAnimation;
