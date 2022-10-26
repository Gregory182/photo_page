import styled from 'styled-components'

export const StyledPhotoSection = styled.div`
  display: flex;
  gap: 50px;
  margin-bottom: 60px;
`

export const StyledImg = styled.img`
  width: 100%;
  height: 600px;
  padding-bottom: 35px;
  object-fit: cover;
`

export const StyledImgCard = styled.div`
  width: 400px;
  background-color: white;
`
export const StyledSpanBtn = styled.span`
  width: 100%;
  border: 1px solid #888;
  display: inline-block;
  text-align: center;
  padding: 12px;
  font-size: 1.1rem;
  transition: 0.2s;

  &:hover {
    background-color: #555;
    color: white;
  }
`
