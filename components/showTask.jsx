import { useState } from 'react'
import { KeyboardAvoidingView, TextInput, TouchableOpacity, View,Text } from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import { styles } from '../style';

function ShowTask(props) {
   
  return (
    <View style={styles.TaskCotainer}>
        <View>
        <Text >{props.index}</Text>
        </View>
        <View>
        <Text >{props.task}</Text>
        </View>
        <TouchableOpacity onPress={()=>{props.deleteTask(props.index-1)}}>
            <MaterialIcons name="delete" size={25} color={'red'} />
        </TouchableOpacity>
    </View>
    

  )
}

export default ShowTask
