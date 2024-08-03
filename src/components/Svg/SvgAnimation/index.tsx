import React from 'react';
import {Button, View} from 'react-native';
import Animated, {
  useAnimatedProps,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import Svg, {Circle} from 'react-native-svg';

import {getStyle} from './style';

// Создаем анимированный компонент Circle с использованием Animated.createAnimatedComponent
const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const SvgAnimation = () => {
  const styles = getStyle();
  // Создаем анимируемую переменную для радиуса круга
  const radius = useSharedValue(50);

  // Определяем анимированные свойства для круга
  const animatedProps = useAnimatedProps(() => ({
    // Анимируемое свойство радиуса r круга
    r: radius.value.toString(),
  }));

  // Функция для запуска анимации изменения радиуса круга
  const animateCircle = () => {
    // Изменяем значение radius с использованием withTiming для плавной анимации
    radius.value = withTiming(radius.value === 50 ? 100 : 50, {duration: 500});
  };

  return (
    <View style={styles.container}>
      <Svg height="200" width="200" viewBox="0 0 200 200">
        {/* Анимированный круг с использованием AnimatedCircle */}
        <AnimatedCircle
          cx="100" // Центр круга по оси X
          cy="100" // Центр круга по оси Y
          fill="blue" // Цвет заполнения круга
          animatedProps={animatedProps} // Применяем анимированные свойства
        />
      </Svg>
      <Button title="Animate Circle" onPress={animateCircle} />
    </View>
  );
};

export default SvgAnimation;
