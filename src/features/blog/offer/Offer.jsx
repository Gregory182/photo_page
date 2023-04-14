import React from "react";
import {
  Flex,
  OfferContainer,
  OfferDiv,
  PageHeader,
  PageInfo,
} from "./Offer.styles";

const Offer = () => {
  return (
    <Flex>
      <PageHeader>
        <h1>Oferta</h1>
      </PageHeader>
      <PageInfo>
        <h2>Poznajmy się lepiej</h2>
        <div>
          Dzięki zdobytemu doświadczeniu,przedstawiona poniżej oferta jest
          dopasowana do wymagań klientów,
        </div>
      </PageInfo>
      <OfferContainer>
        <OfferDiv>
          <div className="header">
            <h2>Sesja 1</h2>
          </div>
          <div>
            <ul>
              <li>Hello</li>
              <li>Moto</li>
            </ul>
          </div>
        </OfferDiv>
        <OfferDiv>
          <div className="header">
            <h2>Sesja 2</h2>
          </div>
          <div>
            <ul>
              <li>Hello</li>
              <li>Moto</li>
            </ul>
          </div>
        </OfferDiv>
      </OfferContainer>
    </Flex>
  );
};

export default Offer;
