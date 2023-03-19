import React from 'react'

const Display = ({task, index, deleteItem}) => {
    
    const { listItem, dueDate } = task; 

    const deleteOneItem = () => {
        deleteItem(task, index);
    }

    return(

        <div className='mt-4'>
            <h3> Task: {listItem} <input type='checkbox' value='0'/> </h3> 
            <h4> Due: {dueDate} </h4>
            <button className='btn btn-danger' onClick={deleteOneItem}>Delete</button>

        </div>

    )

}

export default Display;