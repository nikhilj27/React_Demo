import React from 'react';

class ConditioanlRenderingPractice extends React.Component {
  constructor() {
    super();

    this.state = {
      isLogged: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => {
      return {
        isLogged: !prevState.isLogged
      };
    });
  }

  render() {
    var status;
    var buttontext;
    if (this.state.isLogged === true) {
      status = 'In';
      buttontext = 'out';
    } else {
      status = 'out';
      buttontext = 'In';
    }

    return (
      <div>
        <button onClick={this.handleClick}>Log {buttontext}</button>

        <h1>Logged {status}</h1>
      </div>
    );
  }
}

export default ConditioanlRenderingPractice;
