import React, { useLayoutEffect, useRef } from "react";
import { Link } from "gatsby";

const ArticleSection = (props) => {
  const animateElementsOnMouseMovement = () => {
    const root = document.documentElement;
    root.addEventListener("mousemove", (e) => {
      const imageHolder = document.querySelector(`#${props.id} .imageHolder`);
      const textHolder = document.querySelector(`#${props.id} .textHolder`);
      const x = e.clientX,
        y = e.clientY;
      if (imageHolder && textHolder) {
        imageHolder.style.transform = `translate(${-x / 100}px,${-y / 20}px)`;
        textHolder.style.transform = `translate(${x / 100}px,${y / 15}px)`;
      }
    });
  };

  useLayoutEffect(() => {
    if (window.innerWidth < 900) return;
    animateElementsOnMouseMovement();
  }, []);
  return (
    <div id={props.id} className={`page page__articlePage ${props.type}`}>
      <div
        className={`page__articlePage__content ${
          props.pos.padding === "left" ? "img-right" : "img-left"
        } ${props.type}`}
      >
        <div className="imageHolder">
          <img src={props.data.image.src} alt={props.alt} />
        </div>
        <div
          className={`textHolder ${
            props.pos.padding === "left" ? "text-padd-left" : "text-padd-right"
          }`}
          style={{ top: `${props.pos.offset}px` }}
        >
          <h1>{props.data.headline}</h1>
          <p>{props.data.text}</p>
          {props.data.text1 && (
            <p>{props.data.text1}</p>
          )}
          {/* if props.link is defined, render the Link component */}
          {props.data.link && (
            <Link to={props.data.link.src}>{props.data.link.text}</Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ArticleSection;
