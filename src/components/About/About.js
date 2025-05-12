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
        <div className="SectionTitle">about me.</div>
        <div className="BigCard">
        <ScrollAnimation animateIn="fadeIn">
          <Image
            src="/favicon.ico"
            alt="man-svgrepo"
          />
        </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeIn">
             👋 hello, i'm <u>yazan</u>! i'm a software engineering  
              student at york university currently looking for internship
              opportunities. you can view some of my projects below!  
            </ScrollAnimation>

            <br /><br />


            <ScrollAnimation animateIn="fadeIn">
              <div className="tagline2">
                i'm familiar with the following technologies:
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
