import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div>
      <nav className='navbar navbar-expand-md navbar-dark bg-dark px-0'>
        <Link to='/' className='navbar-brand mx-3 font-weight-bold'>
          Oluwapelumi Gold
        </Link>

        <button
          className='navbar-toggler navbar-toggler-white'
          data-toggle='collapse'
          data-target='#myNavbar'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse  px-4 py-3' id='myNavbar'>
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item active'>
              <a href='#about' className='nav-link text-white'>
                ABOUT
              </a>
            </li>
            <li className='nav-item'>
              <a href='#services' className='nav-link text-white'>
                SERVICES
              </a>
            </li>
            <li className='nav-item'>
              <a href='#resume' className='nav-link text-white'>
                RESUME
              </a>
            </li>
            <li className='nav-item'>
              <a href='#portfolio' className='nav-link text-white'>
                PORTFOLIO
              </a>
            </li>
            <li className='nav-item'>
              <a href='#techstack' className='nav-link text-white'>
                TECH STACK
              </a>
            </li>
            <li className='nav-item'>
              <a href='#contact' className='nav-link text-white'>
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
