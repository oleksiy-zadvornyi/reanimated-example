import React, {useState} from 'react';
import {Button, View} from 'react-native';
import Animated, {
  BounceIn,
  BounceOut,
  LinearTransition,
} from 'react-native-reanimated';

import {getStyle} from './style';

const LayoutTransitions = () => {
  const styles = getStyle();
  const [expanded, setExpanded] = useState(false);

  return (
    <View style={styles.container}>
      <Animated.View
        entering={BounceIn} // Анимация появления
        exiting={BounceOut} // Анимация исчезновения
        layout={LinearTransition} // Анимация изменения макета
        style={[styles.box, expanded && styles.expandedBox]} // Применение стилей на основе состояния
      />
      <Button title="Toggle Expand" onPress={() => setExpanded(!expanded)} />
    </View>
  );
};

export default LayoutTransitions;
