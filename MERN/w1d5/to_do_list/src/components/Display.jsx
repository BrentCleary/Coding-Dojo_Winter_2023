import React from 'react'

const Display = ({task, index, deleteItem}) => {
    
    const { listItem, dueDate } = task; 

    const deleteOneItem = () => {
        deleteItem(task, index);
    }


    // THIS SECTION IS CURRENTLY UNCOMPLETED
    // ASKING FOR HELP BEFORE SUBMISSION

    // Get Check-Box Value
    const strikeText = (e) => {
        var checkBox = document.querySelector("#check-box");
        var taskText = document.querySelector("#task").innerHTML;
        if(checkBox.checked)
        {
            taskText = <del>{listItem}</del>
            console.log("checked")
        }
        else
        {
            taskText = {listItem}
            console.log("nope")
            return ("nope")
        }
    }


    return(

        <div className='mt-4'>
            <div>
                <h3 id="task"> {listItem} </h3> <input onClick={strikeText} id='check-box' type='checkbox' value='0'/>
            </div>
            <h4> Due: {dueDate} </h4>
            <button className='btn btn-danger' onClick={deleteOneItem}>Delete</button>

        </div>

    )

}

export default Display;