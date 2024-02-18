import React from 'react';
import './dist/style.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import { ReactComponent as Logo } from './img/crow_stamp_svg.svg';
import { ReactComponent as Hamburger } from './img/bars-solid.svg';

import Home from './pages/home';
import About from './pages/about';
import Skills from './pages/skills';
import Projects from './pages/projects';
import Photos from './pages/photos';
import Art from './pages/art';
import Contact from './pages/contact';

export default function App() {
  return (
    <BrowserRouter>
      <Link to="#main" class="visually-hidden">
        Skip to main content
      </Link>
      <header class="topnav">
        <h2 class="visually-hidden">Header</h2>
        <div class="wrapper topnav__wrapper">
          <div class="topnav__leftcolumn">
            <Link to="/" class="topnav__homelink hover-fade">
              <Logo
                class="topnav__logo"
                style={{ fill: 'var(--dark-color-opacity)' }}
              />
            </Link>
          </div>
          <div class="topnav__rightcolumn">
            <h1 class="topnav__title">Tom Kra</h1>
            <nav>
              <ul class="topnav__links">
                <Hamburger
                  class="topnav__hamburger"
                  style={{ fill: 'var(--text-color-light)' }}
                />
                <li class="topnav__item">
                  <Link to="/" class="topnav__link">
                    Home
                  </Link>
                </li>
                <li class="topnav__item">
                  <Link to="/aboutme" class="topnav__link">
                    About Me
                  </Link>
                </li>
                <li class="topnav__item">
                  <Link to="/skills" class="topnav__link">
                    Skills
                  </Link>
                </li>
                <li class="topnav__item">
                  <Link to="/projects" class="topnav__link">
                    Projects
                  </Link>
                </li>
                <li class="topnav__item">
                  <Link to="/photos" class="topnav__link">
                    Photos
                  </Link>
                </li>
                <li class="topnav__item">
                  <Link to="/art" class="topnav__link">
                    Art
                  </Link>
                </li>
                <li class="topnav__item">
                  <Link to="/contact" class="topnav__link">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
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
        </Routes>
      </div>
    </BrowserRouter>
  );
}
