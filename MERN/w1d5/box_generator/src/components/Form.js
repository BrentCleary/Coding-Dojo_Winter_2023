import React, {useState} from 'react'

const Form = (props) => {

    const [color, setColor] = useState("");

    const createBox = (e) => {
        e.preventDefault();
        

    }

    return(

        <div>
            <form onSubmit={createBox}>
                <input type='text'/>
            </form>
        </div>
    )

}

export default Form