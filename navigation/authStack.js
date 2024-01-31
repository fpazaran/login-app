import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import WelcomeScreen from '../welcome';
import SignUpScreen from '../screens/signUpScreen';
import SignInScreen from '../screens/signInScreen'
import HomeScreen from '../screens/homeScreen';
import Header from '../header';

const screens = {
    WelcomeScreen: {
        screen: WelcomeScreen,
    },
    SignUpScreen: {
        screen: SignUpScreen,
    },
    SignInScreen: {
        screen: SignInScreen,
    },
    HomeScreen: {
        screen: HomeScreen,
        navigationOptions: {
            headerTitle: () => <Header />,
        },
    }
}

const Stack = createStackNavigator(screens);

export default createAppContainer(Stack);