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
            Hello! My name is <strong>Yazan</strong> and I'm currently studying 
            Software Engineering at York University. In my high school courses, I was 
            interested in my mathematics, chemistry and physics classes that
            involved problem-solving, which inspired me to pursue engineering. 
            I also had a burning interest in technology and the 
            devices we use today and as a child, that determined the engineering
            discipline I wanted to get into. 
            </ScrollAnimation>

            <br /><br />
            
            <ScrollAnimation animateIn="fadeIn">
            From opening a computer for the very first time as a child to our favorite video game
            in our teen years, we have made irreplaceable memories that shape who we are today. 
            I want to be able to create these memories and nostalgia that will inspire
            the next generation to take the reins of our world. I'm grateful that I have
            the opportunity today to deliver this. 
            </ScrollAnimation>

            <br /><br />

            <ScrollAnimation animateIn="fadeIn">
              Working collaboratively within a team towards a shared objective has been an incredibly rewarding and unique experience for me. I am eager to continue exploring exciting projects in the future, with a particular interest in web development and cross-platform mobile development.
              <div className="tagline2">
                I'm familiar following technologies:
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
