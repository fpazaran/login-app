import { useState, useEffect } from 'react';

import { onAuthStateChanged } from 'firebase/auth'; 
import auth from '../../firebaseConfig'
//import { auth } from '../../firebaseConfig';



export default function useAuth() {
    const [user, setUser] = useState();

    useEffect(() => {
        const unsubscribeFromAuthStateChanged = onAuthStateChanged(auth, (user) => {
            if (user) {
                //user is signed in
                setUser(user);
            } else {
                //user is signed out
                setUser(undefined);
            }
        })
        
        return unsubscribeFromAuthStateChanged;
    }, []);

    return {
        user,
    };  
}