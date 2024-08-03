import React from 'react';
import {Image, Text, View} from 'react-native';
import {SharedElement} from 'react-native-shared-element';

import {getStyle} from './style';

const SharedElementSecond = () => {
  const styles = getStyle();

  return (
    <View style={styles.container}>
      <SharedElement id="item.image" onNode={() => {}}>
        <Image
          source={{uri: 'https://picsum.photos/200'}}
          style={styles.image}
        />
      </SharedElement>
      <Text style={styles.text}>Detail Screen</Text>
    </View>
  );
};

export default SharedElementSecond;
