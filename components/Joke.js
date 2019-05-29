import React from 'react';

function Joke(props) {
  return (
    <div className='container'>
      <div className='card'>
        <h3>Question: {props.question}</h3>
        <h3>Answer: {props.punchLine}</h3>
      </div>
      <br />
    </div>
  );
}

export default Joke;
