import {StyleSheet} from 'react-native';

export const getStyle = () => {
  const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      paddingVertical: 20,
    },
    line: {
      width: '100%',
      height: 1,
      backgroundColor: 'black',
      marginVertical: 12,
    },
    text: {
      textAlign: 'center',
      fontSize: 20,
      lineHeight: 27,
      fontWeight: '600',
      paddingBottom: 12,
    },
  });

  return styles;
};
