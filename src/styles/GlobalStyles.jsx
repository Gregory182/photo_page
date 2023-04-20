import { createGlobalStyle } from "styled-components";

export const Globalstyles = createGlobalStyle`
  *,*::after,*::before{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }

  body{
    /* color:#8E8E8F; */
    /* font-family: 'Lato', sans-serif; */
    font-family: "Montserrat",sans-serif;
    font-weight: 400;
    background-color: #fff;
    overflow-x: hidden;
  }

  #root{
    height:100vh;
    
  }
`;
