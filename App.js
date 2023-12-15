import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

export default function App() {
  const [name, setName] = useState('fernando');
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const createProfile = (response) => {
    db().ref(`/users/${response.user.uid}`).set({name});
  }

  const register = () => {
    try{
      const response = auth().createUserWithEmailAndPassword( 
        email, 
        password 
      );

      if (response.user) {
        createProfile(response);
      }
    } catch (e) {
      
    }
  }


  return (
    <View style={styles.container}>
      <Text style={styles.boldText}>Email: {email}</Text>
      <TextInput style={styles.input}
        placeholder='john_doe@email.com'
        placeholderTextColor={'gray'}
        onChangeText={(val) => setEmail(val)}/>
      <Text style={styles.boldText}>Password: {password}</Text>
      <TextInput style={styles.input}
      onChangeText={(val) => setPassword(val)}/>
      <Button title='Sign up' onPress={register()}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    backgroundColor: 'lightblue',
    padding: 8,
    margin: 10,
    width: 200,
  },
  header: {
    backgroundColor: 'gray',
    padding: 20,
  },
  boldText: {
    fontWeight: 'bold',
  },
});
