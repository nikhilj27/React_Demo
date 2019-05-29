import React from 'react';

class StatePractice2 extends React.Component{
    constructor(){
        super();

        this.state = {
            isLoggedIn : false
        }
    }
    
    render(){

        let wordDisplay ;
        if(this.state.isLoggedIn === true){
            wordDisplay = 'In'
        }else{
            wordDisplay = 'Out'
        }
        return(
            <h2>You are currently logged {wordDisplay}</h2>
        )
    }
}

export default StatePractice2