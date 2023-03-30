import React, { useState, useEffect } from "react"
import jwt_decode from "jwt-decode" 

const Login = (props) => {

  const [user, setUser] = useState({});

  // Decodes Google Response - Sets user state to Obj - hides Sign-In Button
  function handleCallbackResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
    var userObject = jwt_decode(response.credential);
    console.log(userObject);
    setUser(userObject);
    document.getElementById("signInDiv").hidden = true;
    props.updateUser(user);
  }
  
  // Sign-Out: Sets User to empty obj - unhides Sign-In Button 
  function handleSignOut(event) {
    setUser({});
    document.getElementById("signInDiv").hidden = false;
    props.updateUser({})
  }
  

  // Initializes Client - Calls google OAuth - calls Sign-in Features
  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: "377210060521-j5bmdlnnnkt8dvd6f7aqql61bd5qgo3k.apps.googleusercontent.com",
      callback: handleCallbackResponse
    });

    // Button Render
    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      {theme: "outline", size: "large"}
    );

    google.accounts.id.prompt();

  }, []);

  return (
    <div>
      <div id="signInDiv"></div>
      { Object.keys(user).length != 0 &&
        <button onClick={ (e) => handleSignOut(e) }>Sign Out</button>
      }

      { user && 
        <div>
          <img src={user.picture}></img>
          <h3>{user.name}</h3>
        </div>
      }
      </div>
  );
}

export default Login