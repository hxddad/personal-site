import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
        <ScrollAnimation animateIn="fadeIn">
          <Image
            src="/favicon.ico"
            alt="man-svgrepo"
          />
        </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeIn">
            Hello👋! My name is <u>Yazan</u> and I'm a Software Engineering 
            student at York University. Alongside my studies, I'm
            currently exploring my passions through various technologies and building projects.
             I have touched upon fields including web development, 
            machine learning, cloud computing, and more. I'm always eager to learn new things and
            looking for new opportunities to grow as a developer.
      
            </ScrollAnimation>

            <br /><br />


            <ScrollAnimation animateIn="fadeIn">
              <div className="tagline2">
                I'm familiar with the following technologies:
              </div>
            </ScrollAnimation>
            

            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeIn" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>

        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
