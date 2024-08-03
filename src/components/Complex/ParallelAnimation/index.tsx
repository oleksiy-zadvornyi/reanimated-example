import React from 'react';
import {Button, View} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import {getStyle} from './style';

const ParallelAnimation = () => {
  const styles = getStyle();
  // Создаем анимируемые переменные для осей X и Y
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  // Определяем анимированный стиль
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: translateX.value},
        {translateY: translateY.value},
      ],
    };
  });

  // Функция для запуска параллельных анимаций
  const startParallel = () => {
    // Анимация перемещения по оси X
    translateX.value = withTiming(100, {duration: 500});
    // Анимация перемещения по оси Y
    translateY.value = withTiming(100, {duration: 500});
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, animatedStyle]} />
      <Button title="Start Parallel" onPress={startParallel} />
    </View>
  );
};

export default ParallelAnimation;
