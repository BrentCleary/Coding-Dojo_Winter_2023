import React, { useState } from 'react'

const Form = (props) => {
    const [bandName, setBandName] = useState('')
    const [genre, setGenre] = useState('')
    const [memberCount, setMemberCount] = useState('')
    const [homeCity, setHomeCity] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    props.addNewBand({
        bandName,
        genre,
        memberCount,
        homeCity,
    });

    setBandName("");
    setGenre('');
    setMemberCount('');
    setHomeCity('');
    
    return(
        <form onSubmit={handleSubmit}>
            <p>
                Band Name:
                <input type="text" onChange={(e) => setBandName(e.target.value)}/>
            </p>
            <p>
                Genre:
                <input type="text" onChange={(e) => setGenre(e.target.value)}/>
            </p>
            <p>
                Member Count:
                <input type="text" onChange={(e) => setMemberCount(e.target.value)}/>
            </p>
            <p>
                Home City:
                <input type="text" onChange={(e) => setHomeCity(e.target.value)}/>
            </p>
        <button>Submit Band</button>
        </form>
    )
}

export default Form