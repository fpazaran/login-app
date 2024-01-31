import { View, Text, Button } from 'react-native';
import styles from './styles';


export default function Header() {
    return(
        <View style={styles.header}>
            <View>
                <Text style={styles.boldText}>Home</Text>
            </View>
        </View>
    )
}