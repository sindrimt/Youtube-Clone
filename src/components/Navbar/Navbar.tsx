import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import Search from "../Search/Search";

import { Div2, Div3, NavContainer } from "./NavbarStyles";
import {
  signInWithGoogle,
  signOutWithGoogle,
  signInWithGoogleRedirect,
  getGoogleRedirectResults,
} from "../../firebase-config";
import { getUser, postUser } from "../../axios/axios";

import axios from "axios";

import "./navbar.css";
import { State } from "../../state/reducers";

const Navbar = () => {
  const [done, setDone] = useState<boolean>(false);
  const users = useSelector((state: State) => state.users);

  console.log(users);
  //todo DET KAN HENDE USER ER KNYTTET TIL URL OG DERFOR FORURSAKER REFRESH?

  // Gets results (user data) from sign in with redirect when finished
  useEffect(() => {
    getGoogleRedirectResults()
      .then((res) => {
        console.log(res);
        console.log("Loaded sign in data");
      })
      .catch((error) => console.log(error));
  }, [done]);

  // Sign in with google redirect
  const handleLogin = () => {
    signInWithGoogleRedirect()
      .then(() => console.log("Redirecting"))
      .finally(() => setDone(true));
  };

  // Sign out with google, sets user state to null
  const handleLogout = () => {
    signOutWithGoogle()
      .then(() => {
        console.log("logged out");
        //saveUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGetUser = () => {
    getUser();
  };
  const handlePostUser = () => {
    postUser({ username: "gamer", email: "yoyoyo", profilePic: "dette er url.com" });
  };

  return (
    <NavContainer>
      <Div2>
        <Search />
      </Div2>
      <Div3>
        <button onClick={handleLogin}>Sign In</button>
        <button onClick={handleLogout}>Sign Out</button>
        {/* <button onClick={() => console.log(user)}>Check state</button> */}
        <button onClick={handleGetUser}>Get User</button>
        <button onClick={handlePostUser}>Post User</button>
      </Div3>
    </NavContainer>
  );
};

export default Navbar;
