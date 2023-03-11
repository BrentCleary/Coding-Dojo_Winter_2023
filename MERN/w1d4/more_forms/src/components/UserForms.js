import React, { useState}  from 'react'

const UserForm = props => {

    // Const establishes Functional Components
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    // Validations
    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    // Const establishes createUser() method for form submit
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password};
        console.log("Welcome", newUser)
    };

    // First Name
    const handleFirstName = (e) => {
        setFirstName(e.target.value)
        if(e.target.value.length < 2) {
            setFirstNameError("Name must be at least 2 characters");
        }
        else {
            setFirstNameError("");
        }
    }

    // Last Name
    const handleLastName = (e) => {
        setLastName(e.target.value)
        if(e.target.value.length < 2) {
            setLastNameError("Name must be at least 2 characters");
        }
        else {
            setLastNameError("")
        }
    }
    
    // Email
    const handleEmail = (e) => {
        setEmail(e.target.value)
        if(e.target.value.length < 5) {
            setEmailError("Email must be at least 5 characters");
        }
        else {
            setEmailError("");
        }
    }

    // Password
    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value != confirmPassword){
            setPasswordError("Passwords must match!")
        }
        else{
            setPasswordError("")
            setConfirmPasswordError("")
        }
    }

    // Confirm Password
    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        if(e.target.value != password){
            setConfirmPasswordError("Passwords must match!")
        }
        else{
            setConfirmPasswordError("");
            setPasswordError("");
        }
    }
        

    return(

        <div>
            <form onSubmit={ createUser }>
                <div>
                    <label>First Name:</label>
                    <input type="text" onChange={handleFirstName} ></input>
                    {/* Ternary condition*/}
                    {setFirstNameError ? <p> {firstNameError} </p> : "" } 
                </div>
                <div>
                    <label>Last Name:</label>
                    <input type="text" onChange={handleLastName} ></input>
                    {setLastNameError ? <p> {lastNameError} </p> : "" } 
                </div>
                <div>
                    <label>Email:</label>
                    <input type="text" onChange={handleEmail} ></input>
                    {setEmailError ? <p> {emailError} </p> : "" }
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" onChange={handlePassword} ></input>
                    {setConfirmPasswordError ? <p>{passwordError}</p>: ""}
                </div>
                <div>
                    <label>Confirm Password:</label>
                    <input type="password" onChange={handleConfirmPassword} ></input>
                    {setConfirmPasswordError ? <p>{confirmPasswordError}</p>: ""}
                </div>
                <input type="submit" value="Create User" />
            </form>

        </div>



    )

}

export default UserForm;