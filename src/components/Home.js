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

  ResumeUi = () => {
    const cardsEl = document.querySelectorAll('.carder');
    const next = document.getElementById('next');
    const prev = document.getElementById('prev');
    let activeCard = 0;

    next.addEventListener('click', getNextCard.bind(null, cardsEl, activeCard));

    prev.addEventListener(
      'click',
      getPreviousCard.bind(null, cardsEl, activeCard)
    );
    singleCard(cardsEl, activeCard);
    updateCurrentText(cardsEl, activeCard);
  };

  componentDidUpdate() {
    this.ResumeUi();
  }
  componentDidMount() {
    this.jQuery();
    this.ResumeUi();
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

function singleCard(cards, activeCard) {
  cards.forEach((card, index) => {
    if (index === 0) {
      card.classList.add('active');
    }
    updateCurrentText(cards, activeCard);
  });
}

const getNextCard = (card, activeCard) => {
  card[activeCard].className = 'carder left';
  activeCard = activeCard + 1;

  if (activeCard > card.length - 1) {
    activeCard = card.length - 1;
  }

  card[activeCard].className = 'carder active';

  updateCurrentText(card, activeCard);
};

function getPreviousCard(card, activeCard) {
  card[activeCard].className = 'carder right';
  activeCard = activeCard - 1;
  if (activeCard < 0) {
    activeCard = 0;
  }

  card[activeCard].className = 'carder active';
  updateCurrentText(card, activeCard);
}
function updateCurrentText(card, activeCard) {
  const currentEl = document.getElementById('current');

  currentEl.innerText = `${activeCard + 1}/${card.length}`;
}

export default Home;
