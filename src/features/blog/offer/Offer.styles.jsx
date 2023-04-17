import styled from "styled-components";

export const PageHeader = styled.div`
  display: flex;
  justify-content: center;
  margin: 3rem 0;
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const OfferDiv = styled.div`
  border: 1px solid ${({ theme }) => theme.bg1};
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 300px;
  ul {
    list-style: none;
  }
  .header {
    margin: 1rem 0;
    text-align: center;
  }
`;

export const PageInfo = styled.div``;

export const OfferContainer = styled.div`
  display: flex;
  gap:4rem;
  margin-top: 3rem;
`;
