import React from 'react';
import google from '../images/google.jpg';
import Matlab from '../images/Matlab.jpg';
import autocard from '../images/autocard.png';
import office from '../images/office.jpg';
import pvsystems from '../images/pvsystems.jpg';
import python from '../images/python.jpg';
import tableau from '../images/tableau.png';

export default function Skillset() {
  return (
    <>
      <section id='skillset' className='skillset'>
        <h1>Skill Set</h1>
        <hr />
        <div className='images'>
          <img src={google} alt='' />
          <img src={Matlab} alt='' />
          <img src={autocard} alt='' />
          <img src={office} alt='' />
          <img src={pvsystems} alt='' />
          <img src={python} alt='' />
          <img src={tableau} alt='' />
        </div>
      </section>
    </>
  );
}
