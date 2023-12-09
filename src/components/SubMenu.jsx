import React, { useState } from "react";

// Check if window is defined (so if in the browser or in node.js).
const isBrowser = typeof window !== "undefined"

function SubMenu(props) {
  const [location, setlocation] = useState( isBrowser ? window.location.pathname : '');
  const listItems = props.data.map((item, index) => (
    <a
      href={item.link}
      key={index}
      className={`${location === `${item.link}/` ? "active" : ""}`}
    >
      {item.text}
    </a>
  ));
  return <div className="sub-menu">{listItems}</div>;
}

export default SubMenu;
