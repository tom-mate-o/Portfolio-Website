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
import { furtherSkills, softSkills } from '../app/data/skillsdata';

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
            the table, which helps me create reliable, accessible, and stylish
            web applications.
            <br />
            <br />
            Here's a glimpse into my toolbox regarding hard- and soft skills:
          </p>

          <h1 className="singlepage__dividerHeadline">Hard Skills</h1>
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
                user-friendly web apps. I'm very confident within its ecosystem
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
                are well organised, structured, and accessible for users and
                screenreaders.
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
                It's great fun for me to turn blank and unstylized- into
                nice-looking websites. Making them responsive and also look good
                on all devices. And there is no better feeling than when it
                matches 100% with the design file in the end.
              </p>
            </div>
          </div>
          <h3 className="singlepage__dividerSubHeadline">Furthermore</h3>
          <div className="singlepage__furtherSkillsContainer">
            <div className="singlepage__furtherSkillsContainer">
              {furtherSkills.map((skill, index) => (
                <div
                  className="singlepage__furtherSkillsContainer__skill"
                  key={index}
                >
                  <img
                    className="singlepage__furtherSkillsContainer__skillbadge"
                    src={skill.icon}
                    alt={skill.alt}
                  />
                  <p>{skill.title}</p>
                </div>
              ))}
            </div>
          </div>

          <h1 className="singlepage__dividerHeadline">Soft Skills</h1>
          <div className="singlepage__furtherSkillsContainer">
            {softSkills.map((skill, index) => (
              <div
                className="singlepage__furtherSkillsContainer__skill"
                key={index}
              >
                <img
                  className="singlepage__furtherSkillsContainer__skillbadge"
                  src={skill.icon}
                  alt={skill.alt}
                />
                <p>{skill.title}</p>
              </div>
            ))}
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
