import {StyleSheet} from 'react-native';

export const getStyle = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      width: 200,
      height: 200,
    },
    text: {
      marginTop: 20,
      fontSize: 18,
      color: 'black',
    },
  });

  return styles;
};
