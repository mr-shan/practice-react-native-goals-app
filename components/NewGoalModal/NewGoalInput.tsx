import { StyleSheet, Keyboard, View, TextInput } from 'react-native';
import { useState } from 'react';

import Button from '../Buttons/Button';

import type { IGoal } from '../../types/index';

interface IProps {
  onAddNewGoal: (goal: IGoal) => void
}

const NewGoalInput = (props: IProps) => {
  const [goalInput, setGoalInput] = useState('');

  const goalInputHandler = (enteredText: string) => {
    setGoalInput(enteredText);
  };
  const addGoalHandler = () => {
    if (goalInput.trim() === '') return;
    const newGoal = goalInput.trim();
    props.onAddNewGoal({
      title: newGoal,
      id: Date.now().toString()
    })
    setGoalInput('');
    Keyboard.dismiss()
  };
  return (
    <View style={styles.form}>
      <TextInput
        placeholder='Add new goal here'
        onChangeText={goalInputHandler}
        style={styles.textInput}
        value={goalInput}
      />
      <Button
        title='Add'
        onPress={addGoalHandler}
        variant='text'
        disabled={goalInput.trim() === ''}
      />
    </View>
  );
}

export default NewGoalInput

const styles = StyleSheet.create({
  form: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    gap: 10,
    marginHorizontal: 5,
  },
  textInput: {
    flex: 1,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 18,
  },
});
