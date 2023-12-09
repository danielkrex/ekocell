import React from "react";
import { Link } from "gatsby";
import "../style/navigation.scss";
import IconLogo from "../assets/images/ekocell-logo-icon.jsx";

const Footer = (props) => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className={`footer ${props.type ? props.type : ''}`}>
      <hr />
      <Link to="/">
        <IconLogo fillColor="#2d2d2d"></IconLogo>
        <h1>Ekocell</h1>
        <p>GRADIMO BUDUĆNOST ZAJEDNO</p>
      </Link>
      <p>© {year} Ekocell</p>
    </footer>
  );
};

export default Footer;
