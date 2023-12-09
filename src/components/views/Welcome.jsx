import React from "react";
import IconLogo from "../../assets/images/ekocell-logo-icon.jsx";
import ScrollIcon from "../../assets/images/icon-scroll.svg";

const Welcome = (props) => {
  return (
    <div id={props.id} className={`page page__welcome ${props.type}`}>
        <div className="page__welcome__content">
          <IconLogo fillColor={props.highlight} />
          <h1>Ekocell</h1>
          <p style={{ color: props.highlight ? props.highlight : 'rgba(255,255,255,0.7)'}}>{props.data.amblem.text}</p>
        </div>
        <div className="scrollIcon">
          <img src={ScrollIcon} alt="" />
        </div>
    </div>
  );
};

export default Welcome;
