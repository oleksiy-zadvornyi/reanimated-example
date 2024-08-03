import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import {
  Accordion,
  DecayAnimation,
  Delay,
  Interpolation,
  LayoutTransitions,
  Opacity,
  PanGesture,
  ParallelAnimation,
  PinchGesture,
  Repeat,
  Rotation,
  RotationGesture,
  Scaling,
  SequenceAnimation,
  SpringAnimation,
  SvgAnimation,
  TapGesture,
  Translation,
  Worklet,
} from '@/components';
import * as screen from '@/screens';
import {StackParamList} from '@/types/navigation';

const Stack = createStackNavigator<StackParamList>();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={screen.Home} />
        <Stack.Screen name="Opacity" component={Opacity} />
        <Stack.Screen name="Rotation" component={Rotation} />
        <Stack.Screen name="Scaling" component={Scaling} />
        <Stack.Screen name="Translation" component={Translation} />
        <Stack.Screen name="SpringAnimation" component={SpringAnimation} />
        <Stack.Screen name="DecayAnimation" component={DecayAnimation} />
        <Stack.Screen name="SequenceAnimation" component={SequenceAnimation} />
        <Stack.Screen name="ParallelAnimation" component={ParallelAnimation} />
        <Stack.Screen name="PanGesture" component={PanGesture} />
        <Stack.Screen name="PinchGesture" component={PinchGesture} />
        <Stack.Screen name="RotationGesture" component={RotationGesture} />
        <Stack.Screen name="TapGesture" component={TapGesture} />
        <Stack.Screen name="LayoutTransitions" component={LayoutTransitions} />
        <Stack.Screen name="Interpolation" component={Interpolation} />
        <Stack.Screen name="Delay" component={Delay} />
        <Stack.Screen name="Repeat" component={Repeat} />
        <Stack.Screen name="Worklet" component={Worklet} />
        <Stack.Screen name="SvgAnimation" component={SvgAnimation} />
        <Stack.Screen name="Accordion" component={Accordion} />
        <Stack.Screen
          name="SharedElementFirst"
          component={screen.SharedElementFirst}
        />
        <Stack.Screen
          name="SharedElementSecond"
          component={screen.SharedElementSecond}
          options={{
            cardStyleInterpolator: ({current: {progress}}) => {
              return {
                cardStyle: {
                  opacity: progress,
                },
              };
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
