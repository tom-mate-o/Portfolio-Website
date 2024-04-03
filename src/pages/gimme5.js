import React from 'react';
import { useEffect, useState } from 'react';
import gimme5big from '../img/home_item_images/gimme5_big.jpg';
import ImageGallery from 'react-image-gallery';
import { ReactComponent as GitHubLink } from '../img/github.svg';
import { ReactComponent as WebsiteLink } from '../img/eye-regular.svg';
import { MdOutlineTouchApp } from 'react-icons/md';

import { projectdata } from '../app/data/projectdata';
import { Link } from 'react-router-dom';

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedTags, setSelectedTags] = useState(['All']);
  const [activeTag, setActiveTag] = useState('All');
  const [isGalleryActive, setIsGalleryActive] = useState(false);

  const project = projectdata.find(
    (project) => project.name === 'Gimme 5 - Social App'
  );

  const [isWide, setIsWide] = useState({ [project.id]: true });

  const handleTagClick = (tag) => {
    setSelectedTags([tag]);
    setActiveTag(tag);
  };

  const handleGalleryActivation = (id) => {
    setIsGalleryActive((prevState) => ({ ...prevState, [id]: true }));

    setTimeout(() => {
      setIsGalleryActive((prevState) => ({ ...prevState, [id]: false }));
    }, 10000);
  };

  return (
    <div>
      <div className="singlepage__contentContainer projectdetail">
        <div
          className="singlepage__headerImage"
          style={{
            backgroundImage: `linear-gradient(rgba(96, 92, 78, 0.5), rgba(96, 92, 78, 0.5)), url(${gimme5big})`,
          }}
        >
          <h1 className="singlepage__headerTitle">Gimme 5 - Social App</h1>
        </div>
        <div className="singlepage__content">
          <p className="about__text">
            "Gimme5" was a social media app project for Codingschule.de. I built
            it together with my colleague Kathrin as a full-stack, single-page
            web application. The idea was to build a platform where you can
            share your five favourite things with the world. This could be
            anything. From "The Top 5 80s musicians" to even "The Top 5 sorts of
            Pizza". The app has a login and registration system, a feed where
            you can see all the posts of the users you follow, a profile page
            where you can see all your own posts and edit your profile, and a
            like and comment system.
          </p>

          <p className="about__text">
            Gimme 5 is built in React with Node.js. It uses MongoDB to store,
            get, edit, and delete the data. The backend and the serverside
            renderings are done with Express.js. The frontend is styled with CSS
            within Styled Components, and the design is based on a Figma
            prototype that Kathrin did, including the Logo.
          </p>

          <h3 className="singlepage__dividerSubHeadline">Features</h3>
          <ul className="">
            <li>Register</li>
            <li>Login</li>
            <li>Password Reset with E-Mail</li>
            <li>Add friends</li>
            <li>A profile</li>
            <li>View your posts on your profile</li>
            <li>Post your own Top 5 list</li>
            <li>Delete your own Top 5 list</li>
            <li>Like other lists</li>
            <li>Comment on other lists</li>
            <li>Delete your own comment</li>
            <li>Upload a profile picture</li>
            <li>Change your username</li>
            <li>Change your password</li>
          </ul>

          <div>
            {project && (
              <div className="projects__contentContainer">
                <div
                  className={`projects__item${
                    isWide[project.id] ? ' wide' : ''
                  }`}
                  key={project.id}
                >
                  <div className="antiSwipe" style={{ position: 'relative' }}>
                    {!isGalleryActive[project.id] && (
                      <div
                        className="antiSwipe__div"
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          zIndex: 2,
                          backgroundColor:
                            'var(--dark-color-mobile-gallery-opacity)',

                          flexDirection: 'column',
                          justifyContent: 'center',
                          alignItems: 'center',
                          color: 'white',
                        }}
                        onClick={() => handleGalleryActivation(project.id)}
                      >
                        <MdOutlineTouchApp className="antiSwipe__div__icon" />

                        <h3>Tap to unlock swiping</h3>
                      </div>
                    )}

                    <ImageGallery
                      className="imageGallery"
                      items={project.images}
                      showFullscreenButton={false}
                      showBullets={true}
                      showPlayButton={false}
                      showThumbnails={false}
                      slideDuration={500}
                      slideInterval={2000}
                    />
                  </div>
                  <div className="buttons">
                    <div className="svgbuttons">
                      {project.github ? (
                        <Link
                          to={project.github}
                          target="_blank"
                          className="icon github"
                        >
                          <GitHubLink className="" />
                        </Link>
                      ) : null}
                      {project.demo ? (
                        <Link
                          to={project.demo}
                          target="_blank"
                          className="icon website"
                        >
                          <WebsiteLink className="" />
                        </Link>
                      ) : null}
                    </div>
                  </div>
                  <div className="tags">
                    {project.tags.map((tag, index) => (
                      <div className={`tagbox ${tag}`} key={index + tag}>
                        <p>{tag}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
