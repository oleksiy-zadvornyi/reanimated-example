import {StackScreenProps} from '@react-navigation/stack';

export type StackParamList = {
  Home: undefined;
  Opacity: undefined;
  Rotation: undefined;
  Scaling: undefined;
  Translation: undefined;
  SpringAnimation: undefined;
  DecayAnimation: undefined;
  SequenceAnimation: undefined;
  ParallelAnimation: undefined;
  PanGesture: undefined;
  PinchGesture: undefined;
  RotationGesture: undefined;
  TapGesture: undefined;
  SharedElementFirst: undefined;
  SharedElementSecond: undefined;
  LayoutTransitions: undefined;
  Interpolation: undefined;
  Delay: undefined;
  Repeat: undefined;
  Worklet: undefined;
  SvgAnimation: undefined;
  Accordion: undefined;
};

export type HomeProps = StackScreenProps<StackParamList, 'Home'>;

export type SharedElementFirstProps = StackScreenProps<
  StackParamList,
  'SharedElementFirst'
>;
export type SharedElementSecondProps = StackScreenProps<
  StackParamList,
  'SharedElementSecond'
>;
