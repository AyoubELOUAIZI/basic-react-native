import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import AddTodo from './components/addTodo';
import Header from './components/header';
import TodoItem from './components/todoItem';

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: '1' },
    { text: 'create an app', key: '2' },
    { text: 'play on the switch', key: '3' }
  ]);

  const pressHandler = (key) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.key != key);
    });
  };


 const submitHandler=(text)=>{
  //this is very important to generate the key
  let maxkey=1;
  if(todos.length>0){
     maxkey = Math.max(...todos.map(todo => parseInt(todo.key))) + 1;
  }
   console.log(maxkey);
   
   setTodos((prevTodos) => [...prevTodos, { text: text, key: maxkey.toString()}])
 }

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        {/* add todo form */}
        <AddTodo submitHandler={submitHandler}/>
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TodoItem item={item} pressHandler={pressHandler} />
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});