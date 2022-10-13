import { useState } from 'react'
import { KeyboardAvoidingView, TextInput, TouchableOpacity, View } from 'react-native';
// import {MaterialIcons} from '@expo/vector-icons';
import { styles } from '../style';

function AddTask(props) {
    const [task,setTask]=useState();
    const addTask=()=>{
        props.addTask(task);
        setTask("");
        }
  return (
    <KeyboardAvoidingView style={styles.taskInputContainer}>
      <TextInput style={styles.input} placeholder={"Enter Your Task Here!"} value={task} onChangeText={(txt)=>{setTask(txt)}}/>
      <TouchableOpacity style={styles.btn}>
        <MaterialIcons name="keyboard-arrow-down" color={'black'} size={22} onPress={()=>addTask()}></MaterialIcons>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  )
}

export default AddTask
