import React from 'react'
import LogoImg from "../../../images/logo1.png";
import { StyledFooter, FooterContent, Logo, Contact, Socials, CopyRight } from './styles';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return <StyledFooter>
    <FooterContent>
      <Logo>
        <img src={LogoImg} alt="" />
      </Logo>
      <Socials>
        <h3>Odwiedź mnie na:</h3>
        <ul>
          <li>
            <a href="https://pl-pl.facebook.com/" target='_blank'> <FaFacebook />Facebook</a>
          </li>
          <li>
            <a href="https://pl-pl.facebook.com/" target='_blank'><FaInstagram /> Instagram</a></li>
        </ul>
      </Socials>
      <Contact>
        <h3>Kontakt</h3>
        <p>email: rofoto@gmail.com</p>
        <p>tel: 791 091 019</p>
        <Link to='kontakt' className='contact-me'>Napisz do mnie</Link>
      </Contact>
    </FooterContent>
    <CopyRight>
      Copyright GR
    </CopyRight>
  </StyledFooter>

}

export default Footer
