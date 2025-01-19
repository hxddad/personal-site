import React from "react";
import { Nav, NavLink, Bars, NavMenu, NavBtn } from "./HeaderElements"; // Assuming these are styled-components or similar
import { ExternalNavLink } from "./HeaderElements"; // Import ExternalNavLink if defined as a separate styled-component
const Header = ({ toggle }) => {
  return (
    <div className="Container" style={{ padding: 0 }}>
      <Nav style={{ display: "flex", justifyContent: "center" }}>
      <NavMenu>
  <NavLink to="about" smooth={true} duration={500} className="menu-item">
    about
  </NavLink>
  <NavLink to="contact" smooth={true} duration={500} className="menu-item">
    contact
  </NavLink>
  <ExternalNavLink
    href="https://github.com/hxddad/resume/blob/main/yazan_haddad_resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="menu-item"
  >
    resume
  </ExternalNavLink>
</NavMenu>

        <Bars onClick={toggle} />
      </Nav>
    </div>
  );
};

export default Header;
