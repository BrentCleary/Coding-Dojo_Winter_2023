import './App.css';
import Form from './components/Form';
import Display from './components/Display';
import { useState } from 'react';

// Box Generator Completed with the help of TA Emilie Wu,
// without whose help I would have missed essential mapping functions
// styling syntax and array functionality
// Thanks Emilie

function App() {

  const [currentColor, setCurrentColor] = useState([""]);

    const pickColor = ( newColor ) => {
      console.log(newColor);
      // spread operator, adds new color to array
      setCurrentColor([ ...currentColor, newColor ]);
      
    
  };

  return (
    <div className="App">
      <Form onBoxGenerate={ pickColor }/>
      <Display boxColor={currentColor}/>
    </div>
  );
}

export default App;
