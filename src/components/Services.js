import React from 'react';

export default function Services() {
  return (
    <>
      <section id='services' className='jumbotron text-center services'>
        <div className='narrow text-center'>
          <h2 className='heading'>SERVICES</h2>
          {/* <div class='heading-underline text-center'></div> */}
          <hr />
        </div>

        <div className='row'>
          <div className='col-md-3 narrow  service'>
            <div className='feature'>
              <i
                className='fas fa-shipping-fast fa-4x'
                data-fa-transform='shrink-3 up-3'
              ></i>
            </div>
            <h3>Fast</h3>
            <p className='lead'>
              Fast load times and lag free interaction, my highest priority.
            </p>
          </div>

          <div className='col-md-3 narrow  service'>
            <div className='feature'>
              <i
                className='fas fa-sliders-h fa-4x'
                data-fa-transform='shrink-4.5 up-3'
              ></i>
            </div>
            <h3>Responsive</h3>
            <p className='lead'>
              My layouts will work on any device, big or small.
            </p>
          </div>

          <div className='col-md-3 narrow  service'>
            <div className='feature'>
              <i
                className='fab fa-angrycreative fa-4x'
                data-fa-transform='shrink-3.5 up-3'
              ></i>
            </div>
            <h3>Creativity</h3>
            <p className='lead'>
              Unique UI/UX design patterns that your users are guaranteed to
              love
            </p>
          </div>
          <div className='col-md-3 narrow service'>
            <div className='feature'>
              <i
                className='fas fa-shield-alt fa-4x'
                data-fa-transform='shrink-3.5 up-3'
              ></i>
            </div>
            <h3>Security</h3>
            <p className='lead'>
              All my products are created with security in mind so you can be
              sure no attacker is eavesdropping
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
