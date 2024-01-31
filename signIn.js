import { Alert } from 'react-native';
import { signInWithEmailAndPassword } from '@firebase/auth';
import { auth } from './firebaseConfig';


export default function signIn(email, password, {navigation}){
    if(email != '' || password != ''){
        signInWithEmailAndPassword(auth, email, password).then(() => {
            navigation.navigate('HomeScreen');
        })
        .catch((e) => {
            console.log(e)
            Alert.alert('Invalid email/password')
        })
    }
}