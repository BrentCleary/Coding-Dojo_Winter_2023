import { useState } from "react";
import Form from "./components/Form";
import Display from "./components/Display";
import "./App.css";

function App() {
  const [currentList, setCurrentList] = useState([]);

  const updateList = (newItem) => {
    console.log(newItem);
    setCurrentList([...currentList, newItem]);
    console.log(currentList);
  };

  return (
    <div className="App">
      <Form listUpdater={updateList} />
      {currentList.map((item, index) => {
        return(
          <Display newItem={item} newIndex={index} />
        )
      })}
    </div>
  );
}

export default App;
