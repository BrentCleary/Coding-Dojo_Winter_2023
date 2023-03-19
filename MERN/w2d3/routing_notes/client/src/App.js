import React from 'react';
import Form from './components/Form';
import Pokemon from './components/Pokemon';
import Berries from './components/Berries';

import { Routes, Route, Link } from 'react-router-dom';
import './App.css';

function App() {

  return (
    <div className="App">
      <h1>Choose Your Pokemon</h1>
      <Form />
      <Routes>
        <Route path="/pokemon/:id" element={<Pokemon />}/>
        <Route path="/berries/:id" element={<Berries />}/>
      </Routes>
    </div>
  );
}

export default App;
