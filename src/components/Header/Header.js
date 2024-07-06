import React from "react";
import { Nav, NavLink, Bars, NavMenu, NavBtn } from "./HeaderElements"; // Assuming these are styled-components or similar

const Header = ({ toggle }) => {
  return (
    <div className="Container" style={{ padding: 0 }}>
      <Nav style={{ display: "flex", justifyContent: "center" }}>
        <NavMenu style={{ display: "flex", alignItems: "center" }}>
          <NavLink className="menu-item" to="projects">
            Projects
          </NavLink>
          <NavLink className="menu-item" to="about">
            About
          </NavLink>
          <NavLink className="menu-item" to="contact">
            Contact
          </NavLink>
          <NavBtn>
          <a
            className="btn SecondaryBtn"
            href="https://drive.google.com/file/d/1R3P5evO_anwNAciVK4FIVEsVhvVnOK1C/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
          </NavBtn>
        </NavMenu>
        <Bars onClick={toggle} />
      </Nav>
    </div>
  );
};

export default Header;
