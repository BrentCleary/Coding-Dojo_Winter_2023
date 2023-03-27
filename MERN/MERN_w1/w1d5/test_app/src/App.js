import React, { useState } from 'react';
import MessageForm from './Components/MessageForm.js';
import MessageDisplay from './Components/MessageDisplay.js';


function App() {

  const [currentMsg, setCurrentMsg] = useState("There are no messages");
  
  const youveGotMail = ( newMessage ) => {
      setCurrentMsg( newMessage );
  }
  
  return (
      <>
      
          <MessageForm onNewMessage={ youveGotMail } />
          <MessageDisplay message={ currentMsg } />
      </>
  );
}

export default App;