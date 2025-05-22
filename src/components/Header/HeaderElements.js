import { FaBars } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import styled from "@emotion/styled";

export const Nav = styled.nav`
  background: transparent;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center; /* Center content horizontally */
  z-index: 10;
`;


export const NavLink = styled(ScrollLink)`
  color: #6feffc;
  display: flex;
  font-size: 1.9rem;
  align-items: center;
  height: 100%;
  cursor: pointer;
  &:hover {
    color: #FFFFFF;
  }
`;


export const NavMenu = styled.div`
  display: flex;
  align-items: center;

  .menu-item + .menu-item {
    margin-left: 1rem; /* Add spacing between menu items */
  }

  @media screen and (max-width: 361px) {
    display: none;
  }
`;



export const ExternalNavLink = styled.a`
  color: #6feffc;
  display: flex;
  font-size: 1.9rem;
  align-items: center;
  height: 100%;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: #FFFFFF;
  }
`;

