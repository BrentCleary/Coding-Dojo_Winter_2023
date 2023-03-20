import './App.css';
import { Routes, Route, Link } from 'react-router-dom'

import People from './components/People';
import Planet from './components/Planet';

import Form from './components/Form';


function App() {

  return (

    <div className="App">
      <h1>A Long Time Ago, in a Galaxy Far, Far Away...</h1>
      <Form />
      <Routes>
        <Route path="/people/:id" element={<People />}/>
        <Route path="/planets/:id" element={<Planet />}/>
      </Routes>
    </div>
  );
}

export default App;
