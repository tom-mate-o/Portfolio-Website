import React from 'react';
import { useEffect, useState } from 'react';
import projectsBig from '../img/home_item_images/projects_big.jpg';
import { projectdata } from '../app/data/projectdata';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ImageGallery from 'react-image-gallery';
import { ReactComponent as GitHubLink } from '../img/github.svg';
import { ReactComponent as WebsiteLink } from '../img/eye-regular.svg';
import { MdOutlineTouchApp } from 'react-icons/md';

export default function Projects() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedTags, setSelectedTags] = useState(['All']);
  const [activeTag, setActiveTag] = useState('All');
  const [isGalleryActive, setIsGalleryActive] = useState(false);

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
          <div className="singlepage__filterbuttonsContainer">
            {[
              'All',
              'React',
              'Mongo-DB',
              'Express',
              'Node',
              'SASS',
              'JavaScript',
              'CSS',
              'Website',
              'Web-App',
            ].map((tag) => (
              <button
                className={`filterbutton ${tag} ${
                  activeTag === tag ? 'active' : ''
                }`}
                onClick={() => handleTagClick(tag)}
              >
                {tag}
              </button>
            ))}
          </div>

          {projectdata
            .filter((item) =>
              item.tags.some((tag) => selectedTags.includes(tag))
            )
            .map((item) => (
              <div className="projects__contentContainer">
                <div className="projects__item" key={item.id}>
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

                    <ImageGallery
                      class="imageGallery"
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
                      <Link to={item.linkto} class="">
                        <div className="morebutton">...more!</div>
                      </Link>
                    ) : null}
                    <div className="svgbuttons">
                      {item.github ? (
                        <Link
                          to={item.github}
                          target="_blank"
                          class="icon github"
                        >
                          <GitHubLink class="" />
                        </Link>
                      ) : null}
                      {item.demo ? (
                        <Link
                          to={item.demo}
                          target="_blank"
                          class="icon website"
                        >
                          <WebsiteLink class="" />
                        </Link>
                      ) : null}
                    </div>
                  </div>
                  <div className="tags">
                    {item.tags.map((tag) => (
                      <div className={`tagbox ${tag}`}>
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
