import React, { useState } from 'react'

const Form = (props) => {
    const [form, setForm] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addItem({category: category, item: item, quantity: quantity, isComplete: false})
        setForm
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h4>Grocery List</h4>
                <div>
                    <select name='' id='' onChange={(e) => setForm(e.target.value)}>
                        <option value='category'>Meat</option>
                        <option value='category'>Meat</option>
                        <option value='category'>Meat</option>
                        <option value='category'>Meat</option>
                        <option value='category'>Meat</option>
                        <option value='category'>Meat</option>
                    </select>
                </div>
                <div>
                    <input type="text" id='item' value={}/>
                    <label for='item'>Item</label>
                </div>

            </form>
        </div>
    )
}

export default Form