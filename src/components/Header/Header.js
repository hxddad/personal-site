import React, { useState } from "react";
import { Nav, NavLink, Bars, NavMenu, ExternalNavLink } from "./HeaderElements";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Nav>
      {/* Logo or other elements */}
      <NavMenu isOpen={isOpen}>
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
    </Nav>
  );
};

export default Header;
