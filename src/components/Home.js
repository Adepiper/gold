import React, { Component } from 'react';
import Buttons from './Buttons';
import './Home.css';

export class Home extends Component {
  render() {
    return (
      <div className='homePage'>
        <div className='icons'>
          {/* <h1>Oluwapelumi Gold </h1>
          <hr />
          <Buttons /> */}

          <div className='row'>
            <div className='col-md-6'>
              <img src='../images/IMG-20190204-WA0003.jpg' alt='' />
            </div>
            <div className='col-md-6'></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
