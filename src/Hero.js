import { useState, useEffect } from "react";
import SocialIcons from './SocialIcons';
import {
  HeroContainer,
  HeroWrapper,
} from "./HeroElements";
import { TypeAnimation } from 'react-type-animation';

function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [randomChoice, setRandomChoice] = useState('');

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const getRandomChoice = () => {
    const choices = ['🪨', '📄', '✂️'];
    return choices[Math.floor(Math.random() * choices.length)];
  };

  useEffect(() => {
    setRandomChoice(getRandomChoice());
  }, [showSubtitle]);

  return (
    <main>
      <SocialIcons />
      <HeroContainer>
        <HeroWrapper>
            <TypeAnimation
              cursor={true}
              sequence={[
                'hello, i\'m yazan.',
                () => setShowSubtitle(true)
              ]}
              speed={30}  
              wrapper="h1"
              repeat={0}
            />
            {showSubtitle && (
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
                  'you can click on my icons above, you know...',
                  1000,
                  'look,',
                  500,
                  'look, nothing interesting will happen here.',
                  1000,
                  '...',
                  1000,
                  'since you\'re still here...',
                  500,
                  'let\'s play a game of rock, paper, scissors.',
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
            )}
        </HeroWrapper>
      </HeroContainer>
    </main>
  );
}

export default Hero;
