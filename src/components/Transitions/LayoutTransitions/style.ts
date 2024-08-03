import {Dimensions, StyleSheet} from 'react-native';

const width = Dimensions.get('screen').width;

export const getStyle = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    box: {
      width: width * 0.5,
      height: width * 0.5,
      backgroundColor: 'blue',
    },
    expandedBox: {
      width: width * 0.7,
      height: width * 0.7,
    },
  });

  return styles;
};
