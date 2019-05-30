import React from 'react';

function Conditioanl(props) {
  return (
    <div>
      {props.isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <h1>Some cool stuff about rendering..</h1>
      )}
    </div>
  );
}
export default Conditioanl;
