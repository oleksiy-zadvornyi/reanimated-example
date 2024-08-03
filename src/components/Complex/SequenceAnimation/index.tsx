import React from 'react';
import {Button, View} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withTiming,
} from 'react-native-reanimated';

import {getStyle} from './style';

const SequenceAnimation = () => {
  const styles = getStyle();
  // Создаем анимируемую переменную для оси X
  const translateX = useSharedValue(0);

  // Определяем анимированный стиль
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: translateX.value}],
    };
  });

  // Функция для запуска последовательной анимации
  const startSequence = () => {
    translateX.value = withSequence(
      withTiming(100, {duration: 500}), // Перемещение вправо
      withTiming(-100, {duration: 500}), // Перемещение влево
      withTiming(0, {duration: 500}), // Возвращение в исходное положение
    );
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, animatedStyle]} />
      <Button title="Start Sequence" onPress={startSequence} />
    </View>
  );
};

export default SequenceAnimation;
