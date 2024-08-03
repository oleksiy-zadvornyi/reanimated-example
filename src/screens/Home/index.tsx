import React from 'react';
import {Button, ScrollView, Text, View} from 'react-native';

import {HomeProps} from '@/types/navigation';

import {getStyle} from './style';

const Home = (props: HomeProps) => {
  const styles = getStyle();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.text}>Basic</Text>
      <Button
        title="Opacity"
        onPress={() => props.navigation.navigate('Opacity')}
      />
      <Button
        title="Rotation"
        onPress={() => props.navigation.navigate('Rotation')}
      />
      <Button
        title="Scaling"
        onPress={() => props.navigation.navigate('Scaling')}
      />
      <Button
        title="Translation"
        onPress={() => props.navigation.navigate('Translation')}
      />
      <View style={styles.line} />
      <Text style={styles.text}>Complex</Text>
      <Button
        title="Spring Animation"
        onPress={() => props.navigation.navigate('SpringAnimation')}
      />
      <Button
        title="Decay Animation !!!"
        onPress={() => props.navigation.navigate('DecayAnimation')}
      />
      <Button
        title="Sequence Animation"
        onPress={() => props.navigation.navigate('SequenceAnimation')}
      />
      <Button
        title="Parallel Animation"
        onPress={() => props.navigation.navigate('ParallelAnimation')}
      />
      <View style={styles.line} />
      <Text style={styles.text}>Gesture Based</Text>
      <Button
        title="Pan Gesture"
        onPress={() => props.navigation.navigate('PanGesture')}
      />
      <Button
        title="Pinch Gesture"
        onPress={() => props.navigation.navigate('PinchGesture')}
      />
      <Button
        title="Rotation Gesture"
        onPress={() => props.navigation.navigate('RotationGesture')}
      />
      <Button
        title="Tap Gesture"
        onPress={() => props.navigation.navigate('TapGesture')}
      />
      <View style={styles.line} />
      <Text style={styles.text}>Transitions</Text>
      <Button
        title="Shared Element Transitions"
        onPress={() => props.navigation.navigate('SharedElementFirst')}
      />
      <Button
        title="Layout Transitions"
        onPress={() => props.navigation.navigate('LayoutTransitions')}
      />
      <View style={styles.line} />
      <Text style={styles.text}>Interpolations</Text>
      <Button
        title="Interpolation"
        onPress={() => props.navigation.navigate('Interpolation')}
      />
      <View style={styles.line} />
      <Text style={styles.text}>Utils</Text>
      <Button
        title="Delay"
        onPress={() => props.navigation.navigate('Delay')}
      />
      <Button
        title="Repeat"
        onPress={() => props.navigation.navigate('Repeat')}
      />
      <View style={styles.line} />
      <Text style={styles.text}>Worklet</Text>
      <Button
        title="Worklet"
        onPress={() => props.navigation.navigate('Worklet')}
      />
      <View style={styles.line} />
      <Text style={styles.text}>Svg</Text>
      <Button
        title="Svg Animation"
        onPress={() => props.navigation.navigate('SvgAnimation')}
      />
      <View style={styles.line} />
      <Text style={styles.text}>Reanimated</Text>
      <Button
        title="Accordion"
        onPress={() => props.navigation.navigate('Accordion')}
      />
    </ScrollView>
  );
};

export default Home;
