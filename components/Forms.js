import React from 'react';

class Forms extends React.Component {
  constructor() {
    super();

    this.state = {
      firstName: '',
      lastName: '',
      isFriendly: true,
      gender: '',
      favColor:'blue'
    };

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event) {
    const { name, value, type, checked } = event.target;
    type === 'checkbox'
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
  }

  render() {
    return (
      <div>
        <form>
          <input
            type='text'
            name='firstName'
            value={this.state.firstName}
            placeholder='First Name'
            onChange={this.handleInput}
          />
          <br />
          <input
            type='text'
            name='lastName'
            placeholder='Last Name'
            value={this.state.lastName}
            onChange={this.handleInput}
          />
          <br />
          <textarea value={'Some default value'} onChange={this.handleInput} />
          <br />
          <input
            type='checkbox'
            name='isFriendly'
            checked={this.state.isFriendly}
            onChange={this.handleInput}
          />
          Is Friendly
          <br />
          <input
            type='radio'
            name='gender'
            value='male'
            checked={this.state.gender === 'male'}
            onChange={this.handleInput}
          />
          Male
          <br />
          <input
            type='radio'
            name='gender'
            value='female'
            checked={this.state.gender === 'female'}
            onChange={this.handleInput}
          />
          Female

          <br />
                
                <label>Favorite Color:</label>
                <select 
                    value={this.state.favColor}
                    onChange={this.handleInput}
                    name="favColor"
                >
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                    <option value="red">Red</option>
                    <option value="orange">Orange</option>
                    <option value="yellow">Yellow</option>
                </select>
        </form>

        <h1>
          {this.state.firstName} {this.state.lastName}
        </h1>
        <h1>You are {this.state.gender}</h1>
        <h2>Your favorite color is {this.state.favColor}</h2>
      </div>
    );
  }
}

export default Forms;
