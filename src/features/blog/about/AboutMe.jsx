import Kotel from "../../../images/kotel.png";
import sisi from "../../../images/sisi.jpeg";

import {
  InnerContainer,
  SLink,
  FullWidthSection,
  TextPart,
  PhotoPart,
  MockTemp,
  Section,
  Flex,
  ImgWithButton,
  SvgDevider,
  Trans,
} from "./AboutMe.styles";

function AboutMe() {
  return (
    <>
      <Section>
        <Flex>
          <ImgWithButton>
            <img src={sisi} alt="Ups" />
            <SLink to="kontakt">Napisz do mnie</SLink>
          </ImgWithButton>
          <ImgWithButton>
            <img src={sisi} alt="Ups" />
            <SLink to="kontakt">Napisz do mnie</SLink>
          </ImgWithButton>
        </Flex>
      </Section>
      <SvgDevider>
        <svg
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V0H0v27.35a600.21 600.21 0 00321.39 29.09z"></path>
        </svg>
      </SvgDevider>
      <InnerContainer>
        <div>
          <img src={sisi} alt="Ups" />
        </div>
        <div>
          <h1>Cześć, Tu Monia</h1>
          <p>
            Zapraszam Cię do mojego świata fotografii w którym skupiam się na
            pokazywaniu uczucia, naturalności i ciepła jakie widzę miedzy Wami!
            <br /> <br />
            Nie lubię sztuczności, bardzo pozowanych zdjęć oraz nadmiernego
            retuszu.
          </p>
          <SLink to="kontakt">Napisz do mnie</SLink>
        </div>
      </InnerContainer>
      <FullWidthSection bg="bg2">
        <TextPart>
          Swoją przygodę z fotografią zaczęłam ok 15 lat temu, jednak z racji
          wieku i budżetu na sprzęt zaprzestałam fotografować. Do fotografii
          wróciłam w 2019 roku, kiedy to w Naszym życiu pojawił się kot –
          Szuszłachy. Był tak uroczym kociakiem, że zaczęłam mu robić zdjęcia
          telefonem, a następnie na moje urodziny dostałam od męża mój pierwszy
          aparat.
        </TextPart>
        <PhotoPart>
          <img src={Kotel} alt="" width="300px" />
        </PhotoPart>
      </FullWidthSection>
      <FullWidthSection bg="bg1">
        <PhotoPart>
          <img src={Kotel} alt="" width="300px" />
        </PhotoPart>
        <TextPart>
          Potem rozwijałam się jak burza – robiłam zdjęcia wszystkim, co
          pozwoliło mi zawęzić moje zainteresowania fotograficzne do zdjęć
          zakochanych, zdjęć rodzinnych i zdjęć noworodków w zaciszu domowym.
          <br />
          <br />
          Okazjonalnie robię sesje zdjęciowe wizerunkowe oraz różne uroczystości
          – śluby cywilne czy chrzciny.
        </TextPart>
      </FullWidthSection>
      <MockTemp>
  
      </MockTemp>
    </>
  );
}

export default AboutMe;
