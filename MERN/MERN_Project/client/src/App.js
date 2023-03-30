import { useEffect, useState } from 'react'
import jwt_decode from "jwt-decode" 
import './App.css';
import Login from './Components/Login';

/// Tutorial for Google OAuth found here https://www.youtube.com/watch?v=roxC8SMs7HU

function App() {

  const [currentUser, setCurrentUser] = useState({});

  const loginUser = (user) => {
    setCurrentUser(user);
    console.log(currentUser)
  }

  return (
    <div className="App">
      <Login updateUser={loginUser}/>
    </div>
  );
}

export default App;
