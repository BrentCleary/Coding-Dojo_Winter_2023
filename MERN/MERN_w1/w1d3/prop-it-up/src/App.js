import PersonCard from './components/personcard.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <PersonCard firstname="Jane" lastname="Doe" age={ 45 } hairColor="Black"/>
      <PersonCard firstname="Smith" lastname="John" age={ 88 } hairColor="Brown"/>
      <PersonCard firstname="Millard" lastname="Fillmore" age={ 50 } hairColor="Brown"/>
      <PersonCard firstname="Maria" lastname="Smith" age={ 62 } hairColor="Brown"/>
    </div>
  );
}

export default App;
