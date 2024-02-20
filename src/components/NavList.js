import React from "react";

export const NavList = (props) => {
  return <div className="nav-lists__item">
    <a href="#" className="nav-lists__item--link">
    {props.value}
    </a>
  </div>;
};
