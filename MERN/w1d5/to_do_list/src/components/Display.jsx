import React from 'react'

const Display = ({task, index, deleteItem}) => {
    
    const { listItem, dueDate } = task; 

    const deleteOneItem = () => {
        deleteItem(task, index);
    }

    return(

        <div>
            <h1> {listItem} <input type='checkbox' value='0'/> </h1> 
            <h3> {dueDate} </h3>
            <button className='btn btn-danger' onClick={deleteOneItem}>Delete</button>

        </div>

    )

}

export default Display;