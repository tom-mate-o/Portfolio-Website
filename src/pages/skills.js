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
            As a Full Stack Web Developer....
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
                I have experience working with MongoDB and can perform CRUD
                operations using the MongoDB database.
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
                I am proficient in using Express.js to build robust and scalable
                web applications.
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
                I have extensive experience in developing web applications using
                React and its ecosystem.
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
                I am proficient in building server-side applications using
                Node.js and its frameworks.
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
                I have experience using Sass to write modular and maintainable
                CSS for web applications.
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
                I am proficient in JavaScript and can develop interactive and
                dynamic web applications using modern JavaScript frameworks and
                libraries.
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
                I have a good understanding of HTML5 and can create semantic and
                accessible web pages.
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
                I am proficient in CSS3 and can style web pages with modern CSS
                techniques and frameworks.
              </p>
            </div>
          </div>
          <h3 className="singlepage__dividerSubHeadline">Furthermore</h3>
          <div className="singlepage__furtherSkillsContainer">
            <div className="singlepage__furtherSkillsContainer__skill">
              <img
                className="singlepage__furtherSkillsContainer__skillbadge"
                src={css3}
                alt="CSS3"
              />
              <p>Version Control with Git and GitHub</p>
            </div>
            <div className="singlepage__furtherSkillsContainer__skill">
              <img
                className="singlepage__furtherSkillsContainer__skillbadge"
                src={css3}
                alt="CSS3"
              />
              <p>Developing a Full Stack Web App</p>
            </div>
            <div className="singlepage__furtherSkillsContainer__skill">
              <img
                className="singlepage__furtherSkillsContainer__skillbadge"
                src={css3}
                alt="CSS3"
              />
              <p>Deployment with Heroku and Netlify</p>
            </div>
            <div className="singlepage__furtherSkillsContainer__skill">
              <img
                className="singlepage__furtherSkillsContainer__skillbadge"
                src={css3}
                alt="CSS3"
              />
              <p>Creating an API Deployment on RapidAPI</p>
            </div>
            <div className="singlepage__furtherSkillsContainer__skill">
              <img
                className="singlepage__furtherSkillsContainer__skillbadge"
                src={css3}
                alt="CSS3"
              />
              <p>Problem Decomposition</p>
            </div>
            <div className="singlepage__furtherSkillsContainer__skill">
              <img
                className="singlepage__furtherSkillsContainer__skillbadge"
                src={css3}
                alt="CSS3"
              />
              <p>Thinking in React</p>
            </div>
            <div className="singlepage__furtherSkillsContainer__skill">
              <img
                className="singlepage__furtherSkillsContainer__skillbadge"
                src={css3}
                alt="CSS3"
              />
              <p>Functional/Asynchronous Programming</p>
            </div>
            <div className="singlepage__furtherSkillsContainer__skill">
              <img
                className="singlepage__furtherSkillsContainer__skillbadge"
                src={css3}
                alt="CSS3"
              />
              <p>Designing Algorithms</p>
            </div>
            <div className="singlepage__furtherSkillsContainer__skill">
              <img
                className="singlepage__furtherSkillsContainer__skillbadge"
                src={css3}
                alt="CSS3"
              />
              <p>Making Ideas Visible on a MIRO Board</p>
            </div>
            <div className="singlepage__furtherSkillsContainer__skill">
              <img
                className="singlepage__furtherSkillsContainer__skillbadge"
                src={css3}
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
                src={css3}
                alt="CSS3"
              />
              <p>Project Management with SCRUM</p>
            </div>
            <div className="singlepage__furtherSkillsContainer__skill">
              <img
                className="singlepage__furtherSkillsContainer__skillbadge"
                src={css3}
                alt="CSS3"
              />
              <p>Confident Communication</p>
            </div>
            <div className="singlepage__furtherSkillsContainer__skill">
              <img
                className="singlepage__furtherSkillsContainer__skillbadge"
                src={css3}
                alt="CSS3"
              />
              <p>Growth Mindset</p>
            </div>
            <div className="singlepage__furtherSkillsContainer__skill">
              <img
                className="singlepage__furtherSkillsContainer__skillbadge"
                src={css3}
                alt="CSS3"
              />
              <p>Concentration & Focus</p>
            </div>
            <div className="singlepage__furtherSkillsContainer__skill">
              <img
                className="singlepage__furtherSkillsContainer__skillbadge"
                src={css3}
                alt="CSS3"
              />
              <p>Time Management</p>
            </div>
            <div className="singlepage__furtherSkillsContainer__skill">
              <img
                className="singlepage__furtherSkillsContainer__skillbadge"
                src={css3}
                alt="CSS3"
              />
              <p>Self-Motivation</p>
            </div>
            <div className="singlepage__furtherSkillsContainer__skill">
              <img
                className="singlepage__furtherSkillsContainer__skillbadge"
                src={css3}
                alt="CSS3"
              />
              <p>Solution Focus</p>
            </div>
            <div className="singlepage__furtherSkillsContainer__skill">
              <img
                className="singlepage__furtherSkillsContainer__skillbadge"
                src={css3}
                alt="CSS3"
              />
              <p>Sparking the Flame in Other People</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
