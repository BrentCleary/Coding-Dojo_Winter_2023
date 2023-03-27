import React, {useState} from 'react'

const Form = (props) => {

    const [color, setColor] = useState("");

    const createBox = (e) => {
        e.preventDefault();
        props.onBoxGenerate(color);

    }

    return(

        <div>
            <h1>Pick a Color</h1>
            <form onSubmit={createBox}>
                <input type='text' onChange={(e) => setColor(e.target.value)}/>
                <button>Create Box</button>
            </form>
        </div>
    )

}

export default Form