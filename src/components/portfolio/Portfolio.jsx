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
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <small className="text-light">{sub}</small>
                <div className="portfolio__item-cta">
                  {github ? (
                    <a href={github} className="btn" target="_blank">
                      Github
                    </a>
                  ) : null}
                  {githubfront ? (
                    <a href={githubfront} className="btn" target="_blank">
                      Github Front
                    </a>
                  ) : null}
                  {githubback ? (
                    <a href={githubback} className="btn" target="_blank">
                      Github Back
                    </a>
                  ) : null}
                  {youtube ? (
                    <a href={youtube} className="btn" target="_blank">
                      YouTube
                    </a>
                  ) : null}
                  {appstore ? (
                    <a href={appstore} className="btn" target="_blank">
                      App Store
                    </a>
                  ) : null}
                  {homepage ? (
                    <a href={homepage} className="btn" target="_blank">
                      Home Page
                    </a>
                  ) : null}

                  {demo && id != 8 ? (
                    <a href={demo} className="btn btn-primary" target="_blank">
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
