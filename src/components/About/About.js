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
            Hello👋! My name is <strong>Yazan</strong> and I'm currently studying 
            Software Engineering at York University. I have taken courses
            such as Embedded Systems, Computer Organization, Operating
            Systems and more, that sparked an interest for Low-Level Systems.
            As an engineer and a life-long learner, I'm fascinated on how 
            how things work on a deeper level. How does our code from
            our favourite programming language successfully compile and work? 
            How is memory managed in our computer? So you may find me often
            coding or surfing the internet with C/C++, Assembly or Rust (and a bit of Python for LeetCode 😀).

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
