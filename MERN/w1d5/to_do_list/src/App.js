import { useState } from "react";
import Form from "./components/Form";
import Display from "./components/Display";

import "./App.css";

// Worked with Randy Lynd on CheckBox Strikethrough
// Hard trouble getting it centered

function App() {

  const [currentList, setCurrentList] = useState([]);

  const updateList = (newItem) => {
    console.log(newItem);
    setCurrentList([...currentList, newItem]);
    console.log(currentList);
  };

  const deleteItem = (taskToDelete) => {

    // Filters out task using listItem
    setCurrentList(currentList.filter((task) => task.listItem !== taskToDelete.listItem))
    
  }

  return (
    <div className="App">
        <h1>To Do List</h1>
        <Form updateList={updateList} />

        <div>
          {currentList.map((task, idx) => (
            
            <Display task={task} index={idx} deleteItem={deleteItem}/>
          ))
          }
        </div>


{/* 
      {currentList.map((item) => {
        return(
          <Display currentItem={item} deleteItem={deleteFromList}/>
        )
      })} */}
{/*     
    {currentList.map((item, index) => {
        return(
          <Display newItem={item} newIndex={index} deleteItem={deleteFromList}/>
        )
      })} */}

    </div>
  );
}

export default App;
