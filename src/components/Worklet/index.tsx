import React, {useState} from 'react';
import {Text} from 'react-native';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

import {getStyle} from './style';

const Worklet = () => {
  const styles = getStyle();
  // Создаем состояние для отслеживания количества завершенных жестов
  const [gestureCount, setGestureCount] = useState(0);

  // Функция для увеличения счетчика жестов
  const incrementGestureCount = () => {
    setGestureCount(prevCount => prevCount + 1);
  };

  // Создаем анимируемые переменные для отслеживания позиции
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  // Определяем анимированный стиль для изменения положения
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: translateX.value},
        {translateY: translateY.value},
      ],
    };
  });

  // Создаем обработчик жестов с использованием Gesture API
  const panGesture = Gesture.Pan()
    .onStart(() => {
      // Сохраняем начальные значения при начале жеста
      translateX.value = 0;
      translateY.value = 0;
    })
    .onUpdate(event => {
      // Обновляем значения перемещения при движении пальца
      translateX.value = event.translationX;
      translateY.value = event.translationY;
    })
    .onEnd(() => {
      // Возвращаем элемент в исходное положение с анимацией пружины при завершении жеста
      translateX.value = withSpring(0);
      translateY.value = withSpring(0);
      // Вызываем функцию для увеличения счетчика жестов на JavaScript потоке
      runOnJS(incrementGestureCount)();
    });

  return (
    <GestureHandlerRootView style={styles.container}>
      {/* Оборачиваем анимируемый элемент в GestureDetector для отслеживания жестов */}
      <GestureDetector gesture={panGesture}>
        <Animated.View style={[styles.box, animatedStyle]} />
      </GestureDetector>
      {/* Отображаем количество завершенных жестов */}
      <Text style={styles.text}>Gesture Count: {gestureCount}</Text>
    </GestureHandlerRootView>
  );
};

export default Worklet;
