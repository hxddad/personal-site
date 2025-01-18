import React from "react";
import styled from "@emotion/styled";

const FooterSection = styled.div`
  background-image: url('https://raw.githubusercontent.com/D3Ext/aesthetic-wallpapers/main/images/retro_city.gif');
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 0px;
  position: relative;

  span {
    position: absolute;
    bottom: 4rem;
    color: #fff;

    a {
      text-decoration: underline;
    }
  }
`;
function Footer() {
  return (
    <FooterSection>
      <div className="Container"/>
    </FooterSection>
  );
}

export default Footer;
