import {
    createUserWithEmailAndPassword,
    updateProfile,
    signInWithEmailAndPassword,
    signOut,
  } from "firebase/auth";
  import { auth } from "boot/firebaseConnection";
  
  export const getUser = () => {
    return auth.currentUser;
  };
  
  export const update = (user, data) =>
    new Promise((resolve, reject) => {
      updateProfile(user, data);
      resolve();
    });
  
  export const register = (data) =>
    new Promise((resolve, reject) => {
      const { email, password, ...rest } = data;
  
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          if (Object.keys(rest).length > 0) {
            updateProfile(userCredential.user, rest);
          }
  
          resolve(userCredential.user);
        })
        .catch((err) => {
          reject(err.message);
        });
    });
  
  export const login = (data) =>
    new Promise((resolve, reject) => {
      const { email, password, ...rest } = data;
  
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          if (Object.keys(rest).length > 0) {
            updateProfile(userCredential.user, rest);
          }
  
          resolve(userCredential.user);
        })
        .catch((err) => {
          reject(err.message);
        });
    });
  
  export const logout = () =>
    new Promise((resolve, reject) => {
      signOut(auth)
        .then(() => {
          resolve();
        })
        .catch((err) => {
          reject(err.message);
        });
    });