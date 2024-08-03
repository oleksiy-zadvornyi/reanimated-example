import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {SharedElement} from 'react-native-shared-element';

import {SharedElementFirstProps} from '@/types/navigation';

import {getStyle} from './style';

const SharedElementFirst = (props: SharedElementFirstProps) => {
  const styles = getStyle();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('SharedElementSecond')}>
        <SharedElement id="item.image" onNode={() => {}}>
          <Image
            source={{uri: 'https://picsum.photos/200'}}
            style={styles.image}
          />
        </SharedElement>
        <Text style={styles.text}>Go to Details</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SharedElementFirst;
