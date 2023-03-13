import React, { useReducer } from 'react'

const initialState = {
    firstName: {
        value: '',
        error: null
    },
    lastName: {
        value: '',
        error: null
    },
    email: {
        value: '',
        error: null
        }
    };


function reducer(state, action) {
    return {
        ...state,
        [action.type]: action.payload
    };
}


export default () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    function handleFirstName(e) {
        const { firstName, value } = e.target;
        dispatch({
            type: firstName,
            payload: value
        });
    }

    function handleLastName(e) {
        const { lastName, value } = e.target;
        dispatch({
            type: lastName,
            payload: value
        });
    }

    function handleEmail(e) {
        const { email, value } = e.target;
        dispatch({
            type: email,
            payload: value
        });
        
    }


    return (
        <div>
            {/* {JSON.stringify(state)} */}
            <div>
                <label>
                    <span>First Name:</span>{' '}
                    <input firstName="firstName" onChange={handleFirstName} />
                </label>
            </div>
            <div>
                <label>
                    <span>Last Name:</span>{' '}
                    <input lastName="lastName" onChange={handleLastName} />
                </label>
            </div>
            <div>
                <label>
                    <span>Email:</span>{' '}
                    <input name="email" onChange={handleEmail} />
                </label>
            </div>
        </div>
    );
}