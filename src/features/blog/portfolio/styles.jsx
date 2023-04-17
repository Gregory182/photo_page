import styled from 'styled-components'

export const PortfolioContainer = styled.div`
  width: 80%;
  height: 300px;
  margin-bottom: 90px;
  display: flex;
  flex-direction: ${({ layout }) => layout || 'row'};
`

export const ImageDiv = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 90%;
    height: 100%;
    object-fit: cover;
  }
`
export const DescriptionDiv = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  h4 {
    font-size: 26px;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 8px;
    color: ${({ theme }) => theme.colors.text1};
  }

  a {
    text-decoration: none;

    border: 1px solid ${({ theme }) => theme.colors.text1};
    border-radius: 6px;
    width: 200px;
    text-align: center;
    padding: 10px 10px;
    &:hover {
      color: #eee;
      background-color: ${({ theme }) => theme.colors.text1};
    }
    transition: ease-in-out 100ms;
  }

  p {
    color: ${({ theme }) => theme.colors.text1};
    text-align: center;
    line-height: 25px;
    font-size: 18px;
    padding: 0px 30px;
  }
`
