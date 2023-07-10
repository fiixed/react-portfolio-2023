import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/nasa.png';
import IMG2 from '../../assets/hikehunter.png';
import IMG3 from '../../assets/pong.png';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.jpg';

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'NASA Mission Control API',
    sub: 'Mostly backend project using Express, Node, Mongo w/ React frontend.  Hosted on AWS w/ Docker',
    github: 'https://github.com/fiixed/nasa-mission-control',
    demo: 'https://andrewsherrod.com/',
  },
  {
    id: 2,
    image: IMG2,
    title: 'Hike Hunter',
    sub: 'Full stack project using EJS, Express and Mongo',
    github: 'https://github.com/fiixed/hikehunter',
    demo: 'https://hike-hunter.onrender.com/',
  },
  {
    id: 3,
    image: IMG3,
    title: 'Multi-player Pong',
    sub: 'Multi-player Pong game using Sockets',
    github: 'https://github.com/fiixed/multi-player-pong-sockets',
  },
  {
    id: 4,
    image: IMG4,
    title: 'Maintaining tasks and tracking progress',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/16955822-Maintaining-tasks-and-tracking-progress',
  },
  {
    id: 5,
    image: IMG5,
    title: 'Charts templates & infographics in Figma',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/16541289-Orion-UI-kit-Charts-templates-infographics-in-Figma',
  },
  {
    id: 6,
    image: IMG6,
    title: 'Charts templates & infographics in Figma',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/15887665-Orion-UI-kit-Charts-templates-infographics-in-Figma',
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Examples Of My Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, sub, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <small className="text-light">{sub}</small>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                { demo ? <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a> : null}
                
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
