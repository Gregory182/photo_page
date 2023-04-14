import { Outlet } from "react-router-dom";
import styled from "styled-components";

import Footer from "../ui/Footer/Footer";
import Header from "../ui/header/Header";

const BlogLayoutStyle = styled.div`
  display: flex;
  flex-direction: column;
  /* height: 100%; */
  padding-top: 120px;
`;

const Main = styled.main`
  background-color: #fff;
`;
const Fejk = styled.div`
  width: 100%;
  height: 10rem;
  background: transparent !important;
`;

export const BlogLayout = () => {
  return (
    <BlogLayoutStyle>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Fejk></Fejk>
      <Footer />
    </BlogLayoutStyle>
  );
};
