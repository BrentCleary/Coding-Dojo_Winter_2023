import './App.css';
import FunctionalDisplay from './components/functional_display';

function App() {
  return (
    <div className="App">
      <FunctionalDisplay source="https://placekeanu.com" width={200} height={150}/>
    </div>
  );
}

export default App;
