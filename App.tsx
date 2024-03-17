import { StyleSheet, View } from 'react-native';
import { useState } from 'react';

import Header from './components/Header/Header';
import GoalsList from './components/GoalsList/GoalsList';
import NewGoalInput from './components/NewGoalModal/NewGoalInput';
import NewGoalModal from './components/NewGoalModal/NewGoalModal';
import Button from './components/Buttons/Button';

import type { IGoal } from './types';

export default function App() {
  const [goalsList, setGoalsList] = useState<IGoal[]>([
    { id: Date.now().toString() + 1, title: 'Complete React Native course' },
    { id: Date.now().toString() + 3, title: 'Get AWS certified' },
    { id: Date.now().toString() + 4, title: 'Explore Python in deep' },
    { id: Date.now().toString() + 5, title: 'Complete Node.js Udemy course' },
    { id: Date.now().toString() + 6, title: 'Learn GraphQL in depth' },
  ]);
  const [showModal, setShowModal] = useState(false);
  const addGoalHandler = (goal: IGoal) => {
    setGoalsList((currentGoals) => [...currentGoals, goal]);
  };
  const deleteGoalHandler = (id: string) => {
    setGoalsList((oldList) => oldList.filter((item) => item.id !== id));
  };
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.body}>
        <NewGoalInput onAddNewGoal={addGoalHandler} />
        <GoalsList goals={goalsList} onDelete={deleteGoalHandler} />
      </View>
      <View style={{ padding: 14 }}>
        <Button
          title='Add New Goal'
          variant='primary'
          onPress={() => setShowModal(true)}
        />
      </View>
      <NewGoalModal
        isVisible={showModal}
        onAddGoal={addGoalHandler}
        onClose={() => setShowModal(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 20,
  },
  body: {
    padding: 10,
    marginTop: 10,
    flex: 1,
  },
});
