import React from "react";

import Logo from "../../../images/logo1.png";
import {
  StyledHeader,
  Container,
  StyledLink,
  StyledNavList,
  Image,
  Burger,
  Hb,
} from "./Header.styles";

function Header() {
  return (
    <StyledHeader>
      <Container>
        <StyledNavList>
          <StyledLink id="logo" to="/home">
            <Image src={Logo} alt="RozPhotos" />
          </StyledLink>
          <StyledLink to="/home">O mnie</StyledLink>
          <StyledLink to="/oferta">Oferta</StyledLink>
          <StyledLink to="/portfolio">Portfolio</StyledLink>
          <StyledLink to="/kontakt">Kontakt</StyledLink>
          <StyledLink to="/login">Strefa Klienta</StyledLink>
        </StyledNavList>
        <Burger>
          <div>
            <img src={Logo} alt="RozPhotos" />
          </div>
          <Hb></Hb>
        </Burger>
      </Container>
    </StyledHeader>
  );
}

export default Header;
