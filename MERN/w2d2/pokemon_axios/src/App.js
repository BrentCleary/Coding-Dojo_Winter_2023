import './App.css';
import { useState } from 'react';
import FetchAPI from './components/FetchAPI';
import Display from './components/Display';

function App() {

  // Array of Pokemon names, generated from FetchAPI
  const [pokeArray, setPokeArray] = useState([]);

  const updateList = (newPoke) => {
    console.log("App.js newPoke: ", newPoke);
    // This is for test purposes, since useState is not working
    // Late at night. Can't do 20 minute rule.
    pokeArray.push(newPoke);
    // setPokeArray([...pokeArray, newPoke]);
    console.log("App.js array: ", pokeArray);
  };

  return (
    <div className="App">
      <FetchAPI getPokemon={updateList}/>
      <Display pokeList={pokeArray}/>
    </div>
  );
}

export default App;
