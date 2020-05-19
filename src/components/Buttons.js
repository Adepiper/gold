import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Buttons extends Component {
  render() {
    return (
      <div className='row font-weight-bolder buttons'>
        <div className='col-md-4 mt-4'>
          <Link to='/work' className='btn btn-outline-secondary'>
            WORK
          </Link>
        </div>
        <div
          className='col-md-4 mt-4
                '
        >
          <Link to='/portfolio' className='btn btn-outline-secondary'>
            ABOUT
          </Link>
        </div>
        <div className='col-md-4 mt-4'>
          <Link to='/Contact' className='btn btn-outline-secondary'>
            CONTACT
          </Link>
        </div>
      </div>
    );
  }
}

export default Buttons;
