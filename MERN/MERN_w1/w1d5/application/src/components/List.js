import React, { useState } from 'react'

const List = ({item, index, removeItem, completeItem}) => {

    <div>
        <input 
        type='checkbox' 
        checked={item.isComplete} 
        onChange = {() => completeItem(index)}
        id=''
        />
        <div>{item.category}</div>
        <div>{item.quantity}</div>
        <div>{item.item}</div>
        <button onClick={() => removeItem(index)}>I don't need it</button>
    </div>
}