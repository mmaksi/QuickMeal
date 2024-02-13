import { getApp, getApps, initializeApp } from "firebase/app";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

import {
  getAuth,
  signInWithEmailAndPassword,
  initializeAuth,
  GoogleAuthProvider,
  User,
  getReactNativePersistence,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAD4HJfQQ-m6Wl86C-0ddsv8xKJdwObIvM",
  authDomain: "quick-meal-929be.firebaseapp.com",
  projectId: "quick-meal-929be",
  storageBucket: "quick-meal-929be.appspot.com",
  messagingSenderId: "585625699192",
  appId: "1:585625699192:web:c03a93954aa0e31857fe8d",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export const emailSignIn = async (
  email: string,
  password: string
): Promise<User | string> => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    return user;
  } catch (error) {
    return error.toString();
  }
};

export const emailSignup = async (
  email: string,
  password: string,
  repeatedPassword: string
) => {
  if (password !== repeatedPassword) {
    return "Passwords don't match. Please try again.";
  }
  try {
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredentials.user;
    return user;
  } catch (error) {
    return error.toString();
  }
};

export const signOutUser = async () => {
  await signOut(auth);
};

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);
