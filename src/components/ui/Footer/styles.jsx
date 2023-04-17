import styled from 'styled-components'

export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.dts};
  height: 15rem;
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  margin-top:3px;
  width:100%;
  position:relative;
  :before{
    content:' ';
    width:100%;
    height:23rem;
    box-shadow: 0 0.0625rem 0.1225rem rgba(0, 0, 0, 0.2),
    rgba(0, 0, 0, 0.05) 0 0.625rem 0.9375rem -0.3125rem,
    rgba(0, 0, 0, 0.04) 0 0.4375rem 0.4375rem -0.3125rem;
  }
  `

export const FooterContent = styled.div`
    padding:3em;
    height: 15rem;
    width:80%;
    display:flex;
    align-items:start;
    justify-content:space-between;
`

export const Logo = styled.div`
     img{
      width:450px;
    }
`

export const Contact = styled.div`
    position:relative;
    margin-right:80px;
    display:flex;
    flex-direction:column;
    gap:0.25rem;
    h3{
        margin-bottom:0.5rem;
    }
    :before{
        background-color:rgba(0, 0, 0, 0.5);
        content: ' ';
        height:120px;
        position:absolute;
        width:3px;
        translate: -20px;
    }

    .contact-me{
        color:blue;
        cursor: pointer;
        font-size:1rem;
        text-decoration:none;
        font-weight:bold;
    }
    
`
export const Socials = styled.div`
    h3{
        margin-bottom:0.5rem;
    }
    li{
        align-items:center;
        display:flex;
        font-size:1.5rem;
        gap:1rem;
        margin-bottom:1rem;
    }
    a{
        align-items:center;
        color:black;
        display:flex;
        font-weight:bold;
        gap:1rem;   
        text-decoration:none;
    }
    :before{
        background-color:rgba(0, 0, 0, 0.5);
        border-radius:1rem;
        content: ' ';
        height:120px;
        position:absolute;
        width:3px;
        translate: -20px;
    }
`
export const CopyRight = styled.div`
    display:flex;
    width:100%;
    margin-left:10px;
`

