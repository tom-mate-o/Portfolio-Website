import React from 'react';
import { useEffect, useState } from 'react';
import projectsBig from '../img/home_item_images/projects_big.jpg';
import { projectdata } from '../app/data/projectdata';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ImageGallery from 'react-image-gallery';
import { ReactComponent as GitHubLink } from '../img/github.svg';
import { ReactComponent as WebsiteLink } from '../img/eye-regular.svg';
import { MdOutlineTouchApp } from 'react-icons/md';
import { TbViewportWide } from 'react-icons/tb';
import { TbViewportNarrow } from 'react-icons/tb';
import { TbFilter } from 'react-icons/tb';

export default function Projects() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedTags, setSelectedTags] = useState(['All']);
  const [activeTag, setActiveTag] = useState('All');
  const [isGalleryActive, setIsGalleryActive] = useState(false);
  const [isWide, setIsWide] = useState({});

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
      <div className="singlepage__contentContainer">
        <div
          className="singlepage__headerImage"
          style={{
            backgroundImage: `linear-gradient(rgba(96, 92, 78, 0.5), rgba(96, 92, 78, 0.5)), url(${projectsBig})`,
          }}
        >
          <h1 className="singlepage__headerTitle">Projects</h1>
        </div>
        <div className="singlepage__content">
          <p>
            Here are some of my latest coding projects. From Websites to
            Full-Stack Web Apps. With screenshots and detailed information.
            Please have a look. And if you wish, you can take a deep dive and
            check their code on my Github page.
          </p>
          <div className="singlepage__filterContainer">
            <div className="singlepage__filterContainer__title">
              <p>
                <TbFilter />
              </p>
              <p>Filter Projects:</p>
            </div>
            <div className="singlepage__filterbuttonsContainer">
              {[
                'All',
                'Website',
                'Web-App',
                'React',
                'Mongo-DB',
                'Express',
                'Node',
                'SASS',
                'JavaScript',
                'CSS',
              ].map((tag) => (
                <button
                  className={`filterbutton ${tag} ${
                    activeTag === tag ? 'active' : ''
                  }`}
                  onClick={() => handleTagClick(tag)}
                  key={tag}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {projectdata
            .filter((item) =>
              item.tags.some((tag) => selectedTags.includes(tag))
            )
            .map((item) => (
              <div className="projects__contentContainer" key={item.id}>
                <div
                  className={`projects__item${isWide[item.id] ? ' wide' : ''}`}
                  key={item.id}
                >
                  <div className="text">
                    <h1>{item.name}</h1>
                    <p dangerouslySetInnerHTML={{ __html: item.text }} />
                  </div>
                  <div className="antiSwipe" style={{ position: 'relative' }}>
                    {!isGalleryActive[item.id] && (
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
                        onClick={() => handleGalleryActivation(item.id)}
                      >
                        <MdOutlineTouchApp className="antiSwipe__div__icon" />

                        <h3>Tap to unlock swiping</h3>
                      </div>
                    )}
                    <button
                      className="toggleWideButton"
                      onClick={() =>
                        setIsWide({ ...isWide, [item.id]: !isWide[item.id] })
                      }
                    >
                      {isWide[item.id] ? (
                        <TbViewportNarrow className="toggleIcon" />
                      ) : (
                        <TbViewportWide className="toggleIcon" />
                      )}
                    </button>
                    <ImageGallery
                      className="imageGallery"
                      items={item.images}
                      showFullscreenButton={false}
                      showBullets={true}
                      showPlayButton={false}
                      showThumbnails={false}
                      slideDuration={500}
                      slideInterval={2000}
                    />
                  </div>
                  <div className="buttons">
                    {item.linkto ? (
                      <Link to={item.linkto} className="">
                        <div className="morebutton">...more!</div>
                      </Link>
                    ) : null}
                    <div className="svgbuttons">
                      {item.github ? (
                        <Link
                          to={item.github}
                          target="_blank"
                          className="icon github"
                        >
                          <GitHubLink className="" />
                        </Link>
                      ) : null}
                      {item.demo ? (
                        <Link
                          to={item.demo}
                          target="_blank"
                          className="icon website"
                        >
                          <WebsiteLink className="" />
                        </Link>
                      ) : null}
                    </div>
                  </div>
                  <div className="tags">
                    {item.tags.map((tag, index) => (
                      <div className={`tagbox ${tag}`} key={index + tag}>
                        <p>{tag}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
