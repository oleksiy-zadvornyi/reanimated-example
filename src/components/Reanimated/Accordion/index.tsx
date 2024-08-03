import React from 'react';
import {Button, SafeAreaView, View} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import {getStyle} from './style';

const Accordion = () => {
  const styles = getStyle();
  const open = useSharedValue(false);
  const height = useSharedValue(0);

  const derivedHeight = useDerivedValue(() =>
    withTiming(height.value * Number(open.value), {
      duration: 500,
    }),
  );
  const bodyStyle = useAnimatedStyle(() => ({
    height: derivedHeight.value,
  }));

  const onPress = () => {
    open.value = !open.value;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button onPress={onPress} title="Click me" />
      </View>

      <View style={styles.content}>
        <View style={styles.parent}>
          <Animated.View style={[styles.animatedView, bodyStyle]}>
            <View
              onLayout={e => {
                height.value = e.nativeEvent.layout.height;
              }}
              style={styles.wrapper}>
              <View style={styles.box} />
            </View>
          </Animated.View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Accordion;
