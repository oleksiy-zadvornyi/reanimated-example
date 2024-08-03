import React from 'react';
import {View} from 'react-native';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

import {getStyle} from './style';

const TapGesture = () => {
  const styles = getStyle();
  // Создаем анимируемую переменную для отслеживания масштаба
  const scale = useSharedValue(1);

  // Определяем анимированный стиль, который будет применяться к элементу
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: scale.value}],
    };
  });

  // Создаем обработчик жестов нажатия
  const tapGesture = Gesture.Tap()
    .onStart(() => {
      // Увеличиваем масштаб при нажатии
      scale.value = withSpring(1.5);
    })
    .onEnd(() => {
      // Возвращаем масштаб к исходному значению при завершении жеста
      scale.value = withSpring(1);
    });

  return (
    <View style={styles.container}>
      <GestureDetector gesture={tapGesture}>
        <Animated.View style={[styles.box, animatedStyle]} />
      </GestureDetector>
    </View>
  );
};

export default TapGesture;
