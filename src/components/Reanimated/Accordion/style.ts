import {StyleSheet} from 'react-native';

export const getStyle = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingTop: 24,
    },
    buttonContainer: {
      flex: 1,
      paddingBottom: 16,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    content: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    parent: {
      width: 200,
    },
    wrapper: {
      width: '100%',
      position: 'absolute',
      display: 'flex',
      alignItems: 'center',
    },
    animatedView: {
      width: '100%',
      overflow: 'hidden',
    },
    box: {
      height: 120,
      width: 120,
      color: '#f8f9ff',
      backgroundColor: '#b58df1',
      borderRadius: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  return styles;
};
