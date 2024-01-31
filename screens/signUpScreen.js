import { View, Text, TextInput, Button } from 'react-native';
import styles from '../styles';
import { useState } from 'react';
import signUp from '../signUp';

export default function SignUpScreen({navigation}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    return(
        <View style={styles.container}>
            <Text style={styles.boldText}>Name:</Text>
                <TextInput style={styles.input}
                    textAlign='center'
                    placeholder='John Doe'
                    placeholderTextColor={'gray'}
                    onChangeText={(val) => setName(val)}
                    />
            <Text style={styles.boldText}>Email:</Text>
                <TextInput style={styles.input}
                    textAlign='center'
                    placeholder='john_doe@email.com'
                    placeholderTextColor={'gray'}
                    onChangeText={(val) => setEmail(val)}/>
            <Text style={styles.boldText}>Password:</Text>
                <TextInput style={styles.input}
                onChangeText={(val) => setPassword(val)}/>
            <Button title='Sign up' onPress={() => signUp(email, password, name, {navigation})}/>
        </View>
    )
}