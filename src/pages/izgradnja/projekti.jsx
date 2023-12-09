import React, { useLayoutEffect } from "react";
import { Link } from "gatsby";
import Layout from "../../layouts/IzgradnjaLayout";
import SubMenu from "../../components/SubMenu";
import { drveneKuceMenu } from "../../content/pages-izgradnja";
import { IzgradnjaProjekti } from "../../content/pages-projekti";
import "../../style/projekti.scss";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const Projekti = () => {
  useLayoutEffect(() => {
    let projectIndex = {};
    IzgradnjaProjekti.projects.map((projekat, index) => {
      projectIndex[`projectImage-${index}`] = false;
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
    <Layout title="Drvene montažne kuće">
      <SubMenu data={drveneKuceMenu} />
      <h1>Projekti drvenih kuća</h1>
      <div className="project-holder">
        {IzgradnjaProjekti.projects.map((projekat, index) => (
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

      {IzgradnjaProjekti.projects.map((projekat, index) => (
        <Lightbox
          open={open[`projectImage-${index}`]}
          close={() => {
            closeLightbox(index);
          }}
          slides={imageSlides(projekat.images)}
        />
      ))}
    </Layout>
  );
};

export default Projekti;

export const Head = () => <title>Drvene Kuće</title>;
