import React, { useState, useEffect } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Header from "../Header/Header";
import {
  HeroContainer,
  HeroWrapper,
  HeroLeft,
  HeroRight,
  ScrollDown,
  ScrollLink,
} from "./HeroElements";
import { TypeAnimation } from 'react-type-animation';
import ScrollAnimation from "react-animate-on-scroll";

function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showScrollDown, setShowScrollDown] = useState(false);
  const [randomChoice, setRandomChoice] = useState('');

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const getRandomChoice = () => {
    const choices = ['🪨', '📄', '✂️'];
    return choices[Math.floor(Math.random() * choices.length)];
  };

  useEffect(() => {
    // Generate a random choice when the component mounts or when needed
    setRandomChoice(getRandomChoice());
  }, [showSubtitle]);

  return (
    <main>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <HeroContainer>
        <HeroWrapper>
          <HeroLeft>
            <ScrollAnimation animateIn="fadeIn">
              <TypeAnimation
                cursor={false}
                sequence={[
                  'Hello, I\'m Yazan.',
                  () => setShowSubtitle(true)
                ]}
                speed={{ type: "keyStrokeDelayInMs", value: 100 }}
                wrapper="h1"
                repeat={0}
              />
              {showSubtitle &&
                <TypeAnimation
                  cursor={true}
                  sequence={[
                    500,
                    'I\'m an Engineering Student.',
                    1000,
                    'I\'m a Math Enthusiast.',
                    // 'I design and code beautifully simple things, and I love what I do.',
                    1000,
                    'I\'m a Problem Solver.',
                    1000,
                    'I\'m an Aspiring Developer.',
                    1000,
                    'I\'m a...',
                    1000,
                    'So...',
                    500,
                    'So...you\'re still here?',
                    1000,
                    'You can scroll down now...',
                    1000,
                    'Look,',
                    500,
                    'Look, nothing interesting will happen here.',
                    1000,
                    '...',
                    1000,
                    'Since you\'re still here,',
                    500,
                    'Since you\'re still here, let\'s play a game of Rock, Paper, Scissors.',
                    1000,
                    'Okay here we go...',
                    1000,
                    'Rock',
                    200,
                    'Rock, Paper,',
                    200,
                    'Rock, Paper,',
                    200,
                    'Rock, Paper, Scissors',
                    100,
                    'Rock, Paper, Scissors, Shoot!',
                    50,
                    `Rock, Paper, Scissors, Shoot! ${randomChoice}`,
                    1000,
                    `Well that was fun!`,
                    1000,
                    `Well that was fun! Did I win?`,
                    1000,
                    `Well that was fun! Did I win? I'll restart the loop now...`,
                    500,
                  ]}
                  speed={65}
                  deletionSpeed={70}
                  wrapper="h5"
                  repeat={Infinity}
                />
              }
            </ScrollAnimation>
          </HeroLeft>
          <HeroRight>
            <ScrollAnimation animateIn="fadeIn">
            </ScrollAnimation>
          </HeroRight>
        </HeroWrapper>
        {showScrollDown && 
          <ScrollAnimation animateIn="flipInX" offset={0}>
            <ScrollDown to="projects" id="scrollDown">
              <ScrollLink>
                Scroll down
                <img
                  src="/scroll-down.svg"
                  alt="scroll-down"
                />
              </ScrollLink>
            </ScrollDown>
          </ScrollAnimation>}
      </HeroContainer>
    </main>
  );
}

export default Hero;
