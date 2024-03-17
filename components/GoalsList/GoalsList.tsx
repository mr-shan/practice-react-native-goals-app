import { View, Text, FlatList, StyleSheet } from 'react-native';

import GoalItem from './GoalItem';
import type { IGoal } from '../../types';

interface IProps {
  goals: IGoal[];
  onDelete: (id: string) => void;
}

const GoalsList = (props: IProps) => {
  const onDeleteItemHandler = (id: string) => {
    props.onDelete(id);
  };
  return (
    <View style={styles.listOfGoals}>
      <Text style={styles.goalListHeader}>All Goals</Text>
      <FlatList
        data={props.goals}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => (
          <GoalItem
            title={itemData.item.title}
            onDelete={onDeleteItemHandler.bind(this, itemData.item.id)}
          />
        )}
      />
    </View>
  );
};

export default GoalsList;

const styles = StyleSheet.create({
  listOfGoals: {
    marginTop: 10,
    flex: 1,
  },
  goalListHeader: {
    textAlign: 'center',
    paddingTop: 5,
    paddingBottom: 12,
    fontSize: 16,
    color: '#666',
  },
  goalItemWrapper: {
    backgroundColor: '#eee',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 14,
    marginBottom: 10,
    marginHorizontal: 5,
  },
  goalItemText: {
    color: '#111',
    fontSize: 18,
  },
});
