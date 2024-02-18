import React from 'react';
import { useState, useEffect } from 'react';
import tomBW from '../img/tom_stamp_BW_vector.svg';
import tomColour from '../img/tom_colour.png';

export default function Home() {
  const [currentImage, setCurrentImage] = useState(tomBW);

  const sentences = [
    'code.',
    'build amazing things in React.',
    'be creative.',
    'build awesome layouts with SASS.',
    'learn new things.',
    'bring things to life with Java Script.',
    'explore.',
    'design Mockups in Figma.',
    'coffee.',
    'manage Data with Mongoose.',
  ];

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === sentences[index].length + 1 && !reverse) {
      const timeout = setTimeout(() => {
        setReverse(true);
      }, 1000);
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev < sentences.length - 1 ? prev + 1 : 0));
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, 150);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
    <div className="hero">
      <div className="hero__bg-image">
        <h1 className="hero__title">
          👋 Hi, I'm Tom! <br />
          I’m a WEB-Developer
        </h1>
        <div className="hero__left">
          <div className="hero__text">
            <p className="hero__content">
              I love to{' '}
              {`${sentences[index].substring(0, subIndex)}${
                subIndex === sentences[index].length ? ' |' : ''
              }`}
            </p>
            <div className="hero__buttons">
              <a href="#contact" className="hero__button button primary">
                Let's Talk!
              </a>
              <a href="#contact" className="hero__button button secondary">
                My Skillset
              </a>
            </div>
          </div>
        </div>
        <div className="hero__right">
          <img
            className={'hero__image'}
            src={currentImage}
            alt="Tom Kra"
            width={230}
            height={314}
            onMouseOver={() => {
              setCurrentImage(tomColour);
            }}
            onMouseOut={() => {
              setCurrentImage(tomBW);
            }}
          />
        </div>
      </div>
    </div>
  );
}
