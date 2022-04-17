import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Search from "../Search/Search";

import { Div2, Div3, NavContainer, LoginButton, ProfilePic } from "./NavbarStyles";
import { CgProfile } from "react-icons/cg";
import { IoPersonCircleOutline } from "react-icons/io5";

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
import { changeUrl, setUser } from "../../state/actions/users";
import { Link } from "react-router-dom";
import { Filter } from "../Filters/Filter";
import { Login } from "../Login/Login";

const Navbar = () => {
  const [done, setDone] = useState<boolean>(false);
  const [loadingUser, setLoadingUser] = useState<boolean>(false);
  const users = useSelector((state: State) => state.users);

  const dispatch = useDispatch();

  const user = useSelector((state: State) => state.user);

  console.log(users);
  //todo DET KAN HENDE USER ER KNYTTET TIL URL OG DERFOR FORURSAKER REFRESH?

  // Gets results (user data) from sign in with redirect when finished
  useEffect(() => {
    getGoogleRedirectResults()
      .then(({ user }: any) => {
        //todo
        dispatch(setUser(user));
        setLoadingUser(false);
        //console.log(res);
        console.log(user);
      })
      .catch((error) => console.log(error));
  }, [done]);

  // Sign in with google redirect
  const handleLogin = () => {
    // Sets state to empty, for rendering purposes
    //dispatch(setUser({ "": "" }));

    signInWithGoogleRedirect()
      .then(() => console.log("Redirecting"))
      .finally(() => {
        setLoadingUser(false);
        setDone(true);
      });
  };

  // Sign out with google, sets user state to null
  const handleLogout = () => {
    signOutWithGoogle()
      .then(() => {
        dispatch(setUser({}));
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

  const handleState = () => {
    console.log(user);
  };

  return (
    <NavContainer>
      <Div2>
        <Search />
      </Div2>
      <Div3>
        <Login />
        <button onClick={handleState}>Check state</button>

        {/* <button onClick={handleLogin}>Sign In</button>
        <button onClick={handleGetUser}>Get User</button>
        <button onClick={handlePostUser}>Post User</button> */}

        {Object.keys(user).length === 0 && user.constructor === Object ? (
          <LoginButton onClick={handleLogin}>
            <span style={{ padding: "7px" }}>
              <IoPersonCircleOutline color="#3EA6FF" size={25} />
            </span>
            LOGG PÅ
          </LoginButton>
        ) : (
          <>
            {console.log(user.photoURL)}
            <ProfilePic src={user.photoURL} alt="PP" />
            <button onClick={handleLogout}>Sign Out</button>
          </>
        )}
      </Div3>
      <Filter />
    </NavContainer>
  );
};

export default Navbar;
