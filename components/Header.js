import React from 'react';

function Header() {
  const fName = 'React';
  const lName = 'Demo';

  const styles = {
    color: "#FF8C00", 
    backgroundColor: "#FF2D00",
    fontSize: 50
  }
  return (
    <nav>
      <h1 style={styles}>Hello {`${fName} ${lName}`}</h1>
      <ul>
        <li>Thing 1</li>
        <li>Thing 2</li>
        <li>Thing 2</li>
      </ul>
    </nav>
  );
}

export default Header;
