import React, { useLayoutEffect } from "react";
import LayoutInterijer from "../../layouts/InterijerLayout";
import { InterijerProjekti } from "../../content/pages-projekti";
import "../../style/projekti.scss";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const Projekti = () => {
  useLayoutEffect(() => {
    let projectIndex = {};
    InterijerProjekti.projects.map((projekat, index) => {
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
    <LayoutInterijer title="Proketi Interijera">
      <div className="project-holder" style={{ paddingTop: "30px" }}>
        {InterijerProjekti.projects.map((projekat, index) => (
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

      {InterijerProjekti.projects.map((projekat, index) => (
        <Lightbox
          open={open[`projectImage-${index}`]}
          close={() => {
            closeLightbox(index);
          }}
          slides={imageSlides(projekat.images)}
        />
      ))}
    </LayoutInterijer>
  );
};

export default Projekti;

export const Head = () => <title>Drvene Kuće</title>;
