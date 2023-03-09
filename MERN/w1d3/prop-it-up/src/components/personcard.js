import React, { Component } from "react";


class PersonCard extends Component {
    render () {
        const { firstname, lastname, age, hairColor} = this.props;
        return (<>
            <h1> {lastname}, {firstname} </h1>
            <p>Age: {age} </p>
            <p>Hair Color: {hairColor} </p>
            </>
        )
    }
}

export default PersonCard