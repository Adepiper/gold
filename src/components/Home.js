/* global $ */

import React, { Component } from 'react';
import './Home.css';
import Gold from '../images/Gold.jpg';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import Resume from './Resume';

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
            {/* <h1>Oluwapelumi Gold </h1>
          <hr />
          <Buttons /> */}

            {/* <img src={Gold} alt='' />

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae atque
            quisquam optio nam debitis hic dolore, magni, maiores animi
            similique est sed ab tempora possimus aspernatur fugiat iure tenetur
            autem.
          </p> */}

            <div className='row'>
              <div className='col-md-4 text-center'>
                <img src={Gold} alt='' />
              </div>
              <div className='col-md-8 text-center'>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                  atque quisquam optio nam debitis hic dolore, magni, maiores
                  animi similique est sed ab tempora possimus aspernatur fugiat
                  iure tenetur autem.
                </p>
                <Link to=''>Hire Me</Link>
              </div>
            </div>
          </div>
        </div>
        <NavBar />
        <section id='services' class='jumbotron text-center'>
          <div class='col-12 narrow text-center'>
            <h3 class='heading'>SERVICES</h3>
            <div class='heading-underline text-center'></div>
          </div>

          <div class='row'>
            <div class='col-md-3 narrow'>
              <div class='feature'>
                <i
                  class='fas fa-shipping-fast fa-4x'
                  data-fa-transform='shrink-3 up-3'
                ></i>
              </div>
              <h3>Fast</h3>
              <p class='lead'>
                Fast load times and lag free interaction, my highest priority.
              </p>
            </div>

            <div class='col-md-3 narrow'>
              <div class='feature'>
                <i
                  class='fas fa-sliders-h fa-4x'
                  data-fa-transform='shrink-4.5 up-3'
                ></i>
              </div>
              <h3>Responsive</h3>
              <p class='lead'>
                My layouts will work on any device, big or small.
              </p>
            </div>

            <div class='col-md-3 narrow'>
              <div class='feature'>
                <i
                  class='fab fa-angrycreative fa-4x'
                  data-fa-transform='shrink-3.5 up-3'
                ></i>
              </div>
              <h3>Creativity</h3>
              <p class='lead'>
                Unique UI/UX design patterns that your users are guaranteed to
                love
              </p>
            </div>
            <div class='col-md-3 narrow'>
              <div class='feature'>
                <i
                  class='fas fa-shield-alt fa-4x'
                  data-fa-transform='shrink-3.5 up-3'
                ></i>
              </div>
              <h3>Security</h3>
              <p class='lead'>
                All my products are created with security in mind so you can be
                sure no attacker is eavesdropping
              </p>
            </div>
          </div>
        </section>
        <Resume />
      </>
    );
  }
}

export default Home;
