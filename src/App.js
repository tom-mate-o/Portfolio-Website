import React, { useEffect } from 'react';
import './dist/style.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';

import { ReactComponent as Logo } from './img/crow_stamp_svg.svg';
import { ReactComponent as Hamburger } from './img/bars-solid.svg';
import { ReactComponent as Close } from './img/x-bars-solid.svg';

import Home from './pages/home';
import About from './pages/about';
import Skills from './pages/skills';
import Projects from './pages/projects';
import Photos from './pages/photos';
import Art from './pages/art';
import Contact from './pages/contact';
import Impressum from './pages/impressum';
import Privacydisclaimer from './pages/privacydisclaimer';
import Detail3littlebirbs from './pages/3littlebirbs';
import Detailgimme5 from './pages/gimme5';
import Blog from './pages/blog';
import Article from './app/components/article';
import ArticleList from './app/components/articleList';
import TagList from './app/components/tagList';

import { ReactComponent as Mastdodon } from './img/mastodon.svg';
import { ReactComponent as GitHub } from './img/github.svg';
import { ReactComponent as Extern } from './img/square-arrow-up-right-solid.svg';

export default function App() {
  const [isMobileNavVisible, setMobileNavVisible] = useState(false);

  const handleHamburgerClick = () => {
    setMobileNavVisible(true);
  };

  const handleCloseClick = () => {
    setMobileNavVisible(false);
  };

  useEffect(() => {
    if (isMobileNavVisible) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [isMobileNavVisible]);

  return (
    <BrowserRouter>
      <Link to="#main" className="visually-hidden">
        Skip to main content
      </Link>
      <header className="topnav">
        <h2 className="visually-hidden">Header</h2>
        <div className="wrapper topnav__wrapper">
          <div className="topnav__leftcolumn">
            <Link to="/" className="topnav__homelink hover-fade">
              <Logo className="topnav__logo" />
            </Link>
          </div>
          <div className="topnav__rightcolumn">
            <h1 className="topnav__title">Tom Kra</h1>
            <nav>
              <ul className="topnav__links">
                <Hamburger
                  className="topnav__hamburger"
                  style={{ fill: 'var(--text-color-light)' }}
                  onClick={handleHamburgerClick}
                />
                <div
                  className="topnav__hamburgerwrapper"
                  onClick={handleHamburgerClick}
                ></div>
                <li className="topnav__item">
                  <Link to="/" className="topnav__link">
                    Home
                  </Link>
                </li>
                <li className="topnav__item">
                  <Link to="/aboutme" className="topnav__link">
                    About Me
                  </Link>
                </li>
                <li className="topnav__item">
                  <Link to="/skills" className="topnav__link">
                    Skills
                  </Link>
                </li>
                <li className="topnav__item">
                  <Link to="/projects" className="topnav__link">
                    Projects
                  </Link>
                </li>
                <li className="topnav__item">
                  <Link to="/photos" className="topnav__link">
                    Photos
                  </Link>
                </li>
                <li className="topnav__item">
                  <Link to="/art" className="topnav__link">
                    Art
                  </Link>
                </li>
                <li className="topnav__item">
                  <Link to="/contact" className="topnav__link">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className={`mobilenav ${isMobileNavVisible ? '' : 'hidden'}`}>
          <nav>
            <Close
              className="mobilenav__close"
              style={{ fill: 'var(--text-color-light)' }}
              onClick={handleCloseClick}
            />

            <ul className="mobilenav__links">
              <li className="mobilenav__item" onClick={handleCloseClick}>
                <Link to="/" className="mobilenav__link">
                  Home
                </Link>
              </li>
              <li className="mobilenav__item" onClick={handleCloseClick}>
                <Link to="/aboutme" className="mobilenav__link">
                  About Me
                </Link>
              </li>
              <li className="mobilenav__item" onClick={handleCloseClick}>
                <Link to="/skills" className="mobilenav__link">
                  Skills
                </Link>
              </li>
              <li className="mobilenav__item" onClick={handleCloseClick}>
                <Link to="/projects" className="mobilenav__link">
                  Projects
                </Link>
              </li>
              <li className="mobilenav__item" onClick={handleCloseClick}>
                <Link to="/photos" className="mobilenav__link">
                  Photos
                </Link>
              </li>
              <li className="mobilenav__item" onClick={handleCloseClick}>
                <Link to="/art" className="mobilenav__link">
                  Art
                </Link>
              </li>
              <li className="mobilenav__item" onClick={handleCloseClick}>
                <Link to="/contact" className="mobilenav__link">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="wrapper__content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutme" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/art" element={<Art />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/privacydisclaimer" element={<Privacydisclaimer />} />
          <Route path="/3littlebirbs" element={<Detail3littlebirbs />} />
          <Route path="/gimme5" element={<Detailgimme5 />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<Article />} />
          <Route path="/blog/articles" element={<ArticleList />} />
          <Route path="/blog/tags/:tagSlug" element={<TagList />} />
        </Routes>
        <footer className="footer">
          <div className="footer__collumn1">
            <Link to="/" className="topnav__homelink hover-fade">
              <Logo className="footer__logo" />
            </Link>
            <p>©2024 Tom Kra</p>
          </div>
          <div className="footer__collumn2">
            <ul>
              <li>
                <a
                  href="https://github.com/tom-mate-o"
                  target="_blank"
                  className="footer__link"
                >
                  <GitHub className="footer__socialicon" />
                  GitHub
                  <Extern className="footer__externicon" />
                </a>
              </li>
              <li>
                <a
                  href="https://mastodon.art/@tomkra"
                  target="_blank"
                  className="footer__link"
                >
                  <Mastdodon className="footer__socialicon" />
                  Mastodon
                  <Extern className="footer__externicon" />
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__collumn3">
            <ul>
              <li>
                <Link to="/contact" className="footer__link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer__collumn4">
            <ul>
              <li>
                <Link to="/impressum" className="footer__link">
                  <p className="footer__privacy">Impressum</p>
                </Link>
              </li>
              <li>
                <Link to="/privacydisclaimer" className="footer__link">
                  <p className="footer__privacy">Legal Terms</p>
                </Link>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}
