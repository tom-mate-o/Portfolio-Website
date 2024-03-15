import React from 'react';
import { useEffect } from 'react';
import skillsBig from '../img/home_item_images/skills_big.jpg';
import mongoDB from '../img/mongodb.png';
import express from '../img/express.png';
import react from '../img/react.png';
import node from '../img/node.png';
import sass from '../img/sass.png';
import js from '../img/js.png';
import html5 from '../img/html5.png';
import css3 from '../img/css3.png';
import { skillicons } from '../app/data/skillicons';

export default function Skills() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="singlepage__contentContainer">
        <div
          className="singlepage__headerImage"
          style={{
            backgroundImage: `linear-gradient(rgba(96, 92, 78, 0.5), rgba(96, 92, 78, 0.5)), url(${skillsBig})`,
          }}
        >
          <h1 className="singlepage__headerTitle">Skills</h1>
        </div>
        <div className="singlepage__content">
          <p className="singlepage__skillcontainer__introtext">
            As a Full Stack Web Developer, I bring a broad range of abilities to
            the table, which helps me to create reliable, accessible and stylish
            web applications.
            <br />
            <br />
            Here's a glimpse into my toolbox regarding hard- and soft skills:
          </p>

          <h1 class="singlepage__dividerHeadline">Hard Skills</h1>
          <div className="singlepage__skillcontainer">
            <div className="singlepage__skillcontainer__image">
              <img
                className="singlepage__skillcontainer__skillbadge"
                src={mongoDB}
                alt="MongoDB"
              />
            </div>
            <div className="singlepage__skillcontainer__text">
              <h2>MongoDB</h2>
              <p>
                I'm skilled at working with MongoDB in comination with Mongoose,
                where I can create, read, filter, update, and delete data
                easily.
              </p>
            </div>
          </div>

          <div className="singlepage__skillcontainer">
            <div className="singlepage__skillcontainer__image">
              <img
                className="singlepage__skillcontainer__skillbadge"
                src={express}
                alt="Express"
              />
            </div>
            <div className="singlepage__skillcontainer__text">
              <h2>Express</h2>
              <p>
                Using Express.js, I can develop robust web applications. It's my
                reliable companion for crafting a REST backend and combining it
                with MongoDB.
              </p>
            </div>
          </div>

          <div className="singlepage__skillcontainer">
            <div className="singlepage__skillcontainer__image">
              <img
                className="singlepage__skillcontainer__skillbadge"
                src={react}
                alt="React"
              />
            </div>
            <div className="singlepage__skillcontainer__text">
              <h2>React</h2>
              <p>
                React is my go-to framework for building dynamic and
                user-friendly web apps. I'm very confident within is ecosystem
                using hooks, variables, the component-based architecture, and
                also styling them within styled-components.
              </p>
            </div>
          </div>

          <div className="singlepage__skillcontainer">
            <div className="singlepage__skillcontainer__image">
              <img
                className="singlepage__skillcontainer__skillbadge"
                src={node}
                alt="Node.js"
              />
            </div>
            <div className="singlepage__skillcontainer__text">
              <h2>Node.js</h2>
              <p>
                Node.js is my preferred runtime environment for building server
                & backend applications. I'm familiar with the npm-package system
                and setting up a development environment.
              </p>
            </div>
          </div>

          <div className="singlepage__skillcontainer">
            <div className="singlepage__skillcontainer__image">
              <img
                className="singlepage__skillcontainer__skillbadge"
                src={sass}
                alt="Sass"
              />
            </div>
            <div className="singlepage__skillcontainer__text">
              <h2>Sass</h2>
              <p>
                Sass helps me write clean and easy-to-maintain CSS code. I love
                to modularize my stylesheets and use variables, mixins, and
                functions to make them more efficient.
              </p>
            </div>
          </div>

          <div className="singlepage__skillcontainer">
            <div className="singlepage__skillcontainer__image">
              <img
                className="singlepage__skillcontainer__skillbadge"
                src={js}
                alt="JavaScript"
              />
            </div>
            <div className="singlepage__skillcontainer__text">
              <h2>JavaScript</h2>
              <p>
                When it comes to interactivity and dynamic content, and React is
                not an option, JavaScript is always a reliable choice. I'm
                familiar with ES6 and the most important concepts and methods.
              </p>
            </div>
          </div>

          <div className="singlepage__skillcontainer">
            <div className="singlepage__skillcontainer__image">
              <img
                className="singlepage__skillcontainer__skillbadge"
                src={html5}
                alt="HTML5"
              />
            </div>
            <div className="singlepage__skillcontainer__text">
              <h2>HTML5</h2>
              <p>
                HTML5 is the cornerstone of my web page creation, ensuring they
                well-organized structured and accessible for users and
                screenreaders .
              </p>
            </div>
          </div>

          <div className="singlepage__skillcontainer">
            <div className="singlepage__skillcontainer__image">
              <img
                className="singlepage__skillcontainer__skillbadge"
                src={css3}
                alt="CSS3"
              />
            </div>
            <div className="singlepage__skillcontainer__text">
              <h2>CSS3</h2>
              <p>
                It's great fun for me to turn blank, unstylized- into
                nice-looking websites. Making them look great and responsive on
                all devices. And there is no better feeling than when it matches
                100% with the design file.
              </p>
            </div>
          </div>
          <h3 className="singlepage__dividerSubHeadline">Furthermore</h3>
          <div className="singlepage__furtherSkillsContainer">
            <div className="singlepage__furtherSkillsContainer__skill">
              <img
                className="singlepage__furtherSkillsContainer__skillbadge"
                src={skillicons.versioncontrol}
                alt="CSS3"
              />
              <p>Version Control with Git and GitHub</p>
            </div>
            <div className="singlepage__furtherSkillsContainer__skill">
              <img
                className="singlepage__furtherSkillsContainer__skillbadge"
                src={skillicons.fullstackapp}
                alt="CSS3"
              />
              <p>Developing a Full Stack Web App</p>
            </div>
            <div className="singlepage__furtherSkillsContainer__skill">
              <img
                className="singlepage__furtherSkillsContainer__skillbadge"
                src={skillicons.deployment}
                alt="CSS3"
              />
              <p>Deployment with Heroku and Netlify</p>
            </div>
            <div className="singlepage__furtherSkillsContainer__skill">
              <img
                className="singlepage__furtherSkillsContainer__skillbadge"
                src={skillicons.api}
                alt="CSS3"
              />
              <p>Creating an API Deployment on RapidAPI</p>
            </div>
            <div className="singlepage__furtherSkillsContainer__skill">
              <img
                className="singlepage__furtherSkillsContainer__skillbadge"
                src={skillicons.problemdecomposition}
                alt="CSS3"
              />
              <p>Problem Decomposition</p>
            </div>
            <div className="singlepage__furtherSkillsContainer__skill">
              <img
                className="singlepage__furtherSkillsContainer__skillbadge"
                src={skillicons.thinkinginreact}
                alt="CSS3"
              />
              <p>Thinking in React</p>
            </div>
            <div className="singlepage__furtherSkillsContainer__skill">
              <img
                className="singlepage__furtherSkillsContainer__skillbadge"
                src={skillicons.asyncprogramming}
                alt="CSS3"
              />
              <p>Functional & Asynchronous Programming</p>
            </div>
            <div className="singlepage__furtherSkillsContainer__skill">
              <img
                className="singlepage__furtherSkillsContainer__skillbadge"
                src={skillicons.algorithm}
                alt="CSS3"
              />
              <p>Designing Algorithms</p>
            </div>
            <div className="singlepage__furtherSkillsContainer__skill">
              <img
                className="singlepage__furtherSkillsContainer__skillbadge"
                src={skillicons.ideas}
                alt="CSS3"
              />
              <p>Making Ideas Visible on a MIRO Board</p>
            </div>
            <div className="singlepage__furtherSkillsContainer__skill">
              <img
                className="singlepage__furtherSkillsContainer__skillbadge"
                src={skillicons.mockup}
                alt="CSS3"
              />
              <p>Designing Mockups with FIGMA</p>
            </div>
          </div>

          <h1 class="singlepage__dividerHeadline">Soft Skills</h1>
          <div className="singlepage__furtherSkillsContainer">
            <div className="singlepage__furtherSkillsContainer__skill">
              <img
                className="singlepage__furtherSkillsContainer__skillbadge"
                src={skillicons.scrum}
                alt="CSS3"
              />
              <p>Project Management with SCRUM</p>
            </div>
            <div className="singlepage__furtherSkillsContainer__skill">
              <img
                className="singlepage__furtherSkillsContainer__skillbadge"
                src={skillicons.confidentcommunication}
                alt="CSS3"
              />
              <p>Confident Communication</p>
            </div>
            <div className="singlepage__furtherSkillsContainer__skill">
              <img
                className="singlepage__furtherSkillsContainer__skillbadge"
                src={skillicons.growthmindset}
                alt="CSS3"
              />
              <p>Growth Mindset</p>
            </div>
            <div className="singlepage__furtherSkillsContainer__skill">
              <img
                className="singlepage__furtherSkillsContainer__skillbadge"
                src={skillicons.focus}
                alt="CSS3"
              />
              <p>Concentration & Focus</p>
            </div>
            <div className="singlepage__furtherSkillsContainer__skill">
              <img
                className="singlepage__furtherSkillsContainer__skillbadge"
                src={skillicons.timemanagement}
                alt="CSS3"
              />
              <p>Time Management</p>
            </div>
            <div className="singlepage__furtherSkillsContainer__skill">
              <img
                className="singlepage__furtherSkillsContainer__skillbadge"
                src={skillicons.selfmotivation}
                alt="CSS3"
              />
              <p>Self-Motivation</p>
            </div>
            <div className="singlepage__furtherSkillsContainer__skill">
              <img
                className="singlepage__furtherSkillsContainer__skillbadge"
                src={skillicons.solutionfocused}
                alt="CSS3"
              />
              <p>Solution Oriented</p>
            </div>
            <div className="singlepage__furtherSkillsContainer__skill">
              <img
                className="singlepage__furtherSkillsContainer__skillbadge"
                src={skillicons.sparkingflame}
                alt="CSS3"
              />
              <p>Sparking the Flame in Others</p>
            </div>
            <div className="singlepage__furtherSkillsContainer__skill">
              <img
                className="singlepage__furtherSkillsContainer__skillbadge"
                src={skillicons.flexible}
                alt="CSS3"
              />
              <p>Flexibility</p>
            </div>
            <div className="singlepage__furtherSkillsContainer__skill">
              <img
                className="singlepage__furtherSkillsContainer__skillbadge"
                src={skillicons.adaptive}
                alt="CSS3"
              />
              <p>Adaptiveness</p>
            </div>
          </div>
          <div className="singlepage__furtherSkillsContainer__iconCredit">
            <a
              href="https://www.flaticon.com/authors/freepik"
              title="Icons created by Freepik - Flaticon"
            >
              Icons created by Freepik - Flaticon
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
