import React, { useState } from 'react'
import './App.css';
import Display from './components/Display';

import Form from './components/Form';

// import Display from './components/Display'

function App() {

  const [bands, setBands] = useState([])

  const addNewBand = (newBand) => {
    console.log(newBand);
    // asynchronous
    // just like set Timeout, the function finishes later on
    setBands({...bands, newBand});
  };

  const deleteBand = (bandToDelete, indexParam) => {
    setBands(bands.filter((band) => band.bandName !== bandToDelete.bandName));
  
    setBands(bands.filter((band, idx) => idx !== indexParam))
  };


  return (
    <div className="App" class='p-4'>
      <h1>Gator Tales</h1>
      <Form addNewBand={addNewBand} />
      <div>
        {bands.map((band) => (
          <Display band={band} index={idx} deleteBand={deleteBand} />
        ))}
      </div>
    </div>
  );
}

export default App;
