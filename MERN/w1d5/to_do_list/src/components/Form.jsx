import React, { useState } from 'react'

const Form = (props) => {

    const [listItem, setListItem] = useState([]);

    const handleList = (e) => {
        e.preventDefault();
        props.listUpdater(listItem)
        setListItem("");
        console.log("form Form", listItem)
    }

    return(

        <div>
            <h1>To Do List</h1>
            <form onSubmit={handleList}>
                <input type='text' onChange={(e) => setListItem(e.target.value)}/>
                <button>Add To List</button>
            </form>
        </div>


    )
}

export default Form