import React from "react";
import logo from "../logo.svg";
import "../styles/navigation.scss";
import { NavList } from "./NavList";
import NavButton from "./NavButton";
export const Navigation = () => {
  const lists = [
    {
      id: "01",
      name: "Home",
    },
    {
      id: "02",
      name: "Portfolio",
    },
    {
      id: "03",
      name: "Contacts",
    },
  ];
  return (
    <div className="navigation">
      <img src={logo} className="navigation-logo"></img>

      <nav className="nav">
        <ul className="nav-lists">
          {lists.map((item) => (
            <NavList key={item.id} value={item.name}></NavList>
          ))}
        </ul>
      </nav>
      <NavButton value='dark'></NavButton>
    </div>
  );
};
