import React from 'react';
import { useEffect, useState } from 'react';
import threelittlebirbsbig from '../img/home_item_images/threelittlebirbs_big.jpg';
import ImageGallery from 'react-image-gallery';
import { ReactComponent as GitHubLink } from '../img/github.svg';
import { ReactComponent as WebsiteLink } from '../img/eye-regular.svg';
import { MdOutlineTouchApp } from 'react-icons/md';
import { TbViewportWide } from 'react-icons/tb';
import { TbViewportNarrow } from 'react-icons/tb';
import { TbFilter } from 'react-icons/tb';
import { projectdata } from '../app/data/projectdata';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedTags, setSelectedTags] = useState(['All']);
  const [activeTag, setActiveTag] = useState('All');
  const [isGalleryActive, setIsGalleryActive] = useState(false);

  const project = projectdata.find(
    (project) => project.name === '3LB - Messaging App'
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
            backgroundImage: `linear-gradient(rgba(96, 92, 78, 0.5), rgba(96, 92, 78, 0.5)), url(${threelittlebirbsbig})`,
          }}
        >
          <h1 className="singlepage__headerTitle">
            3 little Birbs - Messaging App
          </h1>
        </div>
        <div className="singlepage__content">
          <p className="about__text">
            "3 Little Birbs" was my final project for my Full Stack class at
            codingschule.de. It is built as a full-stack, single-page web
            application. The idea was to build a wholesome social media app
            where you can write down three good things that happened to you
            today and send them, guided by a postpigeon, to one of your friends
            or out into the wild to a stranger.
          </p>

          <p className="about__text">
            3LB is built in React with Node.js. It uses MongoDB to store, get,
            edit, and delete the data. The backend and the serverside renderings
            are done with Express.js. The frontend is styled with CSS within
            Styled Components, and the design is based on a Figma prototype I
            did.
          </p>

          <h3 className="singlepage__dividerSubHeadline">Features</h3>
          <ul className="">
            <li>Register</li>
            <li>Login</li>
            <li>Password Reset with E-Mail</li>
            <li>Add friends via Friendcode</li>
            <li>View your friends</li>
            <li>Delete your friends</li>
            <li>Select 3 Birds, add a kind message</li>
            <li>Send your Birbs to a friend of your choice</li>
            <li>Send your Birbs to a stranger</li>
            <li>Receive Birbs from friends or strangers</li>
            <li>View all your Birbs in a Calendar Archive</li>
            <li>Get notifications</li>
            <li>Upload a profile picture</li>
            <li>Change your username</li>
            <li>Change your password</li>
            <li>Change the color-theme of the App</li>
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
