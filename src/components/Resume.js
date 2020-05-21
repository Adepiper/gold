import React from 'react';

export default function Resume() {
  return (
    <>
      <section id='resume' className='resume'>
        <h3>Work Experience </h3>
        <hr />
        <div className='card-container'>
          <div className='cards'>
            <div className='card-front'>
              <h2>RUBITEC NIGERIA LIMITED</h2>
              <p>
                Assistant Business Development Manager and Project Oﬃcer
                <br />
                <span>Dec 2019 - Present</span>
              </p>
            </div>
            <div className='card-back'>
              <ul>
                <li>
                  Develop proﬁtable business proposals for Commercial and
                  Industrial projects{' '}
                </li>
                <li>
                  Creation of work plans and process ﬂow for projects, and
                  tracking progress of running project using milestone{' '}
                </li>
                <li>
                  Perform energy audit, create system design and supervise
                  deployment of eﬃcient PV system to support client's need, one
                  of which include a 11.7kW hybrid solar system at a bank branch
                  Engineering Team
                </li>
              </ul>
            </div>
          </div>
          <div className='cards'>
            <div className='card-front'>
              <h2> POWEREX LIMITED</h2>
              <p>
                Graduate Intern, Technical Service
                <br />
                <span> Jan 2019 - Mar 2019</span>
              </p>
            </div>
            <div className='card-back'>
              <ul>
                <li>
                  Provided technical reports and created system designs using
                  engineering Computer Aided Design software
                </li>
                <li>
                  Provided technical support, analysed products to identify
                  point of failure and provide recommendations.
                </li>
                <li>
                  Involved in ﬁeld service activities including the installation
                  of 1MVA Servo-AVR and 3 x 200kVA UPS - Involved in preventive
                  and corrective maintenance of power equipment.
                </li>
              </ul>
            </div>
          </div>
          <div className='cards'>
            <div className='card-front'>
              <h2>THE STARHUB </h2>
              <p>
                Team Lead
                <br />
                <span> Mar 2017 - Present</span>
              </p>
            </div>
            <div className='card-back'>
              <ul>
                <li>
                  Provided over 70 livestreaming solutions on Facebook, YouTube
                  and Twitter
                </li>
                <li>
                  Led a 3-member team to increasing viewership by over 500% in 6
                  months
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
