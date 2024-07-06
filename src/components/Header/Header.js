import React from "react";
import { Nav, NavLink, Bars, NavMenu } from "./HeaderElements"; // Assuming these are styled-components or similar

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
        </NavMenu>
        <Bars onClick={toggle} />
      </Nav>
    </div>
  );
};

export default Header;
