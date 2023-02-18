import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Kotel from '../images/kotel.png'

const FirstSection = styled.section`
  background: url('https://lh3.googleusercontent.com/pw/AL9nZEVefCrrrTNfdfh58eD0LrFC6ulukXneL5xKvY61BkKrGvjwOH4XVcoLVoE2D6PL_opjzguDaPvcBy-zzMtQbEgqsiDWQyD1qqYBrCg5qLbRVWRVS-GnRezTRcOQ1OU_9vfk7gW2syk4D8nCtWk5NAAI2g=w1391-h928-no?authuser=0');
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  height: 500px;
  position: relative;
  width: 100vw;
  p {
    font-size: 42px;
    font-weight: bold;
    color: white;
    position: absolute;
    left: 320px;
    top: 270px;
  }
  @media (max-width: 768px) {
    height: calc((100vw) * 0.5625);
    width: 100%;
    p {
      left: 20px;
      top: 60%;
    }
  }
  /* @media (max-width: 338px) {
    max-height: 200px;
    width: 100%;
  } */
`

const MockTemp = styled.div`
  width: 80%;
  height: 500px;
`

const InnerContainer = styled.section`
  align-items: center;
  display: flex;
  font-size: 1.25rem;
  gap: 60px;
  justify-content: center;
  line-height: 2rem;
  margin: 120px auto 50px auto;
  text-align: center;
  width: 90%;
  img {
    width: 450px;
  }
  h1 {
    margin-top: 8px;
    padding: 16px;
  }
  p {
    width: 450px;
    font-size: 24px;
    margin: 30px 0;
    padding: 0 16px;
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 40px 0px;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
`
const SLink = styled(Link)`
  background-color: transparent;
  border: 2px solid #3c3c3c;
  color: #2f2f2f;
  display: inline-block;
  font-weight: bold;
  margin: 120px auto;
  padding: 0.5em 1em;
  text-decoration: none;
  text-transform: capitalize;
  transition: all ease-in-out 120ms;
  width: 80%;
  &:hover {
    background-color: #3c3c3c;
    color: white;
  }
`

const FullWidthSection = styled.section`
  align-items: center;
  display: flex;
  min-height: 500px;
  width: 100vw;
  background-color: #e8e8e8;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    margin: 40px 0px;
  }
`
const FullWidthSectionWhite = styled.section`
  align-items: center;
  display: flex;

  min-height: 500px;
  width: 100vw;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    margin: 40px 0px;
  }
`

const TextPart = styled.div`
  flex: 2;
  margin: 70px;
  font-size: 24px;
  line-height: 38px;
`
const PhotoPart = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  margin: 0 24px;
  @media (max-width: 768px) {
    margin-bottom: 50px;
  }
`

function AboutMe() {

  console.log(process.env)
  return (
    <>
      <FirstSection>
        <p>O MNIE</p>
      </FirstSection>
      <InnerContainer>
        <div>
          <img
            src='http://rozpmon.atthost24.pl/wp-content/uploads/2022/06/DSC_8029-1025x1536.jpg'
            alt='Ups'
          />
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
          <SLink to='kontakt'>Napisz do mnie</SLink>
        </div>
      </InnerContainer>
      <FullWidthSection>
        <TextPart>
          Swoją przygodę z fotografią zaczęłam ok 15 lat temu, jednak z racji
          wieku i budżetu na sprzęt zaprzestałam fotografować. Do fotografii
          wróciłam w 2019 roku, kiedy to w Naszym życiu pojawił się kot –
          Szuszłachy. Był tak uroczym kociakiem, że zaczęłam mu robić zdjęcia
          telefonem, a następnie na moje urodziny dostałam od męża mój pierwszy
          aparat.
        </TextPart>
        <PhotoPart>
          <img src={Kotel} alt='' width='300px' />
        </PhotoPart>
      </FullWidthSection>
      <FullWidthSectionWhite>
        <PhotoPart>
          <img src={Kotel} alt='' width='300px' />
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
      </FullWidthSectionWhite>
      <MockTemp></MockTemp>
    </>
  )
}

export default AboutMe
