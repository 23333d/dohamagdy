//////assignment 1//////////////
// import { StatusBar } from 'expo-status-bar';
// import { useState } from "react";
// import IInput from './Components/InputToAdd';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TextInput,
//   Button,
//   Image,
//   ScrollView,
// } from "react-native";

// export default function App() {
//   const [text, setText] = useState("");
//    const [copy, setCopy] = useState("");
//    let [counter, setCounter] = useState(1);
 
//   return (
//     <View style={styles.container}>
//          <TextInput
//         style={styles.txtInput}
//         onChangeText={(e) => {
//           setText(e);
//         }}
//         value={text}
//       />
  
//       <Button
//         title="Clear"
//         onPress={() => {
//           setText("");
//           setCopy("");

//         }}
//       />
      
//       <Button
//         title="Fill"
//         onPress={() => {
//           setCopy(text);
//         }}
//       />
//            <Text style={styles.txtStyle}>{copy}</Text> 

     
//       <StatusBar style="auto" />
//       <ScrollView>
//         <Image
//           style={{ margin: 10,width:300, height:200 }}
//           source={ require(`./assets/images/${counter}.jpg`)
//            }
//         /> 
       
//         <Button 
//         title="Next"
//         onPress={()=>{setCounter(counter<4?++counter:counter)}}
//       /> 
      
//       <Button
//         title="Prev"
//         onPress={()=>{setCounter(counter>1?--counter:counter)}}
//       />
      

//       <IInput/>



//       </ScrollView>  
//        <IInput/>
      
//     </View>
//   );
// }
 
// const styles = StyleSheet.create({
//   txtStyle: {
//     margin: 6,
//     backgroundColor: "white",
//     padding: 20,
//     borderWidth: 2,
    
   
//   },
//   txtInput: {
//     marginTop: 40,
    
//     backgroundColor: "white",
//     padding: 20,
//     borderWidth: 2,
  
//   },
// });



/////////////////////assignment 2////////////////////
// import {
//   Keyboard,
//   View,
//   Text,
//   StyleSheet,
//   ScrollView,
//   Button,
// } from "react-native";
// import { TaskInputField } from "./components/TaskInputField";
// import { TaskItem } from "./components/TaskItem";
// import { useState } from "react";

// export default function App() {
//   const [tasks, setTasks] = useState([]);

//   const addTask = (task) => {
//     setTasks([...tasks, task]);
//     Keyboard.dismiss();
//   };
//   const deleteTask = (deleteIndex) => {
//     setTasks(tasks.filter((val, idx) => idx != deleteIndex));
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.heading}> ToDo App</Text>

//       <TaskInputField addTask={addTask} />

//       <ScrollView>
//         {tasks.map((task, idx) => {
//           return (
//             <View key={idx}>
//               <TaskItem
//                 index={idx + 1}
//                 task={task}
//                 deleteTask={() => {
//                   deleteTask(idx);
//                 }}
//               />
//             </View>
//           );
//         })}
//       </ScrollView>

//       <View style={styles.btn}>
//         <Button
//           title="Clear"
//           color={"red"}
//           onPress={() => {
//             setTasks([]);
//           }}
//         />
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: "pink",
//     flex: 1,
//   },
//   heading: {
//     marginTop: 40,
//     color: "#fff",
//     fontSize: 20,
//     fontWeight: "800",
//   },
//   btn: {
//     width: 200,
//     borderWidth: 2,
//     borderRadius: 25,
//     overflow: "hidden",
//     margin: 20,
//   },
// });



///////////////////assignment3
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomePage } from "./HomePage";
import { Page1 } from "./Page1";
import { Page2 } from "./Page2";
import { MyCamera } from "./MyCamera";
import { ImgPic } from "./ImgPic";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Page1" component={Page1} />
        <Stack.Screen name="Page2" component={Page2} />
        <Stack.Screen name="MyCamera" component={MyCamera} />

        <Stack.Screen name="img" component={ImgPic} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
});
