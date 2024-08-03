import React from 'react';
import {View} from 'react-native';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

import {getStyle} from './style';

const PanGesture = () => {
  const styles = getStyle();
  // Создаем анимируемые переменные для отслеживания перемещений по осям X и Y
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  // Определяем анимированный стиль, который будет применяться к элементу
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: translateX.value},
        {translateY: translateY.value},
      ],
    };
  });

  // Создаем обработчик жестов перетаскивания (панорамирование)
  const panGesture = Gesture.Pan()
    .onBegin(() => {
      // Инициализация значений при начале жеста
      translateX.value = 0;
      translateY.value = 0;
    })
    .onUpdate(event => {
      // Обновление значений перемещения при движении пальца
      translateX.value = event.translationX;
      translateY.value = event.translationY;
    })
    .onEnd(() => {
      // Возвращение элемента в исходное положение при завершении жеста
      translateX.value = withSpring(0);
      translateY.value = withSpring(0);
    });

  return (
    <View style={styles.container}>
      {/* Оборачиваем анимируемый элемент в GestureDetector для отслеживания жестов */}
      <GestureDetector gesture={panGesture}>
        <Animated.View style={[styles.box, animatedStyle]} />
      </GestureDetector>
    </View>
  );
};

export default PanGesture;
