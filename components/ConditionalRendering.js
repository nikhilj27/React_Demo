import React from 'react';
import ChildConditioanl from './ChildConditional';

class ConditionalRendering extends React.Component {
  constructor() {
    super();

    this.state = {
      isLoading: true
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState ( {
        isLoading: false
      });
    }, 1500);
  }

  render() {
    return (
      <div>
        <ChildConditioanl isLoading={this.state.isLoading} />
      </div>
    );
  }
}

export default ConditionalRendering;
