import { Modal, View, TextInput, StyleSheet, Keyboard, Image } from 'react-native';
import { useState } from 'react';

import Button from '../Buttons/Button';
import { IGoal } from '../../types';

interface IProps {
  isVisible: boolean;
  onClose: () => void;
  onAddGoal: (goal: IGoal) => void;
}

const NewGoalModal = (props: IProps) => {
  const [goalInput, setGoalInput] = useState('');
  const inputChangeHandler = (text: string) => {
    setGoalInput(text);
  };
  const addGoalHandler = () => {
    if (goalInput.trim() === '') return;
    const newGoal = goalInput.trim();
    props.onAddGoal({
      title: newGoal,
      id: Date.now().toString(),
    });
    setGoalInput('');
    Keyboard.dismiss();
    props.onClose()
  };
  return (
    <Modal visible={props.isVisible} animationType='slide'>
      <View style={styles.container}>
        <Image source={require('./../../assets/target-1024x1024.png')} style={styles.image}/>
        <TextInput
          placeholder='Enter your goal'
          style={styles.textInput}
          value={goalInput}
          onChangeText={inputChangeHandler}
        />
        <View style={styles.buttons}>
          <Button title='Cancel' onPress={props.onClose} />
          <Button
            title='Add New Goal'
            onPress={addGoalHandler}
            variant='primary'
            disabled={goalInput.trim() === ''}
          />
        </View>
      </View>
    </Modal>
  );
};

export default NewGoalModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 50,
    padding: 20,
  },
  textInput: {
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 18,
    borderColor: '#ccc',
    borderRadius: 8,
    borderWidth: 2,
    width: '100%',
  },
  image: {
    height: 250,
    width: 250,
    marginBottom: 50
  },
  buttons: {
    gap: 10,
    width: '100%',
  },
});
