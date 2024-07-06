import React from "react";
import styled from "@emotion/styled";

const FooterSection = styled.div`
  background-image: url('https://mir-s3-cdn-cf.behance.net/project_modules/1400/bbefa799786133.5efa9bf3d1b49.gif');
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 150px;
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
