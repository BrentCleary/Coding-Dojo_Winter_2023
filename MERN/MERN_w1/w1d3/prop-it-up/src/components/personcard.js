import React, { Component } from "react";

class PersonCard extends Component {

    // Declare constructor to override default constructor to set the state object
    constructor(props){
        // Super gives us all the functionality of the default constructor that comes with componenent
        super(props);
        this.state = {
            age: props.age
        }

    }

    changeAge = (e) => {
        this.setState({age: this.state.age + 1})
    }

    render () {
        const { firstname, lastname, age, hairColor} = this.props;
        return (<>
            <h1> {lastname}, {firstname} </h1>
            <p>Age: {this.state.age} </p>
            <p>Hair Color: {hairColor} </p>
            <button onClick={this.changeAge}>Happy Birthday {firstname} {lastname}</button>
            </>
        )
    }
}

export default PersonCard