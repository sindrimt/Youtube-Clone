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

  clientId: "342060317720-384fnit80j636106ekluk1bn06fpmnk5.apps.googleusercontent.com",
  scopes: [
    "https://www.googleapis.com/auth/youtube",
    "https://www.googleapis.com/auth/youtube.channel-memberships.creator",
    "https://www.googleapis.com/auth/youtube.force-ssl",
    "https://www.googleapis.com/auth/youtube.readonly",
    "https://www.googleapis.com/auth/youtube.upload",
    "https://www.googleapis.com/auth/youtubepartner",
    "https://www.googleapis.com/auth/youtubepartner-channel-audit",
  ],
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

var provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const signInWithGoogle = () => signInWithPopup(auth, provider);

export const signOutWithGoogle = () => signOut(auth);

export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);

export const getGoogleRedirectResults = () => getRedirectResult(auth);
