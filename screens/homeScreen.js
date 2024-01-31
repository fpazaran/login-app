import { View, Text, Button } from 'react-native';
import styles from '../styles';


export default function HomeScreen({navigation}) {
    return(
        <View style={styles.container}>
            <Text style={styles.boldText}>HELLO!!</Text>  
        </View>
    )
}