import React, { useLayoutEffect } from "react";
import Layout from "../../../layouts/IzgradnjaLayout";
import { GrijanjeProjekti } from "../../../content/pages-projekti";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import PodnoGrijanjeImageCustom from "../../../assets/images/ekocell-podnoGrijanje.png";

const PodnoGrijanje = () => {
  useLayoutEffect(() => {
    let projectIndex = {};
    GrijanjeProjekti.projects.map((projekat, index) => {
      projectIndex[`projectImage-${index}`] = false;
      return projectIndex;
    });
    setOpen(projectIndex);
  }, []);

  const [open, setOpen] = React.useState({});

  const imageSlides = (data) => {
    let slides = [];
    data.map((image) =>
      slides.push({
        src: image.src,
        alt: image.alt,
      })
    );

    return slides;
  };

  const closeLightbox = (index) => {
    let newOpen = { ...open };
    newOpen[`projectImage-${index}`] = !newOpen[`projectImage-${index}`];
    setOpen(newOpen);
  };

  return (
    <Layout title="Podno grijanje">
      <div className="content-two-column pbig">
        <div className="column">
          <img
            src={PodnoGrijanjeImageCustom}
            alt="Eko cell podno grijanje 12V"
          />
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
          <br />
          <p>
            Za više informacija o 12V podnom grijanju posjetite našu stranicu
            posvećenu ovoj temi: <br />
            <a target="_blank" href="https://podnogrijanje12v.com/">podnogrijanje12v.com</a>
          </p>        
        </div>
      </div>

      <h3 className="headline">
        Učinkovito Zagrijavanje za Različite Primjene
      </h3>

      <div className="project-holder">
        {GrijanjeProjekti.projects.map((projekat, index) => (
          <div
            onClick={() => {
              closeLightbox(index);
            }}
            key={index}
            className="project-box"
          >
            <img src={projekat.images[0].src} alt={projekat.images[0].alt} />
            <h3>{projekat.name}</h3>
          </div>
        ))}
      </div>

      {GrijanjeProjekti.projects.map((projekat, index) => (
        <Lightbox
          open={open[`projectImage-${index}`]}
          close={() => {
            closeLightbox(index);
          }}
          slides={imageSlides(projekat.images)}
        />
      ))}

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

      <div className="content-one-column podno-grijanje">
        <h3>
          Za više informacija o 12V podnom grijanju posjetite našu stranicu
          posvećenu ovoj temi:
        </h3>
        <br />
        <a target="_blank" href="https://podnogrijanje12v.com/">podnogrijanje12v.com</a>
      </div>
    </Layout>
  );
};

export default PodnoGrijanje;

export const Head = () => <title>Ekocell - Podno grijanje</title>;
