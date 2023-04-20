import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.dts};
  height: 15rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 3px;
  width: 100%;
  position: relative;
  :before {
    content: " ";
    width: 100%;
    height: 3px;
    box-shadow: 0 0.0625rem 0.1225rem rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0.07) 0 0.625rem 0.9375rem -0.3125rem,
      rgba(0, 0, 0, 0.04) 0 0.4375rem 0.4375rem -0.3125rem;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    height: 15rem;
    align-items: center;
    justify-content: center;
  }
`;

export const FooterContent = styled.div`
  padding: 3em;
  height: 15rem;
  width: 80%;
  display: flex;
  align-items: start;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;
  }
`;

export const Logo = styled.div`
  height: 100%;
  img {
    width: 450px;
  }
  @media (max-width: 768px) {
    img {
      width: 200px;
    }
    margin-bottom: 1rem;
  }
`;

export const Contact = styled.div`
  position: relative;
  margin-right: 80px;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  h3 {
    margin-bottom: 0.5rem;
  }
  :before {
    background-color: rgba(0, 0, 0, 0.5);
    content: " ";
    height: 120px;
    position: absolute;
    width: 3px;
    translate: -20px;
  }

  .contact-me {
    color: blue;
    cursor: pointer;
    font-size: 1rem;
    text-decoration: none;
    font-weight: bold;
  }
  @media (max-width: 768px) {
    align-items: center;
    justify-content: center;
    margin: 0;
    :before {
      content: none;
      height: 0px;
    }
    p {
      display: none;
    }
    h3 {
      display: none;
    }
    .contact-me {
      font-size: 1.25rem;
      margin-top: 0.5rem;
    }
  }
`;
export const Socials = styled.div`
  h3 {
    margin-bottom: 0.5rem;
  }
  li {
    align-items: center;
    display: flex;
    font-size: 1.5rem;
    gap: 1rem;
    margin-bottom: 1rem;
  }
  a {
    align-items: center;
    color: black;
    display: flex;
    font-weight: bold;
    gap: 1rem;
    text-decoration: none;
  }
  :before {
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 1rem;
    content: "";
    height: 120px;
    position: absolute;
    width: 3px;
    translate: -20px;
  }
  .fb {
    background: -webkit-linear-gradient(#80b1f0, #1877f2);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .insta {
    background: -webkit-linear-gradient(#fd2d43, #b200a6, #ffbf00);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  @media (max-width: 768px) {
    :before {
      content: none;
      height: 0px;
    }
    .fb span {
      display: none;
    }
    .insta span {
      display: none;
    }
    h3 {
      display: none;
    }
    ul {
      display: flex;
      gap: 1rem;
    }
  }
`;

export const CopyRight = styled.div`
  display: flex;
  width: 100%;
  margin-left: 10px;
`;
