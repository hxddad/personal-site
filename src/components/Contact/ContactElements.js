import styled from "@emotion/styled";

export const ContactWrapper = styled.div`
  margin: 5rem 0;
  padding: 0 1rem; /* Add padding for better spacing on smaller screens */
`;

export const Email = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column; /* Stack elements for better mobile responsiveness */
  justify-content: center; /* Center elements for both desktop and mobile */
  flex-wrap: nowrap; /* Prevent wrapping */
  row-gap: 1rem; /* Add spacing between rows */
  padding: 1rem; /* Add padding to the container for spacing */

  span {
    font-size: 1rem;
    font-weight: 400;
    color: #fff; /* Default color for span text */
    text-align: center; /* Center align text for smaller screens */
    max-width: 100%; /* Prevent text from exceeding container */
    word-break: break-word; /* Ensure text breaks properly */
  }

  /* Mobile devices: 360px to 412px */
  @media (min-width: 360px) and (max-width: 412px) {
    span {
      font-size: 1.25rem; /* Slightly larger text for small mobile screens */
    }
  }

  /* Larger mobile devices: 393px to 480px */
  @media (min-width: 393px) and (max-width: 480px) {
    span {
      font-size: 1.5rem; /* Slightly larger text for wider mobile screens */
    }
  }

  /* Tablets: 768px to 1280px */
  @media (min-width: 768px) and (max-width: 1280px) {
    span {
      font-size: 2rem; /* Adjust font size for tablets */
    }
  }

  /* Desktop: 1280px to 1920px */
  @media (min-width: 1280px) and (max-width: 1920px) {
    span {
      font-size: 2.5rem; /* Larger font size for desktops */
    }
  }

  /* Ultra-wide desktops (greater than 1920px) */
  @media (min-width: 1921px) {
    span {
      font-size: 3rem; /* Maximum font size for ultra-wide screens */
    }
  }
`;

export const ExternalEmail = styled.a`
  text-decoration: none;
  color: inherit; /* Inherit color from the parent */
  display: block; /* Make the email clickable as a block */
  font-size: inherit; /* Match the font size of the parent span */
  text-align: center; /* Center align the text */
  padding: 0.5rem 1rem; /* Add padding for better touch area */
`;
