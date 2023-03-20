import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Form = () => {

    // Set topic for search
    const [topic, setTopic] = useState('');
    const [id, setId] = useState(1)

    const nav = useNavigate();

    // Submission event
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(topic);
        console.log(id);

        nav(`/${topic}/${id}`);
    }


    return (

        <form onSubmit={handleSubmit}>
            <div>
                <h3>Search For:</h3>
                <div>
                    <p>
                        People:
                        <input
                            type="radio"
                            name='topic'
                            id='people'
                            checked={topic === 'people'}
                            onChange={(e) => setTopic('people')}
                        />
                    </p>
                    <p>
                        Planets:
                        <input
                            type="radio"
                            name='topic'
                            id='planets'
                            checked={topic === 'planets'}
                            onChange={(e) => setTopic('planets')}
                        />
                    </p>

                </div>
            </div>
            <p>
                Id:
                <input type="number" min="1" onChange={(e) => setId(e.target.value)}/>
            </p>
            <button className='btn btn-success'>Submit</button>
        </form>
    )

}

export default Form