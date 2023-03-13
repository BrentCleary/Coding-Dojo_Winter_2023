import './App.css';
import Form from './components/Form';
import Display from './components/Display';
import { useState } from 'react';

function App() {

  const Color = (props) => {
    [currentColor, setCurrentColor] = useState('')

    const pickColor = ( newColor ) => {
      setCurrentColor( newColor );
    }

  };
  return (
    <div className="App">
      <Form/>
      <Display/>
    </div>
  );
}

export default App;
