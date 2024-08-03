import React from 'react';
import {View} from 'react-native';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

import {getStyle} from './style';

const PinchGesture = () => {
  const styles = getStyle();
  // Создаем анимируемую переменную для отслеживания масштаба
  const scale = useSharedValue(1);

  // Определяем анимированный стиль, который будет применяться к элементу
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: scale.value}],
    };
  });

  // Создаем обработчик жестов сжатия (масштабирование)
  const pinchGesture = Gesture.Pinch()
    .onUpdate(event => {
      // Обновление значения масштаба при изменении жеста
      scale.value = event.scale;
    })
    .onEnd(() => {
      // Возвращение масштаба к исходному значению при завершении жеста
      scale.value = withSpring(1);
    });

  return (
    <View style={styles.container}>
      <GestureDetector gesture={pinchGesture}>
        <Animated.View style={[styles.box, animatedStyle]} />
      </GestureDetector>
    </View>
  );
};

export default PinchGesture;
