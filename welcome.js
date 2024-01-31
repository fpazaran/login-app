import React from 'react';
import { View, Text, StyleSheet, Button } from "react-native"


export default function WelcomeScreen({ navigation }) {

    return (
        <View style={styles.container}>
            <View style={styles.input}>
                <Button title='Sign in'
                    onPress={() => navigation.navigate('SignInScreen')}
                />
                <Button title='Sign up'
                    onPress={() => navigation.navigate('SignUpScreen')}
                />
            </View>
        </View>
    )
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
button:{
    backgroundColor: 'pink',
    padding: 8,
},
header: {
    backgroundColor: 'gray',
    padding: 20,
},
boldText: {
    fontWeight: 'bold',
},
});