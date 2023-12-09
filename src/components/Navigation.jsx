import React, { useEffect, useState, useLayoutEffect } from "react";
import { Link } from "gatsby";
import Menu from "../assets/images/icon-menu.svg";
import "../style/navigation.scss";
import IconClose from "../assets/images/icon-close.svg";

import { izgradnjaMenu } from "../content/pages-izgradnja";
import { interijerMenu } from "../content/pages-interijer";

// Check if window is defined (so if in the browser or in node.js).
const isBrowser = typeof window !== "undefined"

const Navigation = (props) => {
  const [location, setlocation] = useState( isBrowser ? window.location.pathname : '');
  const [menuState, setMenuState] = useState(false);
  const [ScrollTop, setScrollTop] = useState(false);

  const typeFromProps = props.type ? props.type : "";

  const izgradnjaItems = izgradnjaMenu.map((item) => (
    <Link
      to={item.link}
      key={item.toString()}
      className={`${location === `${item.link}/` ? "active" : ""}`}
    >
      {item.text}
    </Link>
  ));

  const interijerItems = interijerMenu.map((item) => (
    <Link
      to={item.link}
      key={item.toString()}
      className={`${location === `${item.link}/` ? "active" : ""}`}
    >
      {item.text}
    </Link>
  ));

  useEffect(() => {
    setlocation(isBrowser ? window.location.pathname : '');
  }, []);

  const onScroll = e => {
    if (typeFromProps === 'black'){
      setScrollTop(true)
    } else {
      if (window.scrollY > 0) {
        setScrollTop(true)
      } else {
        setScrollTop(false)
      }
    }
  };

  useLayoutEffect(() => {
    onScroll()
  }, [])

  useEffect(() => {
    
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`navigation ${ScrollTop ? 'black' : ''}`}>
      <div className="navigation-wrapper">
        <a className="logo" href="/">
          EKOCELL
        </a>
        <div
          className="menu"
          onClick={() => {
            setMenuState(!menuState);
          }}
        >
          <img src={Menu} alt="menu" />
          Menu
        </div>
      </div>

      {menuState && (
        <div className="menu-modal">
          <div className="links">
            <img
              className="close"
              onClick={() => {
                setMenuState(!menuState);
              }}
              src={IconClose}
              alt="close"
            />
            <p className="logo">EKOCELL</p>
            <div className={`dropdown`}>
              <Link to="/" className={`dropbtn ${location.includes('izgradnja') ? 'active' : ''}`}>
                Izgradnja
              </Link>
              <div className={`dropdown-content`}>
                {izgradnjaItems}
              </div>
            </div>
            <div className={`dropdown`}>
              <Link to="/interijer" className={`dropbtn ${location.includes('interijer') ? 'active' : ''}`} >
                Interijer
              </Link>
              <div className={`dropdown-content`}>
                {interijerItems}
              </div>
            </div>
            <div className={`dropdown`}>
              <Link to="/o-nama" className={`dropbtn ${location.includes('o-nama') ? 'active' : ''}`} >
                O nama
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
