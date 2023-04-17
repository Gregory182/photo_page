import { Outlet } from "react-router-dom";
import styled from "styled-components";

import Footer from "../ui/Footer/Footer";
import Header from "../ui/header/Header";

const BlogLayoutStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 120px 0 0 0;
  `;

const Main = styled.main`
  background-color: #fff;
  flex:1;
  width:100%;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
`;

export const BlogLayout = () => {
  return (
    <BlogLayoutStyle data-test-id='main-layout-div'>
      <Header />
      <Main data-test-id='main-div'>
        <Outlet />
      </Main>
      <Footer />
    </BlogLayoutStyle>
  );
};
