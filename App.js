import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  const [name, setName] = useState('ahmed');
  const [age, setAge] = useState('30');

  return (
    <View style={styles.container}>
      <View style={styles.mybloc}>
        <Text>Enter name:</Text>
        <TextInput
          placeholder='your name'
          style={styles.input}
          onChangeText={(value) => setName(value)} />
      </View>
      <View style={styles.mybloc}>
        <Text>Enter age:</Text>
        <TextInput
          placeholder='your age'
          style={styles.input}
          onChangeText={(value) => setAge(value)} />
      </View>

      <Text style={styles.result}>name: {name}, age: {age}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'yellow',
    // alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 2,
    margin: 10,
    width: 250,
    borderRadius:8,
  },
  mybloc: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-evenly',

  },
  result:{
    padding:10,
  }
});