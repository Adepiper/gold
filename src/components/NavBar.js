import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div>
      <nav class='navbar navbar-expand-md navbar-dark bg-dark px-0'>
        <Link to='/' class='navbar-brand mx-3 font-weight-bold'>
          Oluwapelumi Gold
        </Link>

        <button
          class='navbar-toggler navbar-toggler-white'
          data-toggle='collapse'
          data-target='#myNavbar'
        >
          <span class='navbar-toggler-icon'></span>
        </button>

        <div class='collapse navbar-collapse  px-4 py-3' id='myNavbar'>
          <ul class='navbar-nav ml-auto'>
            <li class='nav-item active'>
              <a href='#about' class='nav-link text-white'>
                ABOUT
              </a>
            </li>
            <li class='nav-item'>
              <a href='#services' class='nav-link text-white'>
                SERVICES
              </a>
            </li>
            <li class='nav-item'>
              <a href='#resume' class='nav-link text-white'>
                RESUME
              </a>
            </li>
            <li class='nav-item'>
              <a href='#portfolio' class='nav-link text-white'>
                PORTFOLIO
              </a>
            </li>
            <li class='nav-item'>
              <a href='#techstack' class='nav-link text-white'>
                TECH STACK
              </a>
            </li>
            <li class='nav-item'>
              <a href='#contact' class='nav-link text-white'>
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
