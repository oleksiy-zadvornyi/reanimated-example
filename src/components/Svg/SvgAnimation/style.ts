import {Dimensions, StyleSheet} from 'react-native';

const width = Dimensions.get('screen').width;

export const getStyle = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    box: {
      width: width * 0.5,
      height: width * 0.5,
      backgroundColor: 'blue',
    },
    text: {
      marginTop: 20,
      fontSize: 18,
      color: 'black',
    },
  });

  return styles;
};
