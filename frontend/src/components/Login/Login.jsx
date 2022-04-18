import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeUrl, setUser, setSubscriptions } from "../../state/actions/users";

import { LoginButton, ProfilePic } from "./LoginStyles";
import { IoPersonCircleOutline } from "react-icons/io5";

export const Login = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);

  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://apis.google.com/js/api.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  function authenticate() {
    return window.gapi.auth2
      .getAuthInstance()
      .signIn({ scope: "https://www.googleapis.com/auth/youtube" })
      .then((res) => {
        console.log(res);
        // Dispatches the current user
        dispatch(setUser(window.gapi.auth2.getAuthInstance().currentUser.get().getBasicProfile()));
      });
  }
  function loadClient() {
    window.gapi.client.setApiKey(`${process.env.REACT_APP_API_KEY_2}`);
    return window.gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest").then(
      function () {
        console.log("GAPI client loaded for API");
        execute();
      },
      function (err) {
        console.error("Error loading GAPI client for API", err);
      }
    );
  }
  // Make sure the client is loaded and sign-in is complete before calling this method.
  function execute() {
    return window.gapi.client.youtube.subscriptions
      .list({
        part: ["snippet"],
        mine: true,
      })
      .then(
        function (response) {
          // Handle the results here (response.result has the parsed body).
          console.log("Response", response);
          dispatch(setSubscriptions(response));
        },
        function (err) {
          console.error("Execute error", err);
        }
      );
  }
  window.gapi.load("client:auth2", function () {
    window.gapi.auth2.init({ client_id: `${process.env.REACT_APP_CLIENT_ID}` });
  });

  // idk man returnerer true uansett :P
  const checkUser = () => {
    console.log(window.gapi.auth2.getAuthInstance().isSignedIn.get());
    console.log("Current user : " + window.gapi.auth2.getAuthInstance().currentUser.get().getBasicProfile().getName());
  };

  const handleLogout = () => {
    // logs out by emptying google user object and dispatching the user object to an empty object
    window.gapi.auth2.getAuthInstance().then((res) => console.log(res));
    dispatch(setUser({}));
  };

  return (
    <>
      {Object.keys(user).length === 0 && user.constructor === Object ? (
        <LoginButton onClick={() => authenticate().then(loadClient)}>
          <span style={{ padding: "7px" }}>
            <IoPersonCircleOutline color="#3EA6FF" size={25} />
          </span>
          LOGG PÅ
        </LoginButton>
      ) : (
        <>
          {console.log(user)}
          <ProfilePic src={user.getImageUrl()} alt="PP" />
          <button onClick={handleLogout}>Sign Out</button>
        </>
      )}

      <button onClick={() => execute()}>Execute</button>
      {/* <button onClick={() => checkUser()}>check user</button> */}
    </>
  );
};
