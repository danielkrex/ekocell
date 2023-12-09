import React, { useLayoutEffect } from "react";
import Layout from "../../../layouts/IzgradnjaLayout";

import PodnoGrijanjeImage from "../../../assets/images/ekocell-podnoGrijanje.png";

const DrveneKuce = () => {
  useLayoutEffect(() => {}, []);

  return (
    <Layout title="Podno grijanje">
      <h1 className="headline pbig">
        Učinkovito Zagrijavanje za Različite Primjene
      </h1>
      <div className="content-two-column pbig">
        <div className="column">
          <img src={PodnoGrijanjeImage} alt="Eko cell podno grijanje 12V" />
        </div>
        <div className="column">
          <h3>Što je 12V Podno Grijanje?</h3>
          <p>
            12V podno grijanje predstavlja inovativnu tehnologiju koja omogućava
            učinkovito zagrijavanje različitih prostora uz minimalnu potrošnju
            električne energije. Ovaj sustav koristi niskonaponske 12V grijalice
            koje se postavljaju ispod podne površine i ravnomjerno raspoređuju
            toplinu. Ovo je posebno korisno za stvaranje ugodnog i ravnomjerno
            grijanog okruženja u različitim primjenama.
          </p>
        </div>
      </div>

      <h3>Prednosti Korištenja 12V Podnog Grijanja</h3>
      <div className="content-two-column end">
        <div className="column">
          <h3>Energetska učinkovitost</h3>
        </div>
        <div className="column">
          <p>
            Zbog niske potrošnje električne energije, 12V podno grijanje
            smanjuje ukupne troškove grijanja, čineći ga ekonomičnom opcijom za
            dugoročno korištenje.
          </p>
        </div>
        <div className="column">
          <h3>Udobnost</h3>
        </div>
        <div className="column">
          <p>
            Zbog ravnomjernog zagrijavanja, ovo grijanje stvara ugodno i toplije
            okruženje za stanovnike ili korisnike prostora.
          </p>
        </div>
        <div className="column">
          <h3>Estetika</h3>
        </div>
        <div className="column">
          <p>
            S obzirom na to da se grijalice nalaze ispod podne površine,
            eliminira se potreba za vidljivim radijatorima, što poboljšava
            estetski izgled prostora.
          </p>
        </div>
        <div className="column">
          <h3>Tišina</h3>
        </div>
        <div className="column">
          <p>12V podno grijanje radi gotovo bez buke i smetnji.</p>
        </div>{" "}
        <div className="column">
          <h3>Prilagodljivost</h3>
        </div>
        <div className="column">
          <p>
            Može se primijeniti u različitim situacijama i na različitim vrstama
            površina, pružajući fleksibilnost u odabiru primjene.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default DrveneKuce;

export const Head = () => <title>Drvene Kuće</title>;
