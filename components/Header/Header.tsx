import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text } from 'react-native';

export default () => {
  return (
    <>
      <StatusBar style='light' />
      <Text style={styles.header}>My Goals</Text>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 60,
    fontSize: 24,
    fontWeight: 'bold',
    backgroundColor: 'royalblue',
    color: 'white',
    justifyContent: 'center',
    paddingVertical: 14,
    textAlign: 'center',
    shadowColor: '#999',
    shadowOpacity: 1,
    shadowOffset: { height: 4, width: 0 },
    shadowRadius: 4,
    elevation: 10,
  },
});
