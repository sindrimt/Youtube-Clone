import React, { useEffect } from "react";

export const Login = () => {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://apis.google.com/js/api.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  /**
   * Sample JavaScript code for youtube.subscriptions.list
   * See instructions for running APIs Explorer code samples locally:
   * https://developers.google.com/explorer-help/code-samples#javascript
   */
  function authenticate() {
    console.log("hook");
    return window.gapi.auth2
      .getAuthInstance()
      .signIn({ scope: "https://www.googleapis.com/auth/youtube" })
      .then(
        function () {
          console.log("Sign-in successful");
        },
        function (err) {
          console.error("Error signing in", err);
        }
      );
  }
  console.log("contenmt");
  function loadClient() {
    window.gapi.client.setApiKey("AIzaSyBTS9wiV0dM9JPv4kIm1_Y-FSs4QXgTN5k");
    return window.gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest").then(
      function () {
        console.log("GAPI client loaded for API");
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
        },
        function (err) {
          console.error("Execute error", err);
        }
      );
  }
  window.gapi.load("client:auth2", function () {
    window.gapi.auth2.init({ client_id: "342060317720-384fnit80j636106ekluk1bn06fpmnk5" });
  });

  return (
    <>
      <button onClick={() => authenticate().then(loadClient)}>Sign in</button>
      <button onClick={() => execute()}>Execute</button>
    </>
  );
};
