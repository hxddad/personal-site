import { FaLinkedin, FaGithub, FaFileAlt } from "react-icons/fa";
import styled from "@emotion/styled";

const SocialContainer = styled.div`
  position: fixed;
  top: 2rem;  
  left: 50%;  
  transform: translateX(-50%);  
  z-index: 1000;

  ul {
    display: flex;  
    justify-content: center;
    align-items: center;
    list-style: none;
    padding: 0;
  }

  .item + .item {
    margin-left: 2rem;  
  }

  a {
    font-size: 3rem;
    color: #66dbfa;
    &:hover {
      color: #ffffff;
    }
  }

  @media screen and (max-width: 1000px) {
    position: fixed;  
    margin-top: 0;   
    
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
          <li className="item">
            <a
              href="/path-to-your-resume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFileAlt />
            </a>
          </li>
        </ul>
    </SocialContainer>
  );
}

export default SocialIcons;
