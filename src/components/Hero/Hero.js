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
                  'hello, i\'m yazan.',
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
                    'i\'m an engineering student.',
                    1000,
                    'i\'m a problem solver.',
                    1000,
                    'i\'m an aspiring developer.',
                    1000,
                    'i\'m a...',
                    1000,
                    'so...',
                    500,
                    'so...you\'re still here?',
                    1000,
                    'you can scroll down now...',
                    1000,
                    'look,',
                    500,
                    'look, nothing interesting will happen here.',
                    1000,
                    '...',
                    1000,
                    'since you\'re still here,',
                    500,
                    'since you\'re still here, let\'s play a game of rock, paper, scissors.',
                    1000,
                    'okay here we go...',
                    1000,
                    'rock',
                    200,
                    'rock, paper,',
                    200,
                    'rock, paper,',
                    200,
                    'rock, paper, scissors',
                    100,
                    'rock, paper, scissors, shoot!',
                    50,
                    `rock, paper, scissors, shoot! ${randomChoice}`,
                    1000,
                    `well that was fun!`,
                    1000,
                    `well that was fun! did i win?`,
                    1000,
                    `well that was fun! did i win? i'll restart the loop now...`,
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
