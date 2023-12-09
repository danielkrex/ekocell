import React, { useState } from "react";

function SubMenu(props) {
  const [location, setlocation] = useState(window.location.pathname);
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
