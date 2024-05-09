import React from 'react';
import { useState, useEffect } from 'react';
import tomBW from '../img/tom_stamp_BW_vector.svg';
import tomColour from '../img/tom_colour.png';
import { homedata } from '../app/data/homedata';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import xdreamfitavatar from '../img/xdreamfit_avatar.jpg';
import xdreamfit1 from '../img/xdreamfit_1.jpg';
import xdreamfit2 from '../img/xdreamfit_2.jpg';
import xdreamfit3 from '../img/xdreamfit_3.jpg';
import xdreamfit4 from '../img/xdreamfit_4.jpg';
import xdreamfit_sea from '../img/xdreamfit_sea.jpg';

export default function Home() {
  const [currentImage, setCurrentImage] = useState(tomBW);

  const sentences = [
    'bring things to life with Java Script.',
    'code.',
    'build amazing things in React.',
    'be creative.',
    'build awesome layouts with SASS.',
    'learn new things.',
    'explore.',
    'design Mockups in Figma.',
    'drink coffee.',
    'manage Data with Mongoose.',
  ];
  //

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
          Gemeinsam fit.
          <br />
          Fitness & Wohlbefinden
        </h1>
        <div className="hero__left">
          <div className="hero__text">
            <p className="hero__content">
              👋 Hi, ich bin Susi. Tauche ein in die Welt des ganzheitlichen
              Wohlbefindens. Gemeinsam erreichen wir deine Ziele während dein
              Körper und Geist in Einklang kommen.
            </p>
            <div className="hero__buttons">
              <Link to="/about" className="hero__button button primary">
                Über mich
              </Link>
              <Link to="/kontact" className="hero__button button secondary">
                Kontakt
              </Link>
            </div>
          </div>
        </div>
        <div className="hero__right">
          <img
            className={'hero__image'}
            src={xdreamfitavatar}
            alt="Tom Kra"
            width={230}
            height={315}
          />
        </div>
      </div>
      <main>
        <div className="hightlights__section">
          <div className="highlights__container" id="1">
            <img src={xdreamfit1} alt="Personal Coaching"></img>
            <h3 className="highlights__title">Personal Coaching</h3>
            <p className="highlights__text">
              Begleite mich auf deiner Reise zu persönlichem Wachstum und
              Entfaltung. Gemeinsam schaffen wir die Grundlage für deine beste
              Version.
            </p>
            <button className="highlights__button">...MEHR!</button>
          </div>

          <div className="highlights__container" id="2">
            <img src={xdreamfit2} alt="Sekundär-Prävention"></img>
            <h3 className="highlights__title">Sekundär-Prävention</h3>
            <p className="highlights__text">
              Gemeinsam verhindern wir potenzielle Probleme. Mit
              maßgeschneiderter Sekundärprävention fördern wir dein Wohlbefinden
              langfristig.
            </p>
            <button className="highlights__button">...MEHR!</button>
          </div>

          <div className="highlights__container" id="3">
            <img src={xdreamfit3} alt="Wohlbefinden & Entspannung"></img>
            <h3 className="highlights__title">Wohlbefinden & Entspannung</h3>
            <p className="highlights__text">
              Fördere dein Wohlbefinden.Finde innere Balance und Entspannung für
              Körper und Geist durch Körperanwendungen und mehr!
            </p>
            <button className="highlights__button">...MEHR!</button>
          </div>

          <div className="highlights__container" id="4">
            <img src={xdreamfit4} alt="Apnoe Tauchen"></img>
            <h3 className="highlights__title">Apnoe Tauchen</h3>
            <p className="highlights__text">
              Erfahre die Faszination des Apnoe-Tauchens. Tauche ein in eine
              Welt voller Ruhe und Abenteuer unter Wasser alles mit nur einem
              einzigen Atemzug.
            </p>
            <button className="highlights__button">...MEHR!</button>
          </div>
        </div>

        <div className="quote__section">
          <div className="quote__container">
            <h2 className="quote__title">
              Ein gesunder Geist ruht in einem gesunden Körper.
            </h2>
            <p className="quote__subtitle">
              ...und gemeinsam schaffen wir die Grundlage für beides.
            </p>
            <img
              src={xdreamfit_sea}
              alt="Quote Image"
              className="quote__image"
            ></img>
          </div>
        </div>
      </main>
    </div>
  );
}
