import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import styled from "@emotion/styled";
import ScrollAnimation from "react-animate-on-scroll";

const SocialContainer = styled.div`
  position: fixed;
  top: 55%;
  left: 1.5rem;
  transform: translateY(-50%);

  ul {
    display: block;
  }

  .item + .item {
    margin-top: 1rem;
  }

  a {
    font-size: 2.3rem;
    color: #66dbfa;
    &:hover {
      color: #ffffff;
    }
  }

  @media screen and (max-width: 1000px) {
    margin-top: 2rem;
    position: relative;
    top: 0;
    left: 0;
    ul {
      display: flex;
      justify-content: center;
      align-items: center;
      list-style: none;
    }

    a {
      font-size: 2.5rem;
      color: #66dbfa;
      &:hover {
        color: rgb(9, 134, 250);
      }
    }

    .item + .item {
      margin-top: 0;
      margin-left: 2rem;
    }
  }
`;
function FixSocialIcon() {
  return (
    <SocialContainer>
      <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
        <ul>
          <li className="item">
            <a
              href="https://www.linkedin.com/in/hxddad/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </li>
          <li className="item">
            <a
              href="https://github.com/hxddad"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </li>
        </ul>
      </ScrollAnimation>
    </SocialContainer>
  );
}

export default FixSocialIcon;
