import React from "react";
import LogoImg from "../../../images/logo1.png";
import {
  StyledFooter,
  FooterContent,
  Logo,
  Contact,
  Socials,
  CopyRight,
} from "./Footer.styles";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <StyledFooter>
      <FooterContent>
        <Logo>
          <img src={LogoImg} alt="" />
        </Logo>
        <Socials>
          <h3>Odwiedź mnie na:</h3>
          <ul>
            <li>
              <a
                className="fb"
                href="https://www.facebook.com/MonikaRozpedzikPhotography"
                target="_blank"
              >
                <FaFacebook />
                <span>Facebook</span>
              </a>
            </li>
            <li>
              <a
                className="insta"
                href="https://www.instagram.com/monikarozpedzik/"
                target="_blank"
              >
                <FaInstagram />
                <span>Instagram</span>
              </a>
            </li>
          </ul>
        </Socials>
        <Contact>
          <h3>Kontakt</h3>
          <p>email: monikarozpedzik.photo@gmail.com</p>
          <p>tel: 791 091 019</p>
          <Link to="kontakt" className="contact-me">
            Napisz do mnie
          </Link>
        </Contact>
      </FooterContent>
      <CopyRight>Copyright &copy; GR</CopyRight>
    </StyledFooter>
  );
};

export default Footer;
