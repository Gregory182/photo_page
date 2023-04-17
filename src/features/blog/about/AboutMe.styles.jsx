import { Link } from "react-router-dom";
import styled from "styled-components";

export const FirstSection = styled.section`
  background: url("https://lh3.googleusercontent.com/pw/AL9nZEVefCrrrTNfdfh58eD0LrFC6ulukXneL5xKvY61BkKrGvjwOH4XVcoLVoE2D6PL_opjzguDaPvcBy-zzMtQbEgqsiDWQyD1qqYBrCg5qLbRVWRVS-GnRezTRcOQ1OU_9vfk7gW2syk4D8nCtWk5NAAI2g=w1391-h928-no?authuser=0");
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
`;

export const MockTemp = styled.div`
  width: 100%;
  height: 500px;
  background-color:#fff;
`;

export const Section = styled.section`
  align-items: center;
  background-color:#fff;
  justify-content: center;
  display: flex;
  margin: 10px auto 50px auto;
  padding: 50px 0px;
  width: 100%;
  /* background : radial-gradient(#8383837a 2px, transparent 4px) 0 0 / 110px 110px; */
`;
export const SvgDevider = styled.div`
  width: 100%;
  background-color: ${({theme})=>theme.colors.dts};
  /* overflow:hidden; */
  svg {
    filter: drop-shadow(0.625rem 0.3125rem 0.3125rem rgba(0, 0, 0, 0.03));
    fill: #fff;
    height: 1.4rem;
    width: 100%;
  }
`;

export const Flex = styled.div`
  display: flex;
  justify-content: center;
  gap: 140px;
  display: flex;
  width: 1467px;
  overflow: hidden;
`;


export const ImgWithButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  img {
    width: 420px;
  }
`;

export const InnerContainer = styled.section`
  align-items: center;
  background-color: ${({theme})=>theme.colors.dts};
  display: flex;
  font-size: 1.25rem;
  gap: 60px;
  justify-content: center;
  line-height: 2rem;
  padding: 50px 0px;
  text-align: center;
  width: 100%;
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
`;
export const SLink = styled(Link)`
  background-color: transparent;
  border: 2px solid #3c3c3c;
  color: #2f2f2f;
  display: inline-block;
  font-weight: bold;
  margin: 20px 0;
  padding: 0.5em 1em;
  text-decoration: none;
  text-transform: capitalize;
  transition: all ease-in-out 120ms;
  width: 100%;
  &:hover {
    background-color: #3c3c3c;
    color: white;
  }
`;

export const FullWidthSection = styled.section`
  align-items: center;
  display: flex;
  min-height: 500px;
  width: 100vw;
  background-color: ${({ bg, theme }) => theme.colors[bg]};
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    margin: 40px 0px;
  }
`;

export const TextPart = styled.div`
  flex: 2;
  margin: 70px;
  font-size: 24px;
  line-height: 38px;
`;
export const PhotoPart = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  margin: 0 24px;
  @media (max-width: 768px) {
    margin-bottom: 50px;
  }
`;
export const Abs = styled.div`
  position: relative;
`;
