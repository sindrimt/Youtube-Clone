import React, { useEffect, useState } from "react";

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

import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../state/index";

const Navbar = () => {
  const [done, setDone] = useState<boolean>(false);
  const dispatch = useDispatch();
  const { saveUser } = bindActionCreators(actionCreators, dispatch);
  //todo DET KAN HENDE USER ER KNYTTET TIL URL OG DERFOR FORURSAKER REFRESH?
  //todo DET KAN HENDE USER ER KNYTTET TIL URL OG DERFOR FORURSAKER REFRESH?
  //todo DET KAN HENDE USER ER KNYTTET TIL URL OG DERFOR FORURSAKER REFRESH?
  //todo DET KAN HENDE USER ER KNYTTET TIL URL OG DERFOR FORURSAKER REFRESH?
  //todo DET KAN HENDE USER ER KNYTTET TIL URL OG DERFOR FORURSAKER REFRESH?
  const user = useSelector((state: State) => state.bank);

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
        saveUser(null);
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
        <button onClick={() => console.log(user)}>Check state</button>
        <button onClick={handleGetUser}>Get User</button>
        <button onClick={handlePostUser}>Post User</button>
      </Div3>
    </NavContainer>
  );
};

export default Navbar;
