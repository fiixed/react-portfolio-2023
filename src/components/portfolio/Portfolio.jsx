import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/nasa.png';
import IMG2 from '../../assets/hikehunter.png';
import IMG3 from '../../assets/pong.png';
import IMG4 from '../../assets/projectmgmtgraphql.png';
import IMG5 from '../../assets/ecommerceapi.png';
import IMG6 from '../../assets/portfolio2023.png';
import IMG7 from '../../assets/portfolio2021.png';
import IMG8 from '../../assets/ecommerce.png';
import IMG9 from '../../assets/hookstactoe.png';
import IMG10 from '../../assets/reduxtactoe.png';
import IMG11 from '../../assets/video_diary.png';
import IMG12 from '../../assets/invest_austin.png';

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'NASA Mission Control API',
    sub: 'Mostly backend project using Express, Node, Mongo w/ React frontend.  Hosted on AWS w/ Docker.',
    github: 'https://github.com/fiixed/nasa-mission-control',
    demo: 'https://andrewsherrod.com/',
  },
  {
    id: 2,
    image: IMG2,
    title: 'Hike Hunter',
    sub: 'Full stack project using EJS, Express and Mongo.',
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
    title: 'Project Mgmt GraphQL API',
    sub: 'Mostly backend project using GraphQL w/ React frontend.',
    github: 'https://github.com/fiixed/project-mgmt-app-graphql/tree/main',
    demo: 'https://project-mgmt-app-graphql-frontend.onrender.com/',
  },
  {
    id: 5,
    image: IMG5,
    title: 'NodeJS E-Commerce API',
    sub: 'Backend-only API for e-commerce site using Express, Cloudinary, Stripe and Mongo (Frontend coming soon).',
    github: 'https://github.com/fiixed/nodejs-ecommerce-api',
  },
  {
    id: 6,
    image: IMG6,
    title: 'Andrew Sherrod 2023 Portfolio',
    sub: 'Frontend-only React portfolio refreshed for 2023.  Built from scratch, no templates.',
    github: 'https://github.com/fiixed/react-portfolio-2023',
  },
  {
    id: 7,
    image: IMG7,
    title: 'Andrew Bell 2021 Portfolio',
    sub: 'Frontend-only React portfolio built from scratch in 2021.  Hosted on Firebase.  (Bell is my maiden name).',
    github: 'https://github.com/fiixed/react-portfolio',
    demo: 'https://andrew-bell-react-portfolio.web.app/',
  },
  {
    id: 8,
    image: IMG8,
    title: 'Full Stack E-commerce w/ Stripe',
    sub: 'Capstone project built with React, Redux, Ant, Node, Express, Cloudinary, Stripe, Firebase and Mongo',
    github: 'https://github.com/fiixed/react-whitelabel-ecommerce-front',
    demo: 'https://github.com/fiixed/react-whitelabel-ecommerce-back',
  },
  {
    id: 9,
    image: IMG9,
    title: 'React Hooks Tac Toe',
    sub: 'I built two versions of the same game, one using Hooks and another using Redux for state management',
    github: 'https://github.com/fiixed/react-hooks-tac-toe',
    demo: 'https://react-hooks-tac-toe.web.app/',
  },
  {
    id: 10,
    image: IMG10,
    title: 'React Redux Tac Toe',
    sub: 'I built two versions of the same game, one using Hooks and another using Redux for state management',
    github: 'https://github.com/fiixed/react-redux-tac-toe',
    demo: 'https://react-redux-tac-toe-9.web.app/',
  },
  {
    id: 11,
    image: IMG11,
    title: 'Video Diary',
    sub: 'Video diary mobile app built using Flutter',
    github: 'https://github.com/fiixed/Video-Diary-Flutter',
  },
  {
    id: 12,
    image: IMG12,
    title: 'Invest Austin',
    sub: 'Google Tango AR app built for the City of Austin.  Was presented at Unite 17, see link below for conference Apresentation',
    youtube: 'https://www.youtube.com/watch?v=QDQsg1hPa38',
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Examples Of My Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, sub, github, demo, youtube }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <small className="text-light">{sub}</small>
              <div className="portfolio__item-cta">
                {id == 8 ? (
                  <a href={github} className="btn" target="_blank">
                    Github Front
                  </a>
                ) : null}
                {id != 8 && id!=12 ? (
                  <a href={github} className="btn" target="_blank">
                    Github
                  </a>
                ) : null}
                {id == 12 ? (
                  <a href={github} className="btn" target="_blank">
                    YouTube
                  </a>
                ) : null}

                {demo && id != 8 ? (
                  <a href={demo} className="btn btn-primary" target="_blank">
                    Live Demo
                  </a>
                ) : null}
                {id == 8 ? (
                  <a href={demo} className="btn btn-primary" target="_blank">
                    Github Back
                  </a>
                ) : null}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
