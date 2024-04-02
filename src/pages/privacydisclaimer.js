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
          <h1 className="singlepage__headerTitle">Privacy & Disclaimer</h1>
        </div>
        <div className="singlepage__content">
          <div>
            <h2>Erklärung zur Informationspflicht</h2>
            <h3>Datenschutzerklärung</h3>
            <p>
              In folgender Datenschutzerklärung informieren wir Sie über die
              wichtigsten Aspekte der Datenverarbeitung im Rahmen unserer
              Webseite. Wir erheben und verarbeiten personenbezogene Daten nur
              auf Grundlage der gesetzlichen Bestimmungen
              (Datenschutzgrundverordnung, Telekommunikationsgesetz 2003).
            </p>
            <br />
            <p>
              Sobald Sie als Benutzer auf unsere Webseite zugreifen oder diese
              besuchen wird Ihre IP-Adresse, Beginn sowie Beginn und Ende der
              Sitzung erfasst. Dies ist technisch bedingt und stellt somit ein
              berechtigtes Interesse iSv Art 6 Abs 1 lit f DSGVO.
            </p>

            <br />
            <h3>Kontakt mit uns</h3>
            <p>
              Wenn Sie uns, entweder über unser Kontaktformular auf unserer
              Webseite, oder per Email kontaktieren, dann werden die von Ihnen
              an uns übermittelten Daten zwecks Bearbeitung Ihrer Anfrage oder
              für den Fall von weiteren Anschlussfragen für sechs Monate bei uns
              gespeichert. Es erfolgt, ohne Ihre Einwilligung, keine Weitergabe
              Ihrer übermittelten Daten.
            </p>
            <br />
            <h3>Google Fonts</h3>

            <p>
              Unsere Website verwendet Schriftarten von „Google Fonts“. Der
              Dienstanbieter dieser Funktion ist: Google Ireland Limited Gordon
              House, Barrow Street Dublin 4. Ireland Tel: +353 1 543 1000
            </p>
            <br />
            <p>
              Beim Aufrufen dieser Webseite lädt Ihr Browser Schriftarten und
              speichert diese in den Cache. Da Sie, als Besucher der Webseite,
              Daten des Dienstanbieters empfangen kann Google unter Umständen
              Cookies auf Ihrem Rechner setzen oder analysieren.
            </p>
            <br />
            <p>
              Die Nutzung von „Google-Fonts“ dient der Optimierung unserer
              Dienstleistung und der einheitlichen Darstellung von Inhalten.
              Dies stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1
              lit. f DSGVO dar.
            </p>
            <br />
            <p>
              Weitere Informationen zu Google Fonts erhalten Sie unter folgendem
              Link:
            </p>
            <a href="https://developers.google.com/fonts/faq">
              https://developers.google.com/fonts/faq
            </a>
            <br />
            <br />
            <p>
              Weitere Informationen über den Umgang mit Nutzerdaten von Google
              können Sie der Datenschutzerklärung entnehmen:
            </p>
            <a href="https://policies.google.com/privacy?hl=de">
              https://policies.google.com/privacy?hl=de
            </a>
            <br />
            <br />
            <p>
              Google verarbeitet die Daten auch in den USA, hat sich jedoch dem
              EU-US Privacy-Shield unterworfen.
            </p>
            <a href="https://www.privacyshield.gov/EU-US-Framework">
              https://www.privacyshield.gov/EU-US-Framework
            </a>
            <br />
            <br />
            <h3>Ihre Rechte als Betroffener</h3>
            <p>
              Sie als Betroffener haben bezüglich Ihrer Daten, welche bei uns
              gespeichert sind grundsätzlich ein Recht auf:
            </p>
            <ul>
              {' '}
              <li>Auskunft</li>
              <li> Löschung der Daten</li>
              <li> Berichtigung der Daten</li>
              <li> Übertragbarkeit der Daten</li>
              <li> Wiederruf und Widerspruch zur Datenverarbeitung</li>
              <li> Einschränkung</li>
            </ul>

            <p>
              Wenn sie vermuten, dass im Zuge der Verarbeitung Ihrer Daten
              Verstöße gegen das Datenschutzrecht passiert sind, so haben Sie
              die Möglichkeit sich bei uns (mail@tomkra.dev) oder der
              Datenschutzbehörde zu beschweren. Sie erreichen uns unter
              folgenden Kontaktdaten: Webseitenbetreiber: Thomas Kranawetter
              Email: mail@tomkra.dev
            </p>
            <br />
            <p>
              Quelle:{' '}
              <a href="https://fairesRecht.at">
                Rechtsanwalt finden - fairesRecht
              </a>
            </p>
          </div>
          <div>
            <h2 className="singlepage__dividerSubHeadline">Disclaimer</h2>
            <p>
              Trotz sorgfältiger inhaltlicher Kontrolle übernimmt der
              Webseitenbetreiber (von www.tomkra.dev, Thomas Kranawetter) keine
              Haftung für die Inhalte externer Links. Für den Inhalt der
              verlinkten Seiten sind ausschließlich deren Betreiber
              verantwortlich. Sollten Sie dennoch auf ausgehende Links
              aufmerksam werden, welche auf eine Webseite mit rechtswidriger
              Tätigkeit/Information verweisen, ersuchen wir um dementsprechenden
              Hinweis (mail@tomkra.dev), um diesen nach § 17 Abs. 2 ECG umgehend
              zu entfernen.
            </p>
            <p>
              Die Urheberrechte Dritter werden vom Betreiber mit bestmöglicher
              Sorgfalt beachtet. Sollten Sie trotzdem auf eine
              Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
              entsprechenden Hinweis an (mail@tomkra.dev). Bei Bekanntwerden
              derartiger Rechtsverletzungen werden wir den betroffenen Inhalt
              umgehend entfernen.
            </p>
            <br />
            <p>
              Quelle:{' '}
              <a href="https://fairesRecht.at">
                Rechtsanwalt finden - fairesRecht
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
