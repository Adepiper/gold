/* global $ */

import React, { Component } from 'react';
import './Home.css';
import Gold from '../images/Gold.jpg';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import Resume from './Resume';
import Services from './Services';

export class Home extends Component {
  jQuery = () => {
    $(document).ready(function() {
      var navbarOffset = $('.navbar').offset().top;

      var navbarHeight = $('.navbar').outerHeight();

      $(window).on('scroll', function() {
        if ($(window).scrollTop() >= navbarOffset) {
          $('.navbar').addClass('fixed-top');

          $('body').css('padding-top', navbarHeight + 'px');
          $('.navbar').css('width', '100%');
        } else {
          $('.navbar').removeClass('fixed-top');
          $('body').css('padding-top', '0');
          $('.navbar').css('width', '100%');
        }
      });
      $('.navbar-nav>li>a').on('click', function() {
        $('.navbar-collapse').collapse('hide');
      });
    });
  };

  ResumeUi = () => {};

  componentDidMount() {
    this.jQuery();
  }

  render() {
    return (
      <>
        <div className='homePage'>
          <div className='icons'>
            <div className='row'>
              <div className='col-md-4 text-center'>
                <img src={Gold} alt='' />
              </div>
              <div className='col-md-8 text-center'>
                <p>
                  A goal oriented individual seeking to acquire knowledge and
                  experience in Renewable Energy and Data alongside improving
                  the sector through innovative ideas and excellence.
                </p>
                <Link to=''>Hire Me</Link>
              </div>
            </div>
          </div>
        </div>
        <NavBar />
        <Services />
        <Resume />
      </>
    );
  }
}

export default Home;
