import './App.css';
import Form from './components/Form';


function App() {

  const [items, setItems] = useState([]);

  const addItem = newItem => {
    setItems([...items, newItem])
  }

  const removeItem = index => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems)
  }

  const completeItem = index => {
    const newItems = [...items];
    newItems[index].isComplete = !newItems[index].isComplete;
    setItems(newItems)
  }

  return (
    <div className="App">
      <Form additem = {addItem} />
      {items.map((item, index) => (
      <List
        item = {item}
        index = {index}
        removeItem = {removeItem}
        completeItem = {completeItem}
      />
      ))}
    </div>
  );
}

export default App;
