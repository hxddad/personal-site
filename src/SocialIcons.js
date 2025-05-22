import { FaLinkedin, FaGithub } from "react-icons/fa";
import styled from "@emotion/styled";

const SocialContainer = styled.div`
  position: fixed;
  top: 2rem;  
  left: 50%;  // Changed from 1.5rem
  transform: translateX(-50%);  // Changed from translateY(-50%)
  z-index: 1000;

  ul {
    display: flex;  // Changed from block
    justify-content: center;
    align-items: center;
    list-style: none;
    padding: 0;
  }

  .item + .item {
    margin-left: 2rem;  // Changed from margin-top
  }

  a {
    font-size: 2.3rem;
    color: #66dbfa;
    &:hover {
      color: #ffffff;
    }
  }

  @media screen and (max-width: 1000px) {
    position: fixed;  // Changed to keep it fixed on mobile
    margin-top: 0;   // Removed extra margin
    
    a {
      font-size: 2.5rem;
      &:hover {
        color: rgb(9, 134, 250);
      }
    }
  }
`;
function SocialIcons() {
  return (
    <SocialContainer>
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
    </SocialContainer>
  );
}

export default SocialIcons;
