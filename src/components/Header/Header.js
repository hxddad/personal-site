import React from "react";
import { Nav, NavLink, Bars, NavMenu, NavBtn } from "./HeaderElements"; // Assuming these are styled-components or similar

const Header = ({ toggle }) => {
  return (
    <div className="Container" style={{ padding: 0 }}>
      <Nav style={{ display: "flex", justifyContent: "center" }}>
        <NavMenu style={{ display: "flex", alignItems: "center" }}>
          <NavLink className="menu-item" to="projects">
            projects
          </NavLink>
          <NavLink className="menu-item" to="about">
            about
          </NavLink>
          <NavLink className="menu-item" to="contact">
            contact
          </NavLink>
          <NavBtn>
          <a
            className="btn SecondaryBtn"
            href="https://github.com/hxddad/resume/blob/main/yazan_haddad_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            resume
          </a>
          </NavBtn>
        </NavMenu>
        <Bars onClick={toggle} />
      </Nav>
    </div>
  );
};

export default Header;
