import React from 'react';
import UserStack from './userStack';
import AuthStack from './authStack';
// import { useAuth } from '../utils/hooks/useAuth';

export default function RootNavigation() {
    // const {user} = useAuth();

    //return user ? <UserStack /> : <AuthStack />;
    return (  
        <AuthStack/>
    )
}