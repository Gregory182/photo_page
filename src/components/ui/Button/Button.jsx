import styled from '@emotion/styled/macro'

export const Button = styled.button`
  font-size: ${(props) => props.size};
  padding: 0.6em 1.2em;
  letter-spacing: 0.2em;
  background-color: inherit;
  border: 1px solid #256d7d;
  box-shadow: 0 0 1px 0px rgba(143, 195, 207, 0.8);
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    background-color: #1a4f5b11;
  }
`
