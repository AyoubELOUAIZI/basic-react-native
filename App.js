import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <>

      <View style={styles.headere}>
        <Text style={styles.headere} >First app</Text>
      </View>

      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.boldText}>Hello, World from react native!</Text>
        </View>
        <View style={styles.body}>
          <Text>Lorem ipsum <Text style={styles.boldText}>dolor</Text> sit amet.</Text>
          <Text>Lorem ipsum dolor sit amet.</Text>
          <Text>Lorem ipsum dolor sit amet.</Text>
        </View>
      </View>

      <View style={styles.footer}>
        <Text >edited by ayoub </Text>
      </View>

    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: 'green',
    padding: 40,
  },
  body: {
    backgroundColor: 'pink',
    padding: 50,
    margin: 10,
  },
  boldText: {
    fontWeight: 'bold',
  },
  footer: {
    backgroundColor: "yellow"
  },
  headere: {
    marginTop:20,
    backgroundColor: "#fff",
    alignItems: 'center',
    color: '#000',
    fontWeight: 'bold',
    fontSize: 20,

  }
});