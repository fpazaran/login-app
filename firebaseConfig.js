import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyDqHIdp8xoe5ZRVYsa39pftNRfmkM85-gk",
  authDomain: "loginapp-2d801.firebaseapp.com",
  databaseURL: "https://loginapp-2d801-default-rtdb.firebaseio.com/",
  projectId: "loginapp-2d801",
  storageBucket: "loginapp-2d801.appspot.com",
  messagingSenderId: "1046004927760",
  appId: "1:1046004927760:web:69763bfd1e5be43f37a995",
  measurementId: "G-WDZ8VV4H50",
  databaseURL: "https://loginapp-2d801-default-rtdb.firebaseio.com/"
};


const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
export const db = getDatabase(app);