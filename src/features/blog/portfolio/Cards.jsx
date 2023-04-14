import {
  DescriptionDiv,
  ImageDiv,
  PortfolioContainer,
} from './StyledPortfolio'

const Cards = ({ item: { id, title, description, img } }) => {
  return (
    <PortfolioContainer layout={id % 2 === 0 && 'row-reverse'}>
      <ImageDiv>
        <img src={img} alt='' />
      </ImageDiv>
      <DescriptionDiv>
        <h4>{title}</h4>
        <p>{description}</p>
        <a href='#'>Więcej</a>
      </DescriptionDiv>
    </PortfolioContainer>
  )
}

export default Cards
