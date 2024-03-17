import { View, Text, StyleSheet, Pressable } from 'react-native';

interface IProps {
  title: string;
  onDelete: () => void;
}

const GoalItem = (props: IProps) => {
  return (
    <View style={styles.goalItemWrapper}>
      <Pressable
        onLongPress={props.onDelete}
        android_ripple={styles.pressable_ripple}
        style={(props) => props.pressed && styles.pressable_ios}
      >
        <Text style={styles.goalItemText}>{props.title}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItemWrapper: {
    backgroundColor: '#eee',
    borderRadius: 10,
    marginBottom: 10,
    marginHorizontal: 5,
    overflow: 'hidden'
  },
  goalItemText: {
    color: '#222',
    fontSize: 18,
    paddingVertical: 12,
    paddingHorizontal: 14,
  },
  pressable_ripple: { color: '#999' },
  pressable_ios: {
    opacity: 0.5,
  },
});
