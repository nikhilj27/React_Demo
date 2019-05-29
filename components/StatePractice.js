import React from 'react';

class StatePractice extends React.Component{

    constructor(){
        super();

        this.state = {
            name : 'John Wick',
            age : 45
        }
    }

    render(){
        return (
            <div>
                <h1>{this.state.name}</h1>
                <h3>{this.state.age} years old</h3>
            </div>
        )
    }
}

export default StatePractice;