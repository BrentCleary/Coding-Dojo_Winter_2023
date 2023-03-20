import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {
    
    const [topic, setTopic] = useState('pokemon');
    const [id, setId] = useState(1);

    const nav = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(topic);
        console.log(id);

        nav(`/${topic}/${id}`);
    };

    return (

        <form onSubmit={handleSubmit}>
            <div>
                <h3>Topic</h3>
                <div>
                    <p>
                        Pokemon:
                        <input 
                            type="radio" 
                            name="topic" 
                            id="pokemon" 
                            checked={topic === 'pokemon'} 
                            onChange={(e) => setTopic('pokemon')}
                        />
                    </p>
                    <p>
                        Berries:
                        <input 
                            type="radio" 
                            name="topic" 
                            id="berries"
                            checked={topic === 'berries' }
                            onChange={(e) => setTopic('berries')} 
                        />
                    </p>
                </div>
            </div>
                <p> 
                    Id: 
                    <input type="number" min="1" onChange={(e) => setId(e.target.value)}/>
                </p>
            <button className="btn btn-outline-primary">Search</button>
        </form>
    )
};

export default Form