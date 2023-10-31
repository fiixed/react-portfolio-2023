import React from 'react';
import './portfolio.css';
import data from '../../utils/constant.js';


const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Examples Of My Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(
          ({
            id,
            image,
            title,
            sub,
            github,
            githubfront,
            githubback,
            demo,
            youtube,
            appstore,
            homepage,
          }) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={image} alt={title} id='image'  />
                </div>
                <h3>{title}</h3>
                <small className='text-light'>{sub}</small>
                <div className='portfolio__item-cta'>
                  {github ? (
                    <a
                      href={github}
                      className='btn-port btn-primary'
                      target='_blank'
                      rel='noreferrer'
                    >
                      Github
                    </a>
                  ) : null}
                  {githubfront ? (
                    <a
                      href={githubfront}
                      className='btn-port btn-primary'
                      target='_blank'
                      rel='noreferrer'
                    >
                      Github Front
                    </a>
                  ) : null}
                  {githubback ? (
                    <a
                      href={githubback}
                      className='btn-port btn-primary'
                      target='_blank'
                      rel='noreferrer'
                    >
                      Github Back
                    </a>
                  ) : null}
                  {youtube ? (
                    <a
                      href={youtube}
                      className='btn-port btn-primary'
                      target='_blank'
                      rel='noreferrer'
                    >
                      YouTube
                    </a>
                  ) : null}
                  {appstore ? (
                    <a
                      href={appstore}
                      className='btn-port btn-primary'
                      target='_blank'
                      rel='noreferrer'
                    >
                      App Store
                    </a>
                  ) : null}
                  {homepage ? (
                    <a
                      href={homepage}
                      className='btn-port btn-primary'
                      target='_blank'
                      rel='noreferrer'
                    >
                      Home Page
                    </a>
                  ) : null}

                  {demo && id !== 8 ? (
                    <a
                      href={demo}
                      className='btn-port btn-primary'
                      target='_blank'
                      rel='noreferrer'
                    >
                      Live Demo
                    </a>
                  ) : null}
                </div>
              </article>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Portfolio;
