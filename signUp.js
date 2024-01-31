import { Alert } from 'react-native';
import { createUserWithEmailAndPassword } from '@firebase/auth';
import { auth,db } from './firebaseConfig';
import { ref, set } from '@firebase/database';

async function createProfile(user, name, email) {
    await set(ref(db, '/users/'+ user.uid), {
        email: email,
        name: name,
    });
};

export default async function signUp(email, password, name, {navigation}){
    email = 'pazaranfernando@gmail.com'
    password = 'Fernando'
    name = 'Fernando'
    
    if(email != '' && password != ''){
            await createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
                console.log('auth passed')
                createProfile(userCredential, name, email)
                Alert.alert('User Created')
                navigation.navigate('WelcomeScreen')
                
            }).catch((e) => {
                Alert.alert('Invalid Email')
                console.log(e)
            })
    } else{
        Alert.alert('Missing email or password')
    }
}