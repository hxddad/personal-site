import styled from "@emotion/styled";

export const Card = styled.div`
  display: grid;
  grid-gap: 2rem;
  margin-bottom: 4rem;
  grid-template-columns: 1fr;
  padding-bottom: 2rem;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: #66dbfa 0px 5px 50px;
  min-height: 300px; /* Add fixed height */
  width: 100%; /* Ensure full width */
  @media (min-width: 992px) {
    grid-template-columns: repeat(2, 1fr); /* Adjusted */
    border-bottom: 0;
    padding-bottom: 0;
  }
`;

export const CardLeft = styled.div`
  justify-self: center;
  height: 300px; /* Fixed height */
  width: 100%; /* Fixed width */
  position: relative; /* Add this */
  img {
    position: absolute; /* Add this */
    top: 0;
    left: 0;
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
`;

export const CardRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h4 {
    font-size: 1.8rem;
    font-weight: 400;
    color: #FFFFFF;
    margin-bottom: 0.5rem; /* Added */
  }

  p {
    font-weight: 400;
    font-size: 20px;
    max-width: 95%;
    margin-top: 10px;
    margin-bottom: 1rem;
    color: #FFFFFF;
    text-align: center;

    @media (min-width: 992px) {
      text-align: start;
    }
  }
  @media (min-width: 992px) {
    align-items: flex-start;
    margin-top: 1rem;
  }
`;

export const BtnGroup = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
`;

export const TechCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media (min-width: 992px) {
    justify-content: flex-start;
  }
`;

export const TechCard = styled.div`
  border-radius: 10px;
  background-color: #fff;
  padding: 5px 10px;
  margin: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.815);
  cursor: default;
  box-shadow: 0px 2px 5px rgba(160, 170, 180, 0.6);
`;
