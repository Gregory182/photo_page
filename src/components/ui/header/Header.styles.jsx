import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledHeader = styled.header`
  align-items: center;
  background-color: rgb(255, 255, 255);
  box-shadow: 0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.05),
    rgba(0, 0, 0, 0.05) 0 0.625rem 0.9375rem -0.3125rem,
    rgba(0, 0, 0, 0.04) 0 0.4375rem 0.4375rem -0.3125rem;
  display: flex;
  flex-direction: row;
  height: 6rem;
  justify-content: center;
  top: 0;
  position: fixed;
  width: 100%;
  z-index: 1000;
`;
export const Image = styled.img`
  height: 60px;
`;

export const Burger = styled.div`
  display: none;
  img {
    width: 250px;
  }
  @media (max-width: 768px) {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-around;
  }
`;
export const Hb = styled.div`
  position: relative;
  width: 40px;
  height: 4px;
  background-color: black;
  border-radius: 40px;
  ::after {
    content: "";
    position: absolute;
    width: 40px;
    height: 4px;
    background-color: black;
    border-radius: 40px;
    transform: translateY(12px);
  }
  ::before {
    content: "";
    position: absolute;
    width: 40px;
    height: 4px;
    background-color: black;
    border-radius: 40px;
    transform: translateY(-12px);
  }
`;

export const StyledNavList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  justify-items: center;
  width: 90%;
  @media (max-width: 768px) {
    display: none;
  }
`;
export const StyledLink = styled(NavLink)`
  list-style: none;
  text-decoration: none;
  text-transform: uppercase;
  margin: 0px 12px;
  color: #222;
  padding: 10px;
  cursor: pointer;
  @media (max-width: 1080px) {
    :nth-child(4) {
      display: none;
    }
  }
`;

