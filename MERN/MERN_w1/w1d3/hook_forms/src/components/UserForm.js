import React, { useState}  from 'react'

const UserForm = props => {

    // Const establishes Functional Components
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Const establishes createUser() method for form submit
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password};
        console.log("Welcome", newUser)
    };

    return(

        <div>
            <form>
                <div>
                    <label>First Name:</label>
                    <input type="text" onChange={ (e) => setFirstName(e.target.value) } ></input>
                </div>
                <div>
                    <label>Last Name:</label>
                    <input type="text" onChange={ (e) => setLastName(e.target.value) } ></input>
                </div>
                <div>
                    <label>Email:</label>
                    <input type="text" onChange={ (e) => setEmail(e.target.value) } ></input>
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" onChange={ (e) => setPassword(e.target.value) } ></input>
                </div>
                <div>
                    <label>Confirm Password:</label>
                    <input type="password" onChange={ (e) => setPassword(e.target.value) } ></input>
                </div>
            </form>
        
            <div>
            <h2>Your Form Data</h2>
            <p>First Name: {firstName} </p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: password</p>
            <p>Confirm Password: password</p>

        </div>

        
        </div>



    )

}

export default UserForm;