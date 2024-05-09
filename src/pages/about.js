import React from 'react';
import { useEffect } from 'react';
import aboutBig from '../img/home_item_images/about_big.jpg';
import aboutTom from '../img/about_tom.JPG';
import { hobbies } from '../app/data/aboutdata';

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="singlepage__contentContainer">
        <div
          className="singlepage__headerImage"
          style={{
            backgroundImage: `linear-gradient(rgba(96, 92, 78, 0.5), rgba(96, 92, 78, 0.5)), url(${aboutBig})`,
          }}
        >
          <h1 className="singlepage__headerTitle">About me</h1>
        </div>
        <div className="singlepage__content">
          <div className="about__profilecontainer">
            <div className="about__profilecontainer__image">
              <img src={aboutTom}></img>
            </div>
            <div className="about__profilecontainer__text">
              <table>
                <tbody>
                  <tr>
                    <td>Name</td>
                    <td>Thomas Kranawetter</td>
                  </tr>
                  <tr>
                    <td>Age</td>
                    <td>32</td>
                  </tr>
                  <tr>
                    <td>Pronouns</td>
                    <td>he/him</td>
                  </tr>
                  <tr>
                    <td>Nationality</td>
                    <td>Austrian</td>
                  </tr>
                  <tr>
                    <td>Languages</td>
                    <td>German (native), English (C1), Dutch (B1)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <h3 className="singlepage__dividerSubHeadline">Bio</h3>
          <p className="about__text">
            Hi, I'm Tom, 32, originally from Styria, Austria.
            <br />
            Computers and the internet have fascinated me since the first PC
            with an incredible 4GB hard drive and a large CRT monitor stood in
            our living room. I still remember the time when modems screamed in
            pain as they dialled into the internet, charging per minute. And my
            grandma would get upset if the phone line was busy on Sunday
            evenings because her nephew was surfing the web.
          </p>

          <p className="about__text">
            Even back then, I built websites for friends and the Big Band I
            played in, which received a new redesign every month. I taught
            myself HTML and CSS by studying the source code of other websites.
          </p>

          <p className="about__text">
            When I was 16 and decided to pursue an apprenticeship, my parents
            insisted I should learn something "proper." Due to a lack of IT
            apprenticeships at that time, I began training as a CNC specialist
            at Pankl Racing Systems.
          </p>

          <p className="about__text">
            It was a good compromise to merge programming with metal
            craftsmanship. Since precise work was always important to me and
            also enjoyable, I quickly transitioned towards quality assurance
            after my apprenticeship, changing departments within the company. I
            became a certified metrologist through AUKOM and spent many years
            writing measurement programs for ZEISS coordinate measuring
            machines.
          </p>

          <p className="about__text">
            In recent years, I was solely responsible for planning, creating,
            and maintaining these measurement programs. It was both a
            significant challenge and a tremendous opportunity for personal
            growth. Whether it was independent, solution-oriented work, project
            management, confident communication, or conflict resolution.
          </p>

          <p className="about__text">
            In 2024, my wife had the opportunity for a PhD candidacy position in
            the Netherlands. I stood at a crossroads. After 16 years in the
            automotive industry, it was time for a change and to try something
            new. Since I’ve learned a “proper job” now, I seized the opportunity
            to completely switch fields, through educational leave within a
            year, pursuing my passion, which I had since my teenage years. Thus,
            I started my journey to become a Full Stack Developer through
            various courses. With focus on the M.E.R.N. stack and responsive
            design.
          </p>

          <p className="about__text">
            Combined with my years of professional experience, the skills I
            acquired there, and the many new things I've learned, I believe it's
            the perfect blend to stay ahead for the future. And I think I've
            come a significant step closer to finding a new job that fulfils me,
            challenges me, and is enjoyable.
          </p>

          <h3 className="singlepage__dividerSubHeadline">
            Hobbies and things I like
          </h3>
          <div className="about__hobbiesContainer">
            {hobbies.map((hobbies, index) => (
              <div className="about__hobbiesContainer__hobby" key={index}>
                <div className="about__hobbiesContainer__hobby__image">
                  {' '}
                  <img src={hobbies.hobbyimage} alt={hobbies.alt}></img>
                </div>
                <div className="about__hobbiesContainer__hobby__text">
                  <p>{hobbies.hobbyname}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
