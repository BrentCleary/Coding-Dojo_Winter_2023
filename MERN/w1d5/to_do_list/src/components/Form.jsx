import React, { useState } from 'react'

const Form = (props) => {

    const [listItem, setListItem] = useState([""]);
    const [dueDate, setDueDate] = useState([""]);

    const handleList = (e) => {
        e.preventDefault();

        props.updateList({listItem, dueDate})

        setListItem("");
        setDueDate("");

        console.log("Form: ", listItem, dueDate)
    }

    return(

        <div>
            <form onSubmit={handleList}>
                <p>
                    Item:
                    <input value={listItem} type='text' onChange={(e) => setListItem(e.target.value)}/>
                </p>
                <p>
                    Due Date:
                    <input value={dueDate} type='date' onChange={(e) => setDueDate(e.target.value)}/>
                </p>

                <button class='btn btn-success'>Add To List</button>
            </form>
        </div>


    )
}

export default Form