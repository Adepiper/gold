import React from 'react';
import freeLogo from '../images/freeLogo.jpg';

export default function Contact() {
  return (
    <>
      <section className='contact' id='contact'>
        <h4>You like what you see?</h4>
        <img src={freeLogo} alt='' />

        <div className='phonemail'>
          <a href='tel:07084186146'>
            <i className='fas fa-mobile icon-2x'></i>
            07059197022
          </a>
        </div>

        <div className='phonemail'>
          <a href='mailto:tech.49@yahoo.com'>
            <i className='far fa-envelope'></i>
            tech.49@yahoo.com
          </a>
        </div>

        <div className='socialMedia'>
          <button id='twitter'>
            <i className='fab fa-twitter'></i>
          </button>
          <button id='facebook'>
            <i className='fab fa-facebook'></i>
          </button>
          <button id='instagram'>
            <i className='fab fa-instagram'></i>
          </button>
          <button id='linkedin'>
            <i className='fab fa-linkedin'></i>
          </button>
        </div>
        <p id='copyright'> Gold &copy; {getYear()}</p>
      </section>
    </>
  );
}

function getYear() {
  const date = new Date();
  const year = date.getFullYear();
  return year;
}
