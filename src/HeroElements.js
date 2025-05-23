import styled from "styled-components";

export const HeroContainer = styled.div`
  padding-bottom: 2rem;
  padding-top: 4rem;
  padding-right: 1rem;
  padding-left: 1rem;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  min-height: 100vh; 
  justify-content: center; 

  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1000px;
  }
`;

export const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  h1 {
    font-size: 4rem;
    color: #FFFFFF;
    opacity: 0.98;
    font-weight: 400;
    margin-top: 0; 
    margin-bottom: 1rem;
    width: 100%;
  }

  h5 {
    font-size: 2rem;
    color: #66dbfa;
    margin-top: 0.5rem;    
    margin-bottom: 2rem;
    font-weight: 400;
    width: 100%;
  }

  @media screen and (max-width: 992px) {
    margin-bottom: 2rem;

    h5 {
      min-height: 9rem;
    }
  }
`;

export const Image = styled.img`
  height: 420px;
  width: auto;
`;


