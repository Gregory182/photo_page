import React from "react";
import styled from "styled-components";
import Cards from "./Cards";
import { cards } from "../../../mocks";

const Container = styled.div`
  align-items: center;
  justify-content:center;
  display: flex;
  flex-direction: column;
  width: 1300px;
`;
const HWraper = styled.div`
  height: 130px;
  display: flex;
  align-items: center;
`;

const Portfolio = () => {
  return (
    <Container data-test-id='container'>
      <HWraper>
        <h1>Portfolio</h1>
      </HWraper>
      {cards.map((item, ind) => (
        <Cards key={ind} item={item} />
      ))}
    </Container>
  );
};

export default Portfolio;
