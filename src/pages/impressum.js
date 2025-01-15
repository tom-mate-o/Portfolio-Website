import React from 'react';
import { useEffect } from 'react';
import aboutBig from '../img/home_item_images/about_big.jpg';
import herobg from '../img/hero_bg.jpg';

export default function Impressum() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="singlepage__contentContainer">
        <div
          className="singlepage__headerImage"
          style={{
            backgroundImage: `linear-gradient(rgba(96, 92, 78, 0.5), rgba(96, 92, 78, 0.5)), url(${herobg})`,
          }}
        >
          <h1 className="singlepage__headerTitle">Impressum</h1>
        </div>
        <div className="singlepage__content">
          <div>
            <h2>Impressum</h2>
            <br />
            <p>
              <b>
                Informationen und Offenlegung gemäß &sect;5 (1) ECG, &sect; 25
                MedienG, &sect; 63 GewO und &sect; 14 UGB
              </b>
            </p>
            <p>
              <br />
              <b>Webseitenbetreiber:</b> Thomas Kranawetter
              <br />
              <br />
            </p>
            <p>
              <b>Kontaktdaten:</b> <br /> Email: mail@tomkra.dev <br />
            </p>
            <br />
            <p>
              <b>Anwendbare Rechtsvorschrift:</b> www.ris.bka.gv.at <br />{' '}
            </p>
            <br />
            <p>
              <b>Online Streitbeilegung:</b> Verbraucher, welche in Österreich
              oder in einem sonstigen Vertragsstaat der ODR-VO niedergelassen
              sind, haben die Möglichkeit Probleme bezüglich dem entgeltlichen
              Kauf von Waren oder Dienstleistungen im Rahmen einer
              Online-Streitbeilegung (nach OS, AStG) zu lösen. Die Europäische
              Kommission stellt eine Plattform hierfür bereit:{' '}
              <a href="https://ec.europa.eu/consumers/odr">
                https://ec.europa.eu/consumers/odr
              </a>
            </p>
            <br />
            <p>
              <b>Urheberrecht:</b> Die Inhalte dieser Webseite unterliegen,
              soweit dies rechtlich möglich ist, diversen Schutzrechten (z.B dem
              Urheberrecht). Jegliche Verwendung/Verbreitung von
              bereitgestelltem Material, welche urheberrechtlich untersagt ist,
              bedarf schriftlicher Zustimmung des Webseitenbetreibers.
            </p>
            <br />
            <p>
              <b>Haftungsausschluss:</b> Trotz sorgfältiger inhaltlicher
              Kontrolle übernimmt der Webseitenbetreiber dieser Webseite keine
              Haftung für die Inhalte externer Links. Für den Inhalt der
              verlinkten Seiten sind ausschließlich deren Betreiber
              verantwortlich. Sollten Sie dennoch auf ausgehende Links
              aufmerksam werden, welche auf eine Webseite mit rechtswidriger
              Tätigkeit/Information verweisen, ersuchen wir um dementsprechenden
              Hinweis, um diese nach § 17 Abs. 2 ECG umgehend zu entfernen.
              <br />
              Die Urheberrechte Dritter werden vom Betreiber dieser Webseite mit
              größter Sorgfalt beachtet. Sollten Sie trotzdem auf eine
              Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
              entsprechenden Hinweis. Bei Bekanntwerden derartiger
              Rechtsverletzungen werden wir den betroffenen Inhalt umgehend
              entfernen.
            </p>
            <br />
            <p>
              Quelle:{' '}
              <b>
                <a href="https://www.fairesrecht.at/">fairesRecht.at</a>
              </b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
