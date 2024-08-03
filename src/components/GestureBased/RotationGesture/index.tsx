import React from 'react';
import {View} from 'react-native';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

import {getStyle} from './style';

const RotationGesture = () => {
  const styles = getStyle();
  // Создаем анимируемую переменную для отслеживания угла вращения
  const rotation = useSharedValue(0);

  // Определяем анимированный стиль, который будет применяться к элементу
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{rotate: `${rotation.value}rad`}],
    };
  });

  // Создаем обработчик жестов вращения
  const rotationGesture = Gesture.Rotation()
    .onUpdate(event => {
      // Обновляем значение угла вращения при изменении жеста
      rotation.value = event.rotation;
    })
    .onEnd(() => {
      // Возвращаем угол вращения к исходному значению при завершении жеста
      rotation.value = withSpring(0);
    });

  return (
    <View style={styles.container}>
      <GestureDetector gesture={rotationGesture}>
        <Animated.View style={[styles.box, animatedStyle]} />
      </GestureDetector>
    </View>
  );
};

export default RotationGesture;
