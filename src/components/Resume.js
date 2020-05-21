import React from 'react';

export default function Resume() {
  return (
    <>
      <section id='resume' className='resume'>
        <h3>Work Experience </h3>
        <div id='card-container' className='cards'>
          <div className='carder'>
            <div className='inner-card'>hellow</div>
          </div>
          <div className='carder'>
            <div className='inner-card'>how are you</div>
          </div>
          <div className='carder'>
            <div className='inner-card'>fine</div>
          </div>

          <div className='carder'>
            <div className='inner-card'>its okay</div>
          </div>
        </div>

        <div className='navigation'>
          <button id='prev' className='nav-button'>
            Prev
          </button>
          <div id='current'></div>
          <button id='next' className='nav-button'>
            Next
          </button>
        </div>
      </section>
    </>
  );
}
