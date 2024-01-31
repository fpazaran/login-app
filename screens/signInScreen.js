import { View, Text, TextInput, Button } from 'react-native';
import styles from '../styles';
import { useState } from 'react';
import signIn from '../signIn';


export default function SignInScreen({navigation}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return(
        <View style={styles.container}>
            <Text style={styles.boldText}>Email:</Text>
                <TextInput style={styles.input}
                    textAlign='center'
                    placeholder='john_doe@email.com'
                    placeholderTextColor={'gray'}
                    onChangeText={(val) => setEmail(val)}/>
            <Text style={styles.boldText}>Password:</Text>
                <TextInput style={styles.input}
                onChangeText={(val) => setPassword(val)}/>
            <Button title='Sign in' onPress={() => signIn(email, password, {navigation})}/>
        </View>
    )
}