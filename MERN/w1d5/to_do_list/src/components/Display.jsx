import React from 'react'

const Display = ({newItem, newIndex}) => {

    return(

        <div>
            <h1 key={newIndex}> {newItem} <input type='checkbox' value='0'/> </h1> 
            
            <button>Delete</button>

        </div>

    )

}

export default Display;