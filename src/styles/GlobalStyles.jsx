import { createGlobalStyle } from 'styled-components'

export const Globalstyles = createGlobalStyle`
  *,*::after,*::before{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }

  body{
    font-family: 'Lato', sans-serif;
    width:100vw;  
    overflow-x:hidden;
  }

  
`
