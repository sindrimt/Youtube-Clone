import { initializeApp } from "firebase/app";

import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  signInWithRedirect,
  getRedirectResult,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCcLh4lWeM0056S5N4QekpI3nGTaZbHJeI",
  authDomain: "clone-3944c.firebaseapp.com",
  projectId: "clone-3944c",
  storageBucket: "clone-3944c.appspot.com",
  messagingSenderId: "43709224161",
  appId: "1:43709224161:web:492aaeb6f104c9e0bb93a0",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

var provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

//provider.addScope("https://www.googleapis.com/auth/contacts.readonly");

export const signInWithGoogle = () => signInWithPopup(auth, provider);

export const signOutWithGoogle = () => signOut(auth);

export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);

export const getGoogleRedirectResults = () => getRedirectResult(auth);
