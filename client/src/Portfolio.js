import React, { Component } from 'react';
import InfoForm from './InfoForm';
import table from './images/table.png';

class Portfolio extends Component {
  constructor(props) {
    super(props)
    this.state = {
      image: table,
      user: {}
    };
  }

  render() {
    return (
      <div className='UserProfileBox'>
        <h2>Portfolio Page</h2>
        <InfoForm />
        <br></br>
        <img className="table" src={this.state.image} />
      </div>
    );
  }
}

export default Portfolio;
